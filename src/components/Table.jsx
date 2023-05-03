import React from "react";
import { useState } from "react";




export default function Table({table_data,name}) {
  
  return (
    <>
    <h1>hi {name}</h1>
      <h1>Hello {table_data[0].fname}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
            {table_data.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td >{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  );
}
