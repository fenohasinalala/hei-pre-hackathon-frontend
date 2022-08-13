import React from 'react';
import { listSession } from './DonnerTable';

const SessionListe = () => {
    
    return (
        <div className="check-div">
            <div className="card-header">
                &nbsp; Session : 
            </div>

            {
                listSession.map((data,key)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id={"exampleRadios"+(key+2)} value="option2"/>
                        <label className="form-check-label" htmlFor={"exampleRadios"+(key+2)}>
                            {data.session}
                        </label>
                    </div>
                ))
            }
        </div>
    );
};

export default SessionListe;