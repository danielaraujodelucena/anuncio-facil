import { Provider } from 'react-redux';
import store from './store';

import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';
import Visualizacao from './components/Visualizacao';
import Editar from './components/Editar';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Cadastro />
        <Listagem />
        <Visualizacao />
        <Editar />
      </Provider>
    </div>
  );
}

export default App;
