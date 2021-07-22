import React from "react";

// import { Profiler } from "react";
// import onRenderCallback from "./profiler";

import HeaderTable from "./header-table";

import { fetchBiggerData } from "../../script/data";
import { getRandomRow, rnd } from "../../script/funcs";

import RowTable from "./row-table";

export default class BoardTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // model: fetchModel(),
      open: fetchBiggerData(),
      data: fetchBiggerData(),
    };
  }

  changeData = () => {
    const randomIndx = rnd(this.state.data.length);
    const randomItem = this.state.data[randomIndx];
    const changedItem = getRandomRow(randomItem);

    // console.table(changedItem);

    const onOpen = this.state.open[randomIndx];
    changedItem.color = changedItem.Bid > onOpen.Bid ? "blue" : "red";

    const data = [...this.state.data];
    data[randomIndx] = changedItem;

    this.setState(() => {
      return {
        data,
      };
    });
  };

  componentDidMount() {
    this.changeData();
    this.interval = setInterval(() => this.changeData(), 40);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <table>
        {/* header */}
        {/* <Profiler id="Header" onRender={onRenderCallback}> */}
        <HeaderTable />
        {/* </Profiler> */}

        {/* body */}
        <tbody>
          {this.state.data.map((row, indx) => (
            <RowTable
              key={row.Symbol}
              item={row}
              backgroundColor={indx % 2 === 0 ? "#eceff1" : "white"}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
