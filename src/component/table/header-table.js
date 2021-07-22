import React from "react";
import SquareTable from "./square-table";

import { fetchModel } from "../../script/data";

const HeaderTable = () => {
  const model = fetchModel();

  return (
    <thead>
      <tr>
        {model.map((item) => (
          <th key={item.field}>
            <SquareTable align={"center"} value={item.name || item.field} />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(HeaderTable);
