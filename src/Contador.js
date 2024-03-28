import React from "react";
import { connect } from "react-redux";

const Contador = (props) => {
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
        count: state.count,
    };
}

const mapearAcoesParaProps = (dispatch) => {
    return{
        incremento: () => dispatch({type: 'INCREMENTO'}),
        decremento: () => dispatch({type: 'DECREMENTO'}),
    };
}

export default connect(mapearEstadoParaProps,mapearAcoesParaProps)(Contador)