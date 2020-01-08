import React from 'react';
import FileUploadComponent from './FileUpload';

class ImportSequences extends React.Component {
  render() {
    return (
      <div className='container root'>
        <div className={'row'}>
          <div className={'col s12'}>
            <FileUploadComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ImportSequences