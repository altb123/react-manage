import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import RouterView from './router/index.js';

function App() {

  return (
    <Provider store={ store }>
        <RouterView />
    </Provider>
  );
}

export default App;
