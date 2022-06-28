import { connect } from "react-redux";

const Visualizacao = ({ selectedName = null, selectedCategory = null }) => {
    if(selectedName != null && selectedCategory != null){
        return (
            <section>
                <h1>Visualizar detalhes</h1>
                <h1>{selectedName}</h1>
                <h2>{selectedCategory}</h2>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedName: state.AnuncioReducers.selectedName,
    selectedCategory: state.AnuncioReducers.selectedCategory,
});

export default connect(mapStateToProps)(Visualizacao);