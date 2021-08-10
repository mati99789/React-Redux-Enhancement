import { apiKey } from '../asset/keyAPI';
import axios from 'axios';

class exchangeApi {
  url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

  getData() {
    return axios
      .get(this.url)
      .then((response) => response)
      .catch((response) => this.handleError(response));
  }

  handleError(res) {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  }
}

export default exchangeApi;
