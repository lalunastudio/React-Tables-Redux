import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './data.json';
import { toggleAll, toggleRow, initTable } from './actions';

const UNIQUE_KEY = 'show_id';

const Row = React.memo(({ rowData }) => {
  const checked = useSelector(
    state => state.rows[rowData[UNIQUE_KEY]] || false
  );
  const dispatch = useDispatch();

  return (
    <tr onClick={() => dispatch(toggleRow(rowData[UNIQUE_KEY]))}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleRow(rowData[UNIQUE_KEY]))}
        />
      </td>
      <td>{rowData.type}</td>
      <td>{rowData.title}</td>
      <td>{rowData.director}</td>
      <td>{rowData.release_year}</td>
      <td>{rowData.duration}</td>
    </tr>
  );
});

const Table = () => {
  const rows = [...data.slice(0, 1000)]; // Take only first 1000 rows :)
  const dispatch = useDispatch();
  const allChecked = useSelector(state => state.allChecked);

  useEffect(() => {
    dispatch(initTable(rows, UNIQUE_KEY));
  }, []); // eslint-disable-line

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => dispatch(toggleAll())}
                checked={allChecked}
              />
            </th>
            <th>Type</th>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <Row key={r.show_id} rowData={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
