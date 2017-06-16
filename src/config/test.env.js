import merge from 'webpack-merge'
import devEnv from './dev.env'

export default merge(devEnv, {
  NODE_ENV: '"testing"',
  database: {
    name: 'senna-test-db'
  },
  seed: '/seeds/base/db-seed.js'
})
