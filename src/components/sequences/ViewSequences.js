import React from "react";
import DatatablePage from "./DatatablePage";

class ViewSequences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <DatatablePage />
      </div>
    )
  }
}

export default ViewSequences