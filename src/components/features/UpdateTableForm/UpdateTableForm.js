import { useParams } from 'react-router';
import { getTablebyId, getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import TableForm from '../../common/TableForm/TableForm';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const UpdateTableForm = () => {
  const { id } = useParams();
  const tableData = useSelector((state) => getTablebyId(state, id));
  const allTables = useSelector(getAllTables);

  if (!tableData && allTables.length) return <Navigate to='/' />;
  if (!allTables.length) return <Spinner />;
  return (
    <div>
      <h1>Table {tableData.id}</h1>
      <TableForm key={tableData.id} {...tableData} />
    </div>
  );
};

export default UpdateTableForm;
