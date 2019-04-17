import axios from 'axios'

export class CountryService {
  getCountries(setCountriesData) {
    return axios
      .get('assets/demo/data/countries.json')
      .then(res => res.data.data)
      .then(data => {
        setCountriesData(data)
        return data
      })
  }
}

export default new CountryService()
