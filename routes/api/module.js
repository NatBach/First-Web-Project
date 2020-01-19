const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Module = require('../../models/Module');
const User = require('../../models/User');

// @route     GET api/module
// @desc      Get all available modules in database
// @access    Private
router.get('/', auth, async (req, res) => {
	try {
			const module = await Module.find()
						
			if(!module){
					res.status(400).json({ msg: 'There is no module in database' });
			}
			
			res.json(module);

	} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
	}
});

// @route     GET api/module/me
// @desc      Get current users module profile
// @access    Private
router.get('/me', auth, async (req, res) => {
    try {
        const module = await Module.find({ user: req.user.id }).populate(
				'user', 
				['email', 'avatar']);

        if(!module){
            res.status(400).json({ msg: 'There is no module profile for this user' });
        }
        
        res.json(module);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route     GET api/module/:id
// @desc      Get module profile by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
	try {
			const module = await Module.findById(req.params.id);
	
			if (!module) {
				return res.status(404).json({ msg: 'Module not found' });
			}
	
			res.json(module);
	} catch (err) {
			if (err.kind === 'ObjectId') {
				return res.status(404).json({ msg: 'Module not found' });
			}
			res.status(500).send('Server Error');
	}
});

// @route     POST api/module
// @desc      Create or update user module profile
// @access    Private
router.post( '/', 
	[ auth, [   
			check('name', 'Name is required')
				.not()
				.isEmpty(),
			check('serialnumber', 'SerialNumber is required')
				.not()
				.isEmpty(),
			check('imei', 'IMEI is required')
				.not()
				.isEmpty(),
			check('macaddress', 'MACaddress is required')
				.not()
				.isEmpty(),
		]
	], async (req, res) => {
			const errors = validationResult(req);
			if(!errors.isEmpty()){
				return res.status(400).json({ errors: errors.array() });
			}
			const {
				name,
				serialnumber,
				imei,
				macaddress
			} = req.body;

			// Build module profile object
			const moduleFields = {};
			moduleFields.user = req.user.id;
			if(name) moduleFields.name = name;
			if(serialnumber) moduleFields.serialnumber = serialnumber;
			if(imei) moduleFields.imei = imei;
			if(macaddress) moduleFields.macaddress = macaddress;
		try {
			let checkModuleName = await Module.findOne({ name: moduleFields.name });
			let checkModuleSerialNumber = await Module.findOne({ serialnumber: moduleFields.serialnumber });
			let checkModuleImei = await Module.findOne({ imei: moduleFields.imei });
			let checkModuleMacaddress = await Module.findOne({ macaddress: moduleFields.macaddress });
			if(checkModuleName || checkModuleSerialNumber || checkModuleImei || checkModuleMacaddress){
				return res.status(400).json({ msg: 'This module is available, please enter new module' });
			}
			let module = await Module.findOne({ user: req.user.id });
			module = new Module(moduleFields);
			await module.save();
			res.json(module);

		} catch (error) {
			console.error(err.message);
			res.status(500).send('Server Error')
		}
	}
);

// @route     POST api/module
// @desc      Update module profile
// @access    Private
router.post( '/update/:id', auth, async (req, res) => {
	const moduleFieldsUpdate = {};
	try {
		await Module.findById(req.params.id);
		const {
			name,
			serialnumber,
			imei,
			macaddress
		} = req.body;
		// Build module profile object
		moduleFieldsUpdate.user = req.user.id;
		if(name) moduleFieldsUpdate.name = name;
		if(serialnumber) moduleFieldsUpdate.serialnumber = serialnumber;
		if(imei) moduleFieldsUpdate.imei = imei;
		if(macaddress) moduleFieldsUpdate.macaddress = macaddress;
	} catch (error) {
		return res.status(404).json({ msg: 'Module not found' });
	}

	try {
		// Update module
		let checkModuleName = await Module.findOne({ name: moduleFieldsUpdate.name });
		let checkModuleSerialNumber = await Module.findOne({ serialnumber: moduleFieldsUpdate.serialnumber });
		let checkModuleImei = await Module.findOne({ imei: moduleFieldsUpdate.imei });
		let checkModuleMacaddress = await Module.findOne({ macaddress: moduleFieldsUpdate.macaddress });
		if(checkModuleName || checkModuleSerialNumber || checkModuleImei || checkModuleMacaddress){
			return res.status(400).json({ msg: 'This module is available, please enter new module' });
		}
		let module = await Module.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: moduleFieldsUpdate },
			{ new: true }
		);
		res.json(module);
	} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error')
		}
	}
);

// @route     DELETE api/module
// @desc      Delete profile, user and posts
// @access    Private
router.delete('/:id', auth, async (req, res) =>{
	try {
		// Remove module by ID
		await Module.findOneAndRemove({ _id: req.params.id });
		let module = await Module.find()
		res.json(module);
	} catch (err) {
			console.error(err.message);
			res.status('500').send('Server Error');
	}
});

module.exports = router;