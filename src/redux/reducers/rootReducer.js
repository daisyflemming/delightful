const initState = {
  sequences: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_SEQUENCE'){
    let newSequence = {
      sequenceName: action.name,
      sequenceDescription: action.description,
      sequence: action.sequence
    }
    let sequences = [...state.sequence, newSequence];
    return {
      ...state,
      sequences: sequences
    }
  }
  return state;
}

export default rootReducer