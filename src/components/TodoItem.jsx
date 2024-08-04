// TodoItem.jsx
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export const TodoItem = ({ cours, index, deleteCours }) => {
  return (
    <tr>
      <td>{cours.name}</td>
      <td>
        <MDBBtn onClick={() => deleteCours(index)} type="button" color="danger">
          Delete
        </MDBBtn>
      </td>
    </tr>
  );
};
