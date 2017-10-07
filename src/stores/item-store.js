import { extendObservable } from 'mobx'
import items from '../data/items'

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
    })
  }
}

export default ItemStore;
