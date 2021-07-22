import React from "react";

import { fetchModel } from "../../script/data";

import SquareTable from "./square-table";

export default class RowTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      model: fetchModel(),
    };
  }

  shouldComponentUpdate(nextProps) {
    return JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item);
  }

  render() {
    const rowstyle = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.item.color ? this.props.item.color : "black",
    };

    return (
      <tr style={rowstyle}>
        {this.state.model.map((member, i) => (
          <td key={i}>
            <SquareTable
              type={member.type}
              value={this.props.item[member.field] || ""}
            />
          </td>
        ))}
      </tr>
    );
  }
}
