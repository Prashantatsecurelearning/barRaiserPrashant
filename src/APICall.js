

class APICall {

    constructor() {
        // super('search');
      }
  

    fetchCrashData(offset, limit) {
    // return this.get(`learning-resource/fetchByFilter/recommended/${skip}/${limit}`);
    return this.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=${offset}&$limit=${limit}`)
  }

 
}
const instance = new APICall();
export default instance;
