import React from "react";

import BoardTable from "./table/board-table";

export default class Table extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <BoardTable />
      </div>
    );
  }
}
