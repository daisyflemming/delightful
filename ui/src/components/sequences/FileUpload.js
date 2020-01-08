/*
 * This solution came from https://github.com/redux-form/redux-form/issues/3686
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {post} from "axios";
import {addSequence} from "../../redux/actions/sequenceActions";
import {connect} from "react-redux";

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
    formData.append('File', data.file)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    const url = 'http://localhost:4000/fileupload';
    post(url, formData, config)
      .then(function(response) {
        console.log(response.data.sequences);
        let seqArray = response.data.sequences;
        seqArray.forEach(s => {
          props.addSequence(s.sequenceName, s.sequenceDescription, s.sequence);
          window.alert('You have added a new sequence called '+ s.sequenceName);
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSequence: (name, description, sequence) => dispatch(addSequence(name, description, sequence)),
  }
};

FileUpload = reduxForm({
  form: 'uploadSequencesForm' // a unique identifier for this form
})(FileUpload)

FileUpload = connect(
  null,
  mapDispatchToProps
)(FileUpload);

export default FileUpload
