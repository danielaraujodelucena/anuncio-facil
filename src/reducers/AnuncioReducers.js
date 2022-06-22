import { actionsTypes } from "../constants/anuncio";
import { anuncios } from "../data";

const selectedNameDefault = "";
const selectedCategoryDefault = "";

const INITIAL_STATE = {
    anuncios: [...anuncios],
    selectedName: selectedNameDefault,
    selectedCategory: selectedCategoryDefault,
}

const AnuncioReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_ANUNCIO: 
            return{ 
                anuncios: [...state.anuncios, { ...action.anuncio }],
            };
        case actionsTypes.REMOVER_ANUNCIO:
            return{
                anuncios: state.anuncios.filter(a => a.id !== action.anuncio.id)
            };
        case actionsTypes.ANUNCIO_SELECIONADO:
            return{
                ...state,
                selectedName: action.name,
                selectedCategory: action.category,
            };
        default:
            return state;
    }
}

export default AnuncioReducers;