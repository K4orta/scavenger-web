import { extendObservable, action } from 'mobx'
import { get } from 'axios'

class TriesStore {
  constructor() {
    extendObservable(this, {
      tries: [],
      fetch: action((options) => {
        return get(`${process.env.REACT_APP_API_PATH}/tries`)
          .then(action((resp) => {
            return resp.data
          })).catch(console.log)
      })
    })
  }
}

export default TriesStore;
