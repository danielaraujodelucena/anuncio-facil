import { Provider } from 'react-redux';
import store from './store';

import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';
import Visualizacao from './components/Visualizacao';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Cadastro />
        <Listagem />
        <Visualizacao />
      </Provider>
    </div>
  );
}

export default App;
