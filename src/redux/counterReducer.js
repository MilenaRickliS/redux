const estadoInicial = {
    count: 0
};

const counterReducer = (state = estadoInicial, action) =>{
    switch(action.type){
        case 'INCREMENTO':
            return{
                count: state.count++,
            };
        case 'DECREMENTO':
            return{
                count: state.count--,
            };
        default:
            return state;
    }
}

export default counterReducer;
