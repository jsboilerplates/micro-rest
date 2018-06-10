
import path from 'path'

export default {
  getFullPath: (input = '') => {
    return path.join(__dirname, input)
  }
}
