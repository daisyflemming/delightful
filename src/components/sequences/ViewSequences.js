import React from "react";
import DatatablePage from "./DatatablePage";

class ViewSequences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="container root">
        <DatatablePage />
      </div>
    )
  }
}

export default ViewSequences