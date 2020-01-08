export const addSequence = (name, description, sequence) => {
  return {
    type: 'ADD_SEQUENCE',
    name,
    description,
    sequence
  }
};
