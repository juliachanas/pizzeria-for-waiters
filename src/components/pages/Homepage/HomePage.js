import SingleTableRow from '../../common/SingleTableRow/SingleTableRow';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';

const Homepage = () => {
  const tables = useSelector(getAllTables);

  const { error, loading } = useSelector(({ tables }) => tables.requestStatus);

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>All tables</h1>
      {loading && !error && <Spinner />}
      {tables.length === 0 && !loading && !error && <p>No tables to display</p>}
      {tables.map((table, id) => (
        <SingleTableRow key={id} table={table} />
      ))}
      {error && !loading && <Alert variant='danger'>ERROR!</Alert>}
    </div>
  );
};

export default Homepage;
