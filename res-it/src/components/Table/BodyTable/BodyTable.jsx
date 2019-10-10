//Dependencies
import React from "react";

const BodyTable = props => {
  const { colum, names } = props;

  //Actions to return values ​​from the table
  const buttonDelete = () => {
    if (props.deleteColum !== undefined) {
      props.deleteColum(colum);
    }
  };

  const buttonEdit = () => {
    if (props.editColum !== undefined) {
      props.editColum(colum);
    }
  };

  const buttonView = () => {
    if (props.viewColum !== undefined) {
      props.viewColum(colum);
    }
  }; 

  //Diferent options for the table
  return (
    <tr className="head-dn" id={colum.name}>
      {names &&
        names.map((name, key) => {
          if (name === "btndelete") {
            return (
              <td key={key} className="columtable td-delete">
                <div className="content-td-delete">
                  <button type="submit" className="btn" onClick={buttonDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            );
          } else if (name === "btnedit") {
            return (
              <td key={key} className="columtable td-edit">
                <div className="content-td-edit">
                  <button type="submit" className="btn" onClick={buttonEdit}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            );
          } else if (name === "btnview") {
            return (
              <td key={key} className="columtable td-view">
                <div className="content-td-view">
                  <button type="submit" className="btn" onClick={buttonView}>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            );
          } else {
            return (
              <td key={key} className={`columtable tbr${key}`}>
                {colum[name]}
              </td>
            );
          }
        })}
    </tr>
  );
};

export default BodyTable;
