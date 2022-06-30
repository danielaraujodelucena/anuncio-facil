import { useState } from "react";
import { connect } from "react-redux";
import AnuncioActions from "../actions/AnuncioActions";

const Cadastro = ({cadastrar}) => {
    const[name, setName] = useState('');
    const[category, setCategory] = useState('');
    const[price, setPrice] = useState('');

    const cadastrarAnuncio = event => {
        event.preventDefault();

        const anuncio = {
            id: new Date(),
            name,
            category,
            price,
        };

        cadastrar(anuncio);
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

const mapDispatchToProps = (dispatch) => ({
    cadastrar: (anuncio) => dispatch(AnuncioActions.adicionar(anuncio)),
 });

export default connect(null, mapDispatchToProps)(Cadastro);