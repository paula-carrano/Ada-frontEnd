import React, { useState } from 'react';

const AddCounterValue = () => {

    const [value, setValue] = useState(0)

    const sumar = () => {
        setValue(value + 1)
    }

    const restar = () => {
        setValue(value - 1)
    }

    return (
        <form>
            <h4>Counter</h4>
            <button onClick={sumar} type="button">+</button>
            <input className="mx-2" type="number" value={value < 0 ? 0 : value} />
            <button onClick={restar} type="button">-</button>
        </form>
    )
}

export { AddCounterValue }