import { extendObservable, action } from 'mobx'

class UserStore {
  constructor() {
    extendObservable(this, {
      phone: localStorage.getItem('phone'),
      location: undefined,
      updateLocation: action((lat, lng) => {
        this.location = {
          lat,
          lng
        }
      }),
      fetch: action(() => {
        localStorage.getItem('phone')
      })
    })
  }
}

export default UserStore;