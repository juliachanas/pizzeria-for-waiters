import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import store from './redux/store';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Homepage from './components/pages/Homepage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';

const App = () => {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables); // Pobieramy stan tabel z Redux Store

  useEffect(() => {
    // Wysyłamy żądanie pobrania tabel po zamontowaniu komponentu App
    dispatch(fetchTables());
  }, [dispatch]);

  // Sprawdzamy, czy dane zostały już pobrane
  const isDataLoaded = tables.length > 0;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header />
          {isDataLoaded ? ( // Renderujemy zawartość tylko gdy dane są załadowane
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/table/:id' element={<TablePage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          ) : (
            <p>Loading...</p> // Komunikat ładowania, można dostosować do potrzeb
          )}
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
