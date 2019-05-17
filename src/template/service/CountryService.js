import axios from 'axios'

const getCountries = () =>
  axios.get('/assets/demo/data/countries.json').then(res => res.data.data)

export default { getCountries }
