import React, { useState, useEffect } from 'react'
import DurationPicker from './DurationPicker'


function Modal() {
  
   const [colortxt, setColortxt] = useState("#FFFFFF")
   const [colorbg, setColorbg] = useState("#000000")
   const [hours, setHR] = useState("0")

  return (
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
                <i className="iconify" data-icon="logos-raspberry-pi" data-inline="true"></i>
                Settings
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
                
                <div className="row">
                    {/* <!-- display text --> */}
                    <div className="col-sm-9">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                            <input id="message" className="form-control form-control-lg" 
                            type="text" placeholder="Write text here..." onfocusout="typingStop()"/>    
                        </div>
                    </div>
                    {/* <!-- text color --> */}
                    <div className="col-sm-3">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-paint-brush"></i>
                                </div>
                            </div>
                            <input id="txtcolor" type="color" className="form-control form-control-lg" value={colortxt} onChange={e => setColortxt(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* <!-- font type selection --> */}
                    <div className="col-sm-5">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-font"></i>
                                </div>
                            </div>
                            <select id="font" className="form-control form-control-lg">
                                <option value="Anonymous Pro">Anonymous Pro</option>
                                <option value="Bangers">Bangers</option>
                                <option value="Black Ops One">Black Ops One</option>
                                <option value="Caesar Dressing">Caesar Dressing</option>
                                <option value="Faster One">Faster One</option>
                                <option value="Fredoka One">Fredoka One</option>
                                <option value="Lobster">Lobster</option>
                                <option value="Pacifico">Pacifico</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- speed settings --> */}
                    <div className="col-sm-4">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-tachometer-alt"></i>
                                </div>
                            </div>
                            <select id="speed" className="form-control form-control-lg">
                                <option value="100">Medium</option>
                                <option value="50">Slow</option>
                                <option value="200">Fast</option>
                            </select>    
                        </div>
                    </div>
                    {/* <!-- background color settings --> */}
                    <div className="col-sm-3">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-paint-roller"></i>
                                </div>
                            </div>
                            <input id="bgcolor" type="color" className="form-control form-control-lg" value={colorbg} onChange={e => setColorbg(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- duration settings --> */}
                    <DurationPicker />        
                </div>
                <div id="feedback"></div>

            </div>
            <div className="modal-footer">
                <button id="send" type="button" className="btn btn-success">
                    <i className="fas fa-check-circle"></i>&nbsp;
                    Apply
                </button>
            </div>
            </div>
        </div>
    </div>
  );
}
export default Modal