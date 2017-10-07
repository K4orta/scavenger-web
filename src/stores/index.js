import TriesStore from './tries-store'
import UserStore from './user-store'
import ItemStore from './item-store'

export default {
  triesStore: new TriesStore(),
  userStore: new UserStore(),
  itemStore: new ItemStore()
}

