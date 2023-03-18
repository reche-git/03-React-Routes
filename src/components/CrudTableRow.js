import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  let{ name, type, id} = el
  return (
    <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>
              <button onClick={() => setDataToEdit(el)}>Edit</button>
              <button onClick={() => deleteData(id)}>Delete</button>
            </td>
          </tr>
  )
}
