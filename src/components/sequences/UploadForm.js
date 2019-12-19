import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import {addSequence} from "../../redux/actions/sequenceActions";

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.sequence) {
    errors.sequence = 'Required'
  }
  else if (!/^[TCGA]*$/.test(values.sequence)) {
    errors.sequence = 'Sequence should only contains T, C, G, or A character ' +
      ' and no white space should be included.'
  }
  return errors
}

const renderField = ({
                       input,
                       placeholder,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <div className={'form-input'}>
    {type === 'textarea' ?(
      <textarea {...input} placeholder={placeholder} className={'large-box'}/>
    ):(
      <input {...input} placeholder={placeholder} type={type} />
    )
    }
    {touched &&
    ((error && <span className={'required'}><i className="material-icons icon-red darken-4">error</i> {error} </span>) ||
      (warning && <span className={'required'}>{warning}</span>))}
  </div>
)

const handleSubmit = (props, values) => {
  props.addSequence(values.name, values.description, values.sequence);
  props.history.push('/');
}

const UploadForm = props => {
  console.log(props)
  const {handleSubmit, pristine, reset, submitting, invalid} = props;
  return (
    <div className={'container'}>
      <h3>Add a new DNA sequence</h3>
      <form>
        <Field name='name' component={renderField} placeholder='Sequence name'
               type="text"/>
        <Field name='description' component={renderField} placeholder='Sequence Description'
               type="text"/>
        <Field name='sequence' component={renderField} placeholder='DNA Sequence'
               type="textarea"/>
        <button type='submit' disabled={submitting || invalid}
                className={'btn-small indigo button-margin'} onClick={handleSubmit} >
          <i className="material-icons left">add</i>Add Sequence
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}
                className={'btn-small indigo'}>
          Clear Values
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sequences: state.rootReducer.sequences,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSequence: (name, description, sequence) => dispatch(addSequence(name, description, sequence))
  }
}

export default reduxForm({
    form: 'uploadForm', validate,
})(connect(mapStateToProps, mapDispatchToProps)(UploadForm));