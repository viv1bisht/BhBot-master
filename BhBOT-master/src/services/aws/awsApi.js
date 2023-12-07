import axios from "axios";
import { fixQuotes } from "../../utility/common_function/helperFunction";

export const postRequestQuery = async (requestText) => {
  try {
    const apiUrl =
      "https://jqtsucosj7.execute-api.us-east-1.amazonaws.com/dev/VcarePostQuery";
    requestText = '"' + fixQuotes(requestText) + '"';

    const result = await axios
      .post(apiUrl, requestText,{
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((response) => JSON.parse(response.data.body))
      .then((response) => response.message);

    return result;
  } catch (error) {
    console.log(`Error making API request: ${error}`);
  }
};
