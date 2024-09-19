import axios from 'axios';

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE";

export const textQueryAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_MESSAGE, data: data });
      
      const response = await axios.post("http://localhost:3030/text_query", {
        text: data.text,
        userId: "yot12hgs",
      });
      
      dispatch({ type: UPDATE_MESSAGE, data: response.data });
    } catch (error) {
      console.error("Error in textQueryAction:", error);
      // You might want to dispatch an error action here
    }
  };
};
