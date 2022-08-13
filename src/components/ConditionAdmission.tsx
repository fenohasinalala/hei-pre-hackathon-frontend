import React from 'react';
import { listSession } from './DonnerTable';

const ConditionAdmission = (sessionAcuell:number) => {
    return (
        <>
            <div className="card">
            <div className="card-header">
                Condition d'admission
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <p>Min Admission:</p><p>{listSession[sessionAcuell].min_admission}</p>
                </li>
                <li className="list-group-item">
                    <p>Min Liste attente:</p><p>{listSession[sessionAcuell].min_liste_attente}</p>
                </li>
                <li className="list-group-item">
                    <p>Min Math:</p><p>{listSession[sessionAcuell].min_math}</p>
                </li>
            </ul>
            </div>
        </>
    );
};

export default ConditionAdmission;