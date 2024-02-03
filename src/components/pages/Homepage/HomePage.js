import SingleTableRow from '../../common/SingleTableRow/SingleTableRow';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const tables = useSelector(getAllTables);

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>All tables</h1>
      {tables.map((table, id) => (
        <SingleTableRow key={id} table={table} />
      ))}
    </div>
  );
};

export default Homepage;
