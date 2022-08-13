import React, { useState } from 'react';
import { database } from './DonnerTable';

const Moyene = () => {




    return (
        <>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div>Taux de réussite</div>
                        <div>67,52</div>
                    </li>
                    <li className="list-group-item">
                        <div>Valeur médiane:</div>
                        <div>11,53</div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Moyene;