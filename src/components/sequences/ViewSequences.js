import React from "react";
import {connect} from "react-redux";

class ViewSequences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div className="container root">
        <div className={'row'}>
          <div className={'col s12'}>
            {this.props.sequences.length}
          </div>
        </div>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    sequences: state.rootReducer.sequences
  }
};

export default connect(mapStateToProps)(ViewSequences)