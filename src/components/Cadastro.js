import { useState } from "react";
import { useDispatch } from "react-redux";
import AnuncioActions from "../actions/AnuncioActions";

const Cadastro = () => {
    const[name, setName] = useState('');
    const[category, setCategory] = useState('');
    const[price, setPrice] = useState('');

    const dispatch = useDispatch();

    const cadastrarAnuncio = event => {
        event.preventDefault();

        const anuncio = {
            id: new Date(),
            name,
            category,
            price,
        };
        dispatch(AnuncioActions.adicionar(anuncio));
    };

    return(
        <section>
            <h1>Cadastre seu anúncio</h1>
            <form onSubmit={cadastrarAnuncio}>
                <input type="text" name={name} placeholder="Título" required onChange={event => setName(event.target.value)} />
                <input type="text" name={category} placeholder="Categoria" required onChange={event => setCategory(event.target.value)} />
                <input type="text" name={price} placeholder="Preço" required onChange={event => setPrice(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}

export default Cadastro;