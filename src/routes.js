import postController from './Controllers/postController'
import { Router } from 'express'

import multer from 'multer'
import uploadConfig from '../src/config/uploadConfig'

const upload = multer(uploadConfig)

const route = Router()

// route.get('/', postController.getAll)
route.get('/', postController.getAll)
route.post('/register', upload.single('image'), postController.register)

export default route
