import React, { useState, useEffect, useRef } from 'react'

function DurationPicker() {
  const [hours, setHH] = useState(0)
  const [mins, setMM] = useState(0)
  const [secs, setSS] = useState(60)
  const duration = ((hours * 60 * 60) + (mins * 60) + secs) * 1000
  //

  const mouseDown = (stepfun) => (event) => {
    // timer.current = setInterval(() => stepfun(), 500);
  }
  const mouseUp = () => {
    // clearInterval(timer.current);
  }
  //
  const HHincrease = () => {
    if (hours + 1 <= 24){
      setHH(hours => hours + 1)
    }
  }
  const HHdecrease = () => {
    if (hours - 1 >= 0){
      setHH(hours => hours - 1)
    }
  }
  const MMincrease = () => {
    if (mins + 1 <= 60){
      setMM(mins => mins + 1)
    }
  }
  const MMdecrease = () => {
    if (mins - 1 >= 0){
      setMM(mins => mins - 1)
    }
  }
  const SSincrease = () => {
    if (secs + 1 <= 60){
      setSS(secs => secs + 1)
    }
  }
  const SSdecrease = () => {
    if (secs - 1 >= 0){
      setSS(secs => secs - 1)
    }
  }
  const fixwidthstyle = {
    width: "66.33px",
    flex: "none"
  }

      
  return (
    <>
    <div className="col-sm-4 col-sm-offset-4">
      <div className="input-group mb-1 number-spinner">
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseLeave={mouseUp} onMouseUp={mouseUp} onMouseDown={mouseDown(HHdecrease)}>-</button>
          </span>
          <input id="durationHR" type="text" className="form-control text-center" value={hours} onChange={e => setHH(e.target.value)} />
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseLeave={mouseUp} onMouseUp={mouseUp} onMouseDown={mouseDown(HHincrease)}>+</button>
          </span>
          <div className="input-group-text m-auto text-center" style={ fixwidthstyle }>
            hours
          </div>
      </div>
    </div>
    <div className="col-sm-4 col-sm-offset-4">
      <div className="input-group mb-2 number-spinner">
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseDown={MMdecrease}>-</button>
          </span>
          <input id="durationMIN" type="text" className="form-control text-center" value={mins} onChange={e => setMM(e.target.value)} />
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseDown={MMincrease}>+</button>
          </span>
          <div className="input-group-text m-auto text-center" style={ fixwidthstyle }>
            mins{duration}
          </div>
      </div>
    </div>
    <div className="col-sm-4 col-sm-offset-4">
      <div className="input-group mb-3 number-spinner">
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseDown={SSdecrease}>-</button>
          </span>
          <input id="durationSEC" type="text" className="form-control text-center" max="60" value={secs} onChange={e => setSS(e.target.value)} />
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onMouseDown={SSincrease}>+</button>
          </span>
          <div className="input-group-text m-auto text-center" style={ fixwidthstyle }>
            secs
          </div>
      </div>
    </div>
    </>
  );
}
export default DurationPicker
