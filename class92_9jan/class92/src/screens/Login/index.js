import React from 'react';

const Login = () => {
    return (
        <form className="px-2 mb-3">
            <h1>Bienvenido!</h1>
            <div className="form-group d-flex justify-content-around">
                <label>Ingresa tu usuario</label>
                <input />
                <label>Ingresa tu contraseña</label>
                <input />
                <button>Ingresar</button>
            </div>
        </form>
    )
}
export { Login }