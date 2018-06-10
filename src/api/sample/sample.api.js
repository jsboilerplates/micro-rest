import sampleService from './sample.service'

export default {
  all (req, res) {
    let body = sampleService.all()
    res.send(body)
  },
  allByName (req, res) {
    let body = sampleService.allByName(req.params.keyword)
    res.send(body)
  }
}
