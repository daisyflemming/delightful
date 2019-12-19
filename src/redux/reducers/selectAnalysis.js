import { FORM } from "../actionTypes";

const initialState = {
};

export default function(state = initialState, action) {
  //action.type == '@@redux-form/CHANGE'
  switch (action.type) {
    case FORM: {
      if (action.meta.field === 'name') {
        return {
          ...state,
          'study': {
            'title': action.payload,
            'description': '5000 patients on ' + action.payload,
          }
        };
      }
      if (action.meta.field === 'dataType') {
        return {
          ...state,
          'dataType': {
            'title': action.payload,
            'description': 'Description of ' + action.payload,
          }
        };
      }
      if (action.meta.field === 'outcome') {
        return {
          ...state,
          'outcome': {
            'title': action.payload,
            'description': 'Description of ' + action.payload
          }
        };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

