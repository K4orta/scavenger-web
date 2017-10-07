import { extendObservable, action } from 'mobx'

class UserStore {
  constructor() {
    extendObservable(this, {
      phone: localStorage.getItem('phone'),
      fetch: action(() => {
        localStorage.getItem('phone')
      })
    })
  }
}

export default UserStore;