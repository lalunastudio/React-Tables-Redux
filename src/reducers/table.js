const table = (state = { rows: {}, allChecked: false }, action) => {
  switch (action.type) {
    case 'INIT_TABLE':
      return {
        allChecked: false,
        rows: {
          ...action.rows.reduce(
            (prev, cur) => ({
              ...prev,
              [cur[action.uniqueKey]]: false,
            }),
            {}
          ),
        },
      };

    case 'TOGGLE_ROW':
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.id]: !state.rows[action.id],
        },
      };
    case 'TOGGLE_ALL':
      return {
        ...state,
        allChecked: !state.allChecked,
        rows: {
          ...Object.keys(state.rows).reduce(
            (prev, key) => ({
              ...prev,
              [key]: !state.allChecked,
            }),
            {}
          ),
        },
      };

    default:
      return state;
  }
};
export default table;
