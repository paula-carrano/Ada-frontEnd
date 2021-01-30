import React from 'react';

export const Modal = ({ show, setShow }) => {

    const toggle = () => {
        setShow(!show)
    }

    return (<>
        {show &&
            <div className="container-fluid border border-secondary bg-light">
                <div>
                    <h2>Use State</h2>
                </div>

                <div>
                    <p>¡Hola mundo, desde un modal!</p>
                </div>

                <div>
                    <button className="btn btn-secondary btn-sm mx-2" onClick={toggle}>Close</button>
                    <button className="btn btn-primary btn-sm" onClick={toggle}>Save changes</button>
                </div>
            </div>
        }
    </>
    );
}
