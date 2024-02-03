import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  <Provider store={store}>
    return <h1>Hello world</h1>;
  </Provider>;
};

export default App;
