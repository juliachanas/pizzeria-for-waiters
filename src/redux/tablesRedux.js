//selectors

export const getAllTables = ({ tables }) => tables;
export const getTablebyId = ({ tables }, id) =>
  tables.find((table) => table.id === id);

//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators

export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const fetchUpdateTable = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(table),
    };

    fetch(`http://localhost:3131/tables/${table.id}`, options).then(() =>
      dispatch(updateTable(table))
    );
  };
};

export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );

    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
