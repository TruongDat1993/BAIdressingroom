function Api() {
    // lấy ds products từ server
    this.fecthData = function () {
      const promise = axios({
        url: "https://65e1954aa8583365b316c3c7.mockapi.io/api/dressingrom",
        method: "GET",
      });
  
      return promise;
    }
}