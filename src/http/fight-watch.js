import axios from "axios"

export async function searchFighter(name) {
  return axios.post('/search', {
    name
  }).then(() => {
    return
  }).catch(error => {
    if (error.response) {
      console.log('Server Error:', error.response.data);
      if (error.response.data.errno === 1062) {
        alert('Fighter already exists')
      } else {
        alert('Something went wrong')
      }
    } else {
      console.log('Error:', error.message);
    }
  })
};

export async function loadFighters() {
  return axios.get('/load-fighters').then((fighters) => {
    return fighters
  })
}

export async function removeFighter(id) {
  // console.log(id)
  return axios.delete(`/remove-fighter/${id}`).then(() => {
    return
  })
}