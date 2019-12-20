import React from 'react';
import FileUploadComponent from './FileUpload';
import {importSequences} from '../../redux/actions/sequenceActions';
import {connect} from 'react-redux';

class ImportSequences extends React.Component {
  importSequences = async data => {
    await this.props.importSequences(data);
    window.alert('You have added a new sequence called \''+ data);
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