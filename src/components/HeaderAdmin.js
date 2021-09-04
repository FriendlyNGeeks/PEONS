import React from 'react'

function HeaderAdmin() {
  
  return (
    <>
    <h1 className="mt-4">
        <i className="iconify" data-icon="logos-raspberry-pi" data-inline="true"></i>
        Notify | Admin Dashboard
    </h1>
    <b>Raspberry Pi + Express.js + Socket.io</b>

    {/* <!-- Button trigger modal --> */}
    <br></br>
    <button type="button" className="mt-3 btn-sm btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
        <i className="fas fa-cog"></i>&nbsp;
        Settings
    </button>
    <button type="button" id="resetAll" className="mt-3 btn-sm btn btn-success">
      RESET ALL
    </button>
    </>
  );
}
export default HeaderAdmin