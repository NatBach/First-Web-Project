import React from 'react';
import './Dashboard.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Dashboard = () => {

  return (
    <div className='blackBack'>
      <div className='dashboard'>
        <div className="dark-background">
          <div class="grid-container">

            {/* GRID */}
            <div class="grid-item-1">
              <img class='picture' src={require('../../images/lpwa.jpg')} />
              <span class='caption'>
                <div class='title'>Low Power Wide Area (LPWA)</div>

                <div>Enabling battery and solar-powered IoT applications with extended coverage and capacity.</div>
              </span>
            </div>

            <div class="grid-item-2">
              {/* <img class='picture' src={require('../../images/firstResponder.png')}></img> */}
              <img className="picture" src="https://www.psdgraphics.com/file/silver-metal-shield.jpg" />
              <span class='caption'>
                <div class='title'>First Responder Network</div>

                Enabling first responders with tools and networking so they can act faster and more effectively.</span>
            </div>

            <div class="grid-item-3">
              <img class='picture' src={require('../../images/5g.png')} alt=""></img>
              <span class='caption'>
                <div class='title'>Ready for 5G?</div>

                Trust Sierra Wireless to lead you into the next wave of cellular technology with 5G.</span>
            </div>

            <div class="grid-item-4">
              {/* <img class='picture' src={require('../../images/smart-sim.png')}></img> */}
              <img className="picture" src="https://www.sierrawireless.com/-/media/C361C8160C38427C961392B8445C12E4.ashx"></img>
              <span class='caption'>
                <div class='title'>Sierra Wireless Smart SIM</div>

                Deliver a superior connectivity service for your IoT application.</span>
            </div>

            <div class="grid-item-5">
              {/* <img class='picture' src={require('../../images/open-source.png')}></img> */}
              <img className='openSource' src="http://fossbytes.com/wp-content/uploads/2016/07/open-source-software.jpg"></img>
              <span class='caption'>
                <div class='title'>Open Source</div>

                Don't start from scratch - transform with Sierra.</span>
            </div>

            <div class="grid-item-6">
              <img class='picture' src={require('../../images/security2.jpg')}></img>
              <span class='caption'>
                <div class='title'>Octave™</div>

                Securely extract, orchestrate and act on data from your assets at the edge to the cloud.</span>
            </div>
          </div>

          {/* NOTE */}
          <div id="note">
            <img className="arrows" src="https://cdn3.iconfinder.com/data/icons/musthave/256/Stock%20Index%20Down.png" />
            <div id="donotmiss">DO NOT MISS OUT!!!</div>
            <img className="arrows" src="https://cdn3.iconfinder.com/data/icons/musthave/256/Stock%20Index%20Down.png" />
          </div>
        </div>
      </div>

      {/* WHO ARE WE */}
      <div id="we">
        <div className="usWho">WHO ARE WE?</div>
        <img className="tmaPhoto" src={require('../../images/TMApic.png')} />
        <div>
          <img className="tmaSoccer" src={require('../../images/tma_soccer.png')} />
        </div>
        <div>
          <img className="workPlace" src={require("../../images/Office/IMG_3064.JPG")} />
        </div>
      </div>

      {/* WORKPLACE */}
      <div>
        <div id="workplace">
          <div className="where">WHERE ALL THE PRODUCTIVITIES TAKE PLACE
            <div>
              {/* <img id="tmaBuilding" src={require("../../images/tma-map.png")} /> */}

              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=tma%20solutions%20lab%206&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

                {/* <style>
                  .mapouter{position:relative;text-align:right;height:500px;width:600px;}
                  .gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
                </style> */}
              </div>
            </div>
          </div>

        </div>

        {/* LOCATION */}
        <div className="hotline">
          <div>FAR FROM US?</div>
          HOTLINE: (084) 6 - 1111 111.
        </div>
      </div>
    </div>

  );
}

export default Dashboard;


// render() {
//   return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176}}
//       />
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: 'TOKEN HERE'
// })(MapContainer);


// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
//               {latitude: 47.359423, longitude: -122.021071},
//               {latitude: 47.2052192687988, longitude: -121.988426208496},
//               {latitude: 47.6307081, longitude: -122.1434325},
//               {latitude: 47.3084488, longitude: -122.2140121},
//               {latitude: 47.5524695, longitude: -122.0425407}]
//     }
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return <Marker key={index} id={index} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
//      onClick={() => console.log("You clicked me!")} />
//     })
//   }

//   render() {
//     return (
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         >
//           {this.displayMarkers()}
//         </Map>
//     );
//   }
// }