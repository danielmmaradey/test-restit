//Dependencies
import React from "react";

const HeadTable = props => {
  const { headtable } = props;
  return (
    <thead className="head-table">
      <tr className="thead-create-report">
        {headtable.map((name, key) => (
          <th key={key} className={`tcr${key}`} scope="col">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeadTable;
