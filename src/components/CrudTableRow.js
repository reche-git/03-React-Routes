import React from "react";
import { useHistory } from "react-router-dom";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/edit/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};
