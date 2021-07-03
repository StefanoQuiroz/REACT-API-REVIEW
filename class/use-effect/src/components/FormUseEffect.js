import React, { useEffect, useState } from 'react';

const FormUseEffect = () => {
    const [state, setState] = useState("");
    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {
        alert("when will this run");
    }, [isSubmited])

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        console.log(state);
    }
    return (
        <form onSubmit={onSubmit}>
            {(isSubmited) ? <h1>Se envio el formulario</h1> : <h1>No se envio</h1>}
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={state} onChange={e => setState(e.target.value)}/>
            </div>
            <input type="submit" value="send"/>    
        </form>
    );
}

export default FormUseEffect;
