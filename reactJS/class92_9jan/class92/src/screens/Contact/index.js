import React from "react";

const Contact = () => {
    return (
        <form className="px-2">
            <div className="form-group">
                <label>Nombre y apellido</label>
                <input type="text" className="form-control" />
                <label>Email</label>
                <input type="email" className="form-control" />
                <label>Tema</label>
                <input type="text" className="form-control" />
                <label>Mensaje</label>
                <textarea className="form-control" />
                <button className="mt-2">Enviar</button>
            </div>
        </form>
    )
};

export { Contact };