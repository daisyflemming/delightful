import React from "react";
import UploadForm from "./UploadForm";
import AnalysisDescription from "./AnalysisDescription";

export default class AddNewSequence extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  showResults = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  render() {
    return (
      <div className="container root">
        <div className={'row'}>
          <div className={'col s12'}>
              <UploadForm />
            </div>
          </div>
      </div>
    );
  }
}

