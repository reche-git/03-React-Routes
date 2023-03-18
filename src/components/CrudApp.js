import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
  },
  {
    id: 4,
    name: "Rattata",
    type: "Normal",
  },
  {
    id: 5,
    name: "Pikachu",
    type: "Electric",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Delete Data with id '${id}'?`);

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div className="ComponentContainer">
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};
