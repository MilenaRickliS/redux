import React from "react";
import { Connect } from "react-redux";

const contador = (props) => {
    return(
        <div>
            <h1>Contador Redux</h1>
            <p>Contagem: {props.count}</p>

            <button onClick={props.incremento}>Incrementar</button>
            <button onClick={props.decremento}>Decrementar</button>
        </div>
    );
}

const mapearEstadoParaProps = (state) => {
    return{
        count: state.count
    };
}