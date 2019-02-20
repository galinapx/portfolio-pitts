const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://galinapitts.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://galinapitts.herokuapp.com',
  'process.env.CLIENT_ID': 'DXkpN3K3qwPApRmeuE8B2n9HhRLheXOC'
}