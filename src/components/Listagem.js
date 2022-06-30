import { connect } from "react-redux";
import AnuncioActions from "../actions/AnuncioActions";

const Listagem = ({ anuncios, exibirDetalhes, editarAnuncio, removerAnuncio }) => {

    return(
        <aside>
            {anuncios.map((anuncio) => (
                <div key={anuncio.id}>
                    <span>{anuncio.name}</span>
                    <button onClick={() => exibirDetalhes(anuncio.name, anuncio.category)}>Detalhes</button>
                    <button onClick={() => removerAnuncio(anuncio)}>Remover</button>
                    <button onClick={() => editarAnuncio(anuncio)}>Editar</button>
                </div>
            ))}
        </aside>
    );
}

const mapStateToProps = (state) => ({
    anuncios: state.AnuncioReducers.anuncios,
});

const mapDispatchToProps = (dispatch) => ({
   exibirDetalhes: (name, category) => dispatch(AnuncioActions.visualizar(name, category)),
   editarAnuncio: (anuncio) => dispatch(AnuncioActions.editar(anuncio)),
   removerAnuncio: (anuncio) => dispatch(AnuncioActions.remover(anuncio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listagem);