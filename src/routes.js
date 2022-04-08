import postController from './Controllers/postController'
import { Router } from 'express'

import uploadConfig from '../src/config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const route = Router()

// route.get('/', postController.getAll)
route.get('/', postController.getAll)
route.post('/register', upload.single('image'), postController.register)

export default route
