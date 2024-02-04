import { API_URL } from '../config.js';

//state

export const initialTableState = {
  data: [],
  requestStatus: {
    failure: false,
    loading: false,
  },
};

//selectors

export const getAllTables = ({ tables }) => tables.data;
export const getTablebyId = ({ tables }, id) =>
  tables.data.find((table) => table.id === id);

//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const FETCH_FAILURE = createActionName('FETCH_FAILURE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators

export const fetchStart = (payload) => ({ type: FETCH_START, payload });
export const fetchFailure = (payload) => ({ type: FETCH_FAILURE, payload });

export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const fetchUpdateTable = (payload) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(`${API_URL}/tables/${payload.id}`, options).then(() =>
      dispatch(updateTable(payload))
    );
  };
};

export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)))
      .catch((failure) => {
        dispatch(fetchFailure(failure.message || true));
      });
  };
};

const tablesReducer = (statePart = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return {
        ...statePart,
        data: statePart.data.map((table) =>
          table.id === action.payload.id
            ? { ...table, ...action.payload }
            : table
        ),
      };

    case UPDATE_TABLES:
      return {
        ...statePart,
        requestStatus: { failure: false, loading: false },
        data: action.payload,
      };

    case FETCH_START:
      return {
        ...statePart,
        requestStatus: { failure: false, loading: true },
      };

    case FETCH_FAILURE:
      return {
        ...statePart,
        requestStatus: { failure: true, loading: false },
      };
    default:
      return statePart;
  }
};

export default tablesReducer;
