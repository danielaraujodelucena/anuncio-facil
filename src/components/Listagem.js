import { connect, useDispatch } from "react-redux";
import AnuncioActions from "../actions/AnuncioActions";

const Listagem = ({ anuncios, exibirDetalhes }) => {
    //const anuncios = useSelector(state => state.ListagemReducer.anuncios);
    const dispatch = useDispatch();

    return(
        <aside>
            {anuncios.map((anuncio) => (
                <div key={anuncio.id}>
                    <span>{anuncio.name}</span>
                    <button onClick={() => exibirDetalhes(anuncio.name, anuncio.category)}>Detalhes</button>
                    <button onClick={() => dispatch(AnuncioActions.remover(anuncio))}>Remover</button>
                </div>
            ))}
        </aside>
    );
}

const mapStateToProps = (store) => ({
    anuncios: store.AnuncioReducers.anuncios,
});

const mapDispatchToProps = (dispatch) => ({
   exibirDetalhes: (name, category) => dispatch(AnuncioActions.visualizar(name, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listagem);