import React from 'react';
import "./index.css"

const Button = ({ text, icon, variant, className }) => {
    return (
        <button className={`btn btn-${variant} ${className}`}>{text} {icon} </button>
    )
}
export { Button }
