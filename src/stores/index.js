import TriesStore from './tries-store'
import UploadStore from './upload-store'
import UserStore from './user-store'
import ItemStore from './item-store'

export default {
  triesStore: new TriesStore(),
  uploadStore: new UploadStore(),
  userStore: new UserStore(),
  itemStore: new ItemStore()
}

