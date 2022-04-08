import multer from 'multer'
import path from 'path'

module.exports = {
  storage: new multer.diskStorage({
    // destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, cb) {
      const [name] = file.originalname.split('.')
      const filename = `${name}.jpg`
      cb(null, filename)
    },
  }),
}
