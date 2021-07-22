import React from "react";

export default class SquareTable extends React.Component {
  render() {
    const textAlign = this.props.type === Number ? "right" : "center";
    const paddingRight = this.props.type === Number ? "40px" : 0;
    const width = this.props.type === Number ? "94px" : "134px";

    const cellstyle = {
      textAlign,
      paddingRight,
      width,
    };

    return <pre style={cellstyle}>{this.props.value}</pre>;
  }
}
