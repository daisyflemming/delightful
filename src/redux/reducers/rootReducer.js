import data from './sequences';

const initState = {
  sequences: data.sequences
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_SEQUENCE'){
    let newSequence = {
      sequenceName: action.name,
      sequenceDescription: action.description,
      sequence: action.sequence
    }
    let sequences = [...state.sequences, newSequence];
    return {
      ...state,
      sequences: sequences
    }
  }
  if (action.type === 'IMPORT_SEQUENCES'){
    console.log(action);
    let newSequence = {
      sequenceName: action.name,
      sequenceDescription: action.description,
      sequence: action.sequence
    }
    let sequences = [...state.sequences, newSequence];
    return {
      ...state,
      sequences: sequences
    }
  }
  return state;
}

export default rootReducer