import React from "react";
import {connect} from "react-redux";

const ViewSequences = ({ type, title, description }) => (
  <div>
    { title && description &&
      <div class={'card'}>
        <div className={'card-content'}>
          <span className={'card-title'}>{title}</span>
          <p>{description}</p>
        </div>
      </div>
    }
  </div>
);


const mapStateToProps = (state, ownProps) => {
  const { selectAnalysis } = state;
  const type = ownProps.type;
  if (selectAnalysis && selectAnalysis[type]
    && selectAnalysis[type].title && selectAnalysis[type].description){
    const title = selectAnalysis[type].title;
    const description = selectAnalysis[type].description;
    return ({title, description});
  }
  else{
    return({})
  }
};
export default connect(mapStateToProps)(ViewSequences);
