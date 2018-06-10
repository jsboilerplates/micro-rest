import SampleApi from './sample/sample.api'
import express from 'express'

const router = express.Router()

router.get('/samples', SampleApi.all)
router.get('/samples/name/:keyword', SampleApi.allByName)

export default router
