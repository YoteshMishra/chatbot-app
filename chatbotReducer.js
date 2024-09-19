import { UPDATE_MESSAGE, UPDATE_USER_MESSAGE } from "../actions/chatbotActions";
const initializeSate = {
  messages: [],
};

const chatbotReducer = (state = initializeSate, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      console.log("update meassage", action.data);
      
      let message = {
        speak:"bot",
        text: action.data.fulfillmentText
      }
        return {
            ...state, messages : [...state.messages, message]
      };
      case UPDATE_USER_MESSAGE:
      let messageUser = {
        speak:"user",
        text: action.data.text
      }
        return {
            ...state, messages : [...state.messages, messageUser]
      };

    default:
      return state;
  }
};

export default chatbotReducer;
