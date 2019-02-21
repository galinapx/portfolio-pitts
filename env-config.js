const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-galinapitts.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-galinapitts.herokuapp.com',
  'process.env.CLIENT_ID': 'dFk5Amzw51Avu7VX3i0IZIXXJ9xCDhCd'
}