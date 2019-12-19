export const addSequence = (name, description, sequence) => {
  return {
    type: 'ADD_SEQUENCE',
    name,
    description,
    sequence
  }
}

export const importSequences = (data) => {
  return {
    type: 'IMPORT_SEQUENCES',
    data
  }
}