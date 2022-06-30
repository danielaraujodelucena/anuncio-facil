import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import AnuncioActions from "../actions/AnuncioActions";

const Editar = ({anuncio = null, atualiza}) => {

    const nameDefault = (anuncio !== null ? anuncio.name : '');
    const categoryDefault = (anuncio !== null ? anuncio.category : '');
    const priceDefault = (anuncio !== null ? anuncio.price : '');

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    //const dispatch = useDispatch();

    const atualizarAnuncio = event => {
        event.preventDefault();

        const anuncioUpdate = {
            id: anuncio !== null ? anuncio.id : '',
            name,
            category,
            price,
        };

        atualiza(anuncioUpdate);
        //dispatch(AnuncioActions.atualizar(anuncioUpdate));
    };

    if(anuncio != null){
        return(
            <section>
                <h1>Edite seu anúncio</h1>
                <form onSubmit={atualizarAnuncio} name="edit-ad">
                    <label>{nameDefault}</label>
                    <input 
                        type="text" 
                        name={name} 
                        placeholder="Informe o novo nome"
                        onChange={event => setName(event.target.value)} 
                        required
                    />
                    
                    <label>{categoryDefault}</label>
                    <input 
                        type="text" 
                        name={category} 
                        placeholder="Informe a nova categoria"
                        onChange={event => setCategory(event.target.value)}  
                    />

                    <label>{priceDefault}</label>
                    <input 
                        type="text" 
                        name={price} 
                        placeholder="Informe o novo preço" 
                        onChange={event => setPrice(event.target.value)} 
                    />
    
                    <button type="submit">Salvar</button>
                </form>
            </section>
        );
    }
    
}

const mapStateToProps = (state) => ({
    anuncio: state.AnuncioReducers.anunc,
});

const mapDispatchToProps = dispatch => ({
    atualiza: (anuncio) => dispatch(AnuncioActions.atualizar(anuncio)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Editar);