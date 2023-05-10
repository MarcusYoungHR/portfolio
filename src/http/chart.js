import axios from 'axios'

export function getAllProgress() {
  return axios.get('/load-progress-by-date').then((progress) => {
    return progress.data
  })
}