import { actionsTypes } from "../constants/anuncio";

const AnuncioActions = {
    adicionar: anuncio => ({
        type: actionsTypes.ADICIONAR_ANUNCIO,
        anuncio,
    }),
    remover: anuncio => ({
        type: actionsTypes.REMOVER_ANUNCIO,
        anuncio,
    }), 
    visualizar: (name, category) => ({
        type: actionsTypes.ANUNCIO_SELECIONADO,
        name,
        category,
    }),
};

export default AnuncioActions;