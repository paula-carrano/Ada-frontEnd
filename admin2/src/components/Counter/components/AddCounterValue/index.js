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
            <button onClick={sumar} type="button">+</button>
            <input type="number" value={value} />
            <button onClick={restar} type="button">-</button>
        </form>
    )
}

export { AddCounterValue }