import express from 'express'
const router = express.Router()

router.route('/test')
  .post((req, res, next) => {
    res.json({ result: true })
  })

export default router
