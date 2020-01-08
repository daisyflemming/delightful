/*
 * This solution came from https://github.com/redux-form/redux-form/issues/3686
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {post} from "axios";
import {addSequence} from "../../redux/actions/sequenceActions";
import {connect} from "react-redux";

const url = process.env.REACT_APP_UPLOAD_URL;

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
const FileInput = ({
                     input: { value: omitValue, onChange, onBlur, ...inputProps },
                     meta: omitMeta,
                     ...props
                   }) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...inputProps}
      {...props}
    />
  );
};

let FileUpload = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
    console.log(data);
    let formData = new FormData();
    formData.append('File', data.file);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    console.log(url);
    post(url, formData, config)
      .then(function(response) {
        let seqNames = [];
        let errSeqNames = [];
        let seqArray = response.data.sequences;
        seqArray.forEach(s => {
          if (!props.tcga_sequences.includes(s.sequence)) {
            props.addSequence(s.sequenceName, s.sequenceDescription, s.sequence);
            seqNames.push(s.sequenceName)
          }
          else{
            errSeqNames.push(s.sequenceName)
          }
        });
        let message = seqNames.length > 0 ? 'You have added ' + seqNames.length + ' new sequence(s)': '';
        let errorMessage = errSeqNames.length > 0 ? errSeqNames.length+ ' sequence(s) are already in the system and they are not added.':'';
        window.alert(errorMessage + '\n\n' + message);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className={'container'}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <Field name='file' component={FileInput} type='file'
                 place-holder='Upload Sequences in JSON format'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    tcga_sequences: state.rootReducer.sequences.map(a => a.sequence),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSequence: (name, description, sequence) => dispatch(addSequence(name, description, sequence)),
  }
};

FileUpload = reduxForm({
  form: 'uploadSequencesForm' // a unique identifier for this form
})(FileUpload);

FileUpload = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);

export default FileUpload
