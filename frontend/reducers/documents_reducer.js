import {
  RECEIVE_DOCUMENT,
  RECEIVE_DOCUMENTS
} from "../actions/document_actions";

const documentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DOCUMENT:
      nextState[action.document.id] = action.document;
      return nextState;
    case RECEIVE_DOCUMENTS:
      return action.documents;
    default:
      return state;
  }
};

export default documentsReducer;
