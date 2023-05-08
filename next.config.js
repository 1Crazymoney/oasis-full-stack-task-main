/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  env: {
    customKey: 'my-value',
  },
}
