import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Homepage from './components/pages/Homepage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/table/:id' element={<TablePage />} />
          <Route path='*' element={<NotFound />} />
          {/* <h1>Hello world</h1> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
