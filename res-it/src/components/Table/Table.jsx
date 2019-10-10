//Dependencies
import React from "react";

//Components
import HeadTable from "./HeadTable/HeadTable";
import BodyTable from "./BodyTable/BodyTable";

const Table = props => {
  const { head, body, nameColums } = props;

  const actionDelete = colum => {
    if (props.btnDelete !== undefined) {
      props.btnDelete(colum);
    }
  };

  const actionEdit = colum => {
    if (props.btnEdit !== undefined) {
      props.btnEdit(colum);
    }
  };

  const actionView = colum => {
    if (props.btnView !== undefined) {
      props.btnView(colum);
    }
  };

  return (
    <>
      <table className="table" id="table-new">
        <HeadTable headtable={head} />
        <tbody>
          {body &&
            body.map((colum, key) => {
              const count = key;
              return (
                <BodyTable
                  count={count}
                  key={key}
                  colum={colum}
                  names={nameColums}
                  deleteColum={actionDelete}
                  editColum={actionEdit}
                  viewColum={actionView}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
