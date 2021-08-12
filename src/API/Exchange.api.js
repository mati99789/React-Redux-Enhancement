import { apiKey } from '../asset/keyAPI';
import axios from 'axios';

class ExchangeApi {
  url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

  getData() {
    return axios
      .get(this.url)
      .then((response) => response)
      .catch((error) => this.handleError(error));
  }

  handleError(error) {
    if (error.response) {
      console.log(error.response);
      return error.response;
    } else if (error.request) {
      console.log(error);
      return error.request;
    } else {
      console.log(error);
      return error.message;
    }
  }
}

export default ExchangeApi;
