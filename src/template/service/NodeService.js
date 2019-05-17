import axios from 'axios'

const getTreeNodes = () =>
  axios.get('/assets/demo/data/treenodes.json').then(res => res.data.root)

const getTreeTableNodes = () =>
  axios.get('/assets/demo/data/treetablenodes.json').then(res => res.data.root)

export default { getTreeNodes, getTreeTableNodes }
