import clientConfig from './config.client'
import serverConfig from './config.server'

const devConfig = {
  ...clientConfig,
  ...serverConfig,
}

export default devConfig
