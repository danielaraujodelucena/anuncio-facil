import { connect } from "react-redux";

const Editar = ({anuncio = null}) => {
    if(anuncio != null){
        return(
            <section>
                <h1>Edite seu anúncio</h1>
                <form>
                    <input type="text" value={anuncio != null ? anuncio.name : ""} placeholder="Título" />
                    <input type="text" value={anuncio != null ? anuncio.category : ""} placeholder="Categoria"  />
                    <input type="text" value={anuncio != null ? anuncio.price : ""} placeholder="Preço"  />
    
                    <button type="submit">Salvar</button>
                </form>
            </section>
        );
    }
    
}

const mapStateToProps = (store) => ({
    anuncio: store.AnuncioReducers.anunc,
});

export default connect(mapStateToProps)(Editar);