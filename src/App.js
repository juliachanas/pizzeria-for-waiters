import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import store from './redux/store';
import Homepage from './components/pages/Homepage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/table/:id' element={<TablePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
