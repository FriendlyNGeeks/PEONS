import React, { useState, useEffect } from 'react'

function Marquee() {
  
  const [color, setColor] = useState(null)
      
  return (
    <>
    {/* <!-- scrollamount = 5 slow, 13 medium, 20 fast --> */}
  <div id="output">
      <marquee id="text" scrollamount="13" style={{fontSize: 250}}>
          Raspberry Pi Running Text {process.env.REACT_APP_SERVER_IP}
      </marquee>
  </div>
    </>
  );
}
export default Marquee
