import React from 'react'

const styleBtn = {
  border: "2px solid rgb(42, 19, 141)",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  margin: "0 0.5rem 0 0",
  display: "inline-block",
  backgroundColor: "#28fcf1",
  color: "rgb(42, 19, 141)",
  fontWeight: "bold",
  fontSize: "1rem",
  lineHeight: "1",
  textTransform: "none",
  textDecoration: "none",
  textAlign: "center",
  verticalAlign: "middle",
  cursor: "pointer",
}

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  let{ name, type, id} = el
  return (
    <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>
              <button style={styleBtn} onClick={() => setDataToEdit(el)}>Edit</button>
              <button style={styleBtn} onClick={() => deleteData(id)}>Delete</button>
            </td>
          </tr>
  )
}
