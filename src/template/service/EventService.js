import axios from 'axios'

const getEvents = () =>
  axios.get('assets/demo/data/scheduleevents.json').then(res => res.data.data)

export default { getEvents }
