class LocalStorage {
  getDataFromLocal() {
    if (localStorage.getItem('data')) {
      const newData = JSON.parse(localStorage.getItem('data'));
      return newData;
    }
    return [];
  }

  setNewDataToLocal(data) {
    window.localStorage.setItem('data', JSON.stringify(data));
  }
}

export default LocalStorage;
