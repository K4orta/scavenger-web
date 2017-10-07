import { extendObservable, action } from 'mobx'
import { get } from 'axios'

class UploadStore {
  constructor() {
    extendObservable(this, {
      uploads: [],
      done: [],
    })
  }
}

export default UploadStore;