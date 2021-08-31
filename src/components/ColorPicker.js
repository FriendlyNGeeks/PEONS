import React, { useState, useEffect } from 'react'

function ColorPicker() {
  
  const [color, setColor] = useState(null)
      
  return (
    <input id="txtcolor" type="color" className="form-control form-control-lg" value={color} onChange={e => setColor(e.target.value)} />
  );
}
export default ColorPicker