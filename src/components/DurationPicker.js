import React, { useState, useCallback, useEffect, useRef } from 'react'

function DurationPicker() {
  const [hours, setHours] = useState(0)
  const [mins, setMM] = useState(0)
  const [secs, setSS] = useState(60)
  const duration = ((hours * 60 * 60) + (mins * 60) + secs) * 1000
  const [shouldIncrease, setShouldIncrease] = useState(false)
  const [shouldDecrease, setShouldDecrease] = useState(false)
  /* 
    If you need timeout reference, you can check this stackoverflow page
    https://stackoverflow.com/questions/56267322/react-hooks-settimeout-after-setstate/56270973
  */

  const timeoutRef = useRef(null)

  useEffect(() => {

    function increaseCount() {
      if (hours < 24 && shouldIncrease) setHours(prevHours => prevHours + 1)
    }

    function decreaseCount() {
      if (hours > 0 && shouldDecrease) setHours(prevHours => prevHours - 1)
    }

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      console.log('Trying')
      shouldIncrease && increaseCount()
      shouldDecrease && decreaseCount()
    }, 500)
  }, [hours, shouldIncrease, shouldDecrease])

  /*
    Fire Use effect only if argument has changed
    https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  */

  const mouseUp = () => {
    // clearInterval(timer.current);
  }

  function onMouseDown(e) {
    const buttonValue = e.target.value

    if (buttonValue === 'hourIncrease') {
      setShouldIncrease(true)
      if (hours < 24 && shouldIncrease) setHours(hours + 1)
    }
    if (buttonValue === 'hourDecrease') {
      setShouldDecrease(true)
      if (hours < 24 && shouldDecrease) setHours(hours - 1)
    }
  }

  function onMouseUp() {
    setShouldIncrease(false)
    setShouldDecrease(false)
    clearTimeout(timeoutRef.current);
  }
  //
  const HHincrease = () => {
    if (hours + 1 <= 24) {
      setHours(hours => hours + 1)
    }
  }
  const HHdecrease = () => {
    if (hours - 1 >= 0) {
      setHours(hours => hours - 1)
    }
  }
  const MMincrease = () => {
    if (mins + 1 <= 60) {
      setMM(mins => mins + 1)
    }
  }
  const MMdecrease = () => {
    if (mins - 1 >= 0) {
      setMM(mins => mins - 1)
    }
  }
  const SSincrease = () => {
    if (secs + 1 <= 60) {
      setSS(secs => secs + 1)
    }
  }
  const SSdecrease = () => {
    if (secs - 1 >= 0) {
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
            <button type="button" className="btn btn-light" onClick={HHdecrease} onMouseUp={onMouseUp} onMouseDown={onMouseDown} value="hourDecrease">-</button>
          </span>
          <input id="durationHR" type="text" className="form-control text-center" value={hours} />
          <span class="input-group-btn">
            <button type="button" className="btn btn-light" onClick={HHincrease} onMouseUp={onMouseUp} onMouseDown={onMouseDown} value="hourIncrease">+</button>
          </span>
          <div className="input-group-text m-auto text-center" style={fixwidthstyle}>
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
          <div className="input-group-text m-auto text-center" style={fixwidthstyle}>
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
          <div className="input-group-text m-auto text-center" style={fixwidthstyle}>
            secs
          </div>
        </div>
      </div>
    </>
  );
}
export default DurationPicker
