import axios from 'axios'

const getCarsSmall = () =>
  axios.get('/assets/demo/data/cars-small.json').then(res => res.data.data)

const getCarsMedium = () =>
  axios.get('/assets/demo/data/cars-medium.json').then(res => res.data.data)

const getCarsLarge = () =>
  axios.get('/assets/demo/data/cars-large.json').then(res => res.data.data)

export default { getCarsSmall, getCarsMedium, getCarsLarge }
