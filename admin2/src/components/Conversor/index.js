import React, { useState } from 'react';

export const Conversor = () => {

    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('');

    const changeDegreesCelsius = (e) => {
        if (e.target.name === "celsius") {
            setCelsius((e.target.value))
            console.log(celsius)
        }
    }

    const changeDegreesFahrenheit = (e) => {
        if (e.target.name === "fahrenheit") {
            setFahrenheit((e.target.value))
            setCelsius((5 / 9) * (fahrenheit - 32))
            console.log(e.target.value)
        }
    }

    const changeDegree = (e) => {
        e.preventDefault()
        setFahrenheit((1.8 * celsius) + 32)
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <h4>Conversor</h4>
                    <input type="number" placeholder="Celsius" name="celsius" value={celsius} onChange={changeDegreesCelsius} />
                    <button className="btn-primary mx-2" onClick={changeDegree}> Convertir </button>
                    <input type="number" placeholder="Fahrenheit " name="fahrenheit" value={fahrenheit} />
                </div>
            </form>
        </div>
    );
}


