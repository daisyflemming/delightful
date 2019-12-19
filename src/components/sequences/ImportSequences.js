import React from 'react';
import FileUploadComponent from './FileUpload';
import {importSequences} from '../../redux/actions/sequenceActions';
import {connect} from 'react-redux';

class ImportSequences extends React.Component {
  importSequences = async data => {
    this.props.importSequences(data);
    window.alert('You have added a new sequence called \''+ data);
  };


  /* this method is used for debugging */
  showFormValues = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  render() {
    return (
      <div className='container root'>
        <div className={'row'}>
          <div className={'col s12'}>
            <FileUploadComponent onSubmit={this.importSequences}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    importSequences: (data) => dispatch(importSequences(data)),
  }
};

export default connect(null, mapDispatchToProps)(ImportSequences)