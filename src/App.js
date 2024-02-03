import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import store from './redux/store';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Homepage from './components/pages/Homepage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTables } from './redux/tablesRedux';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/table/:id' element={<TablePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
