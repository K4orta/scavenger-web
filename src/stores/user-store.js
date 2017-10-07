import { extendObservable, action } from 'mobx'
import { get } from 'axios'

class UserStore {
  constructor() {
    extendObservable(this, {
      id: undefined,
      name: undefined,
      loading: false,
      fetch: action(
        () => {
          if (localStorage.getItem('userId')) {

            return
          }
          this.loading = true
          get(`${process.env.REACT_APP_API_PATH}/identify`)
            .then((resp) => {
              console.log(resp.data)
              return resp
            })
        })
    })
  }
}

export default UserStore;