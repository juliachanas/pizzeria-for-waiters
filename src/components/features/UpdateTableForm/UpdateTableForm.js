import { useParams } from 'react-router';
import { getTablebyId } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import TableForm from '../../common/TableForm/TableForm';
import { Navigate } from 'react-router-dom';

const UpdateTableForm = () => {
  const { id } = useParams();
  const tableData = useSelector((state) => getTablebyId(state, id));
  console.log('tabledata', tableData);

  if (!tableData) return <Navigate to='/' />;
  return (
    <div>
      <h1>Table {tableData.id}</h1>
      <TableForm
        key={tableData.id}
        status={tableData.status}
        peopleAmount={tableData.peopleAmount}
        maxPeopleAmount={tableData.maxPeopleAmount}
        bill={tableData.bill}
      />
    </div>
  );
};

export default UpdateTableForm;
