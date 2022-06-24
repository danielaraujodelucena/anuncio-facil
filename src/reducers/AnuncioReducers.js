import { actionsTypes } from "../constants/anuncio";
import { anuncios } from "../data";

const INITIAL_STATE = {
    anuncios: [...anuncios],
    selectedName: null,
    selectedCategory: null,
    anunc: null,
}

const AnuncioReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_ANUNCIO: 
            return{ 
                anuncios: [...state.anuncios, { ...action.anuncio }],
            };
        case actionsTypes.REMOVER_ANUNCIO:
            return{
                anuncios: state.anuncios.filter(a => a.id !== action.anuncio.id),
            };
        case actionsTypes.ANUNCIO_SELECIONADO:
            return{
                ...state,
                selectedName: action.name,
                selectedCategory: action.category,
            };
        case actionsTypes.EDITAR_ANUNCIO:
            return {
                ...state, 
                anunc: action.anuncio,
            };
        case actionsTypes.ATUALIZAR_ANUNCIO:
            console.log("reducer atualizar anúncio", action.anuncio);
            return {
                anuncios: state.anuncios.map(a => a.id !== action.anuncio.id ? a : action.anuncio),
            };
        default:
            return state;
    }
}

export default AnuncioReducers;