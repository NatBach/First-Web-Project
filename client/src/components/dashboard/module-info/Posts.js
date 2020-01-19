import React from "react";
import { Table } from "reactstrap";

import "./Posts.css";

const Posts = ({ profiles }) => {
  let table = profiles.map((post, index) => {
    const { imei, macaddress, name } = post;
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{name}</td>
        <td>{imei}</td>
        <td>{macaddress}</td>
      </tr>
    );
  });

  return (
    <div>
      {/* <h1 id='title'>React Dynamic Table</h1> */}
      <Table bordered>
        <thead>
          <tr>
            <th scope="row">#</th>
            <th scope="row">Name</th>
            <th scope="row">IMEI</th>
            <th scope="row">MAC Address</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </Table>
    </div>
  );
};

export default Posts;
