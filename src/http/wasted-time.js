import axios from 'axios';

export async function updateWastedTime(wastedTime) {
  const response = await axios.put('/wasted-time', wastedTime);
  return response
}

export async function getWastedTime() {
  const response = await axios.get('/wasted-time');
  return response
}