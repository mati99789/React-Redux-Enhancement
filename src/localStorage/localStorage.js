class LocalStorage {
  getData() {
    if (localStorage.getItem('data')) {
      const newData = JSON.parse(localStorage.getItem('data'));
      return newData;
    }
    return [];
  }

  setData(data) {
    window.localStorage.setItem('data', JSON.stringify(data));
  }
}

export default LocalStorage;
