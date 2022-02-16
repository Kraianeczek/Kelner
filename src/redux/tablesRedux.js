//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');

// action creators
export const uploadTables = payload => ({ type: UPLOAD_TABLES, payload })
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPLOAD_TABLES:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;