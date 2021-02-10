import React, { useState } from 'react';

export const Conversor = () => {

    const [temp, updateTemp] = useState({ f: 0, c: 0 })

    const updateC = ev => updateTemp({
        c: ev.target.value,
        f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
    })

    const updateF = ev => updateTemp({
        c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
        f: ev.target.value
    })


    return (
        <div>
            <form>
                <div className="form-group">
                    <h4>Conversor</h4>
                    <input type="number" placeholder="Celsius" name="celsius" value={temp.c} onChange={updateC} />
                    <p>=</p>
                    <input type="number" placeholder="Fahrenheit " name="fahrenheit" value={temp.f} onChange={updateF} />
                </div>
            </form>
        </div>
    );
}


