import React, { useState, useEffect } from 'react'
import ReactFastMarquee from 'react-fast-marquee'

const componentName = {reactComponentName:'marquee'}
const componentData = componentName
const socket = io(window.location.host + ":" + process.env.REACT_APP_SERVER_PORT, {query: componentData})

function Marquee() {
  
  const [msg, setMsg] = useState(['PEONS Notification Text'])
  const [txtFont, setTxtFont] = useState(['Anonymous Pro'])
  const [txtColor, setTxtColor] = useState([0,0,0])
  const [gradColor, setGradColor] = useState([255,255,255])
  const [bgColor, setBgColor] = useState([null])
  const [speed, setSpeed] = useState([100])
  const gradientFill = useState(['0'])
  const gradientBool = useState(['false'])
  
  useEffect(() => {
    socket.on("chat", (payload) => {
      setMsg(payload.message)
      setTxtFont(payload.font)
      setTxtColor(payload.txtcolor)
      setBgColor(payload.bgcolor)
      setGradColor(payload.bgcolor)
      setSpeed(payload.speed)
    })
  })
      
  return (
    <>
    <ReactFastMarquee speed={speed} gradient={gradientBool[0]} gradientColor={gradColor} gradientWidth={gradientFill[0]}>
      {bgColor ? 
        <div style={{width:'100%', backgroundColor: 'rgb('+bgColor[0]+','+bgColor[1]+','+bgColor[2]+')'}}>
          <div id="text" style={{padding:'0 200px', fontSize: 250, fontFamily: txtFont, color: 'rgb('+txtColor[0]+','+txtColor[1]+','+txtColor[2]+')'}}>
          {msg}
          </div>
        </div> :
        <div style={{width:'100%', backgroundColor: 'none'}}>
          <div id="text" style={{padding:'0 200px', fontSize: 250, fontFamily: txtFont, color: 'rgb('+txtColor[0]+','+txtColor[1]+','+txtColor[2]+')'}}>
          {msg}
          </div>
        </div>}
    </ReactFastMarquee>
    </>
  );
}
export default Marquee
