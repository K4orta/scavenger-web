import { extendObservable,action } from 'mobx'
import items from '../data/items'
import { get } from 'axios'

class ItemStore {
  constructor() {
    extendObservable(this, {
      items: items,
      groupCounts: () => {
        const out = {}
        this.items.forEach(i => {
          if (!out[i.group]) {
            out[i.group] = 0
          }
          out[i.group] += 1
        })
        return out
      },
      foundInGroup: {
        1: 0,
        2: 0,
        3: 0
      },
      fetchTries: action((phone) => get(`${process.env.REACT_APP_API_PATH}/tries?phone=${phone}`)
        .then(action((resp) => {
          if (resp.data) {
            resp.data.forEach(itemTry => {
              if (itemTry.matched_to) {
                const match = this.items.find(i => i.id === itemTry.matched_to)
                if (match) {
                  match.found = true;
                  if (this.foundInGroup[match.group]) {
                    this.foundInGroup[match.group] = 0
                  }
                  this.foundInGroup[match.group] += 1
                }
              }
            })
          }
          return resp.data
        }))
      )
    })
  }
}

export default ItemStore;
