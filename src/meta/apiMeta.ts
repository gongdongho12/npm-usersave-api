const localConfig = {
  baseURL: 'http://localhost:5000',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}

const devConfig = {
  baseURL: 'http://localhost:5000',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}

const prodConfig = {
  baseURL: 'http://localhost:5000',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}


export default {
  localConfig,
  devConfig,
  prodConfig
}