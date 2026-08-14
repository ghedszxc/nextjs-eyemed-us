const semver = require('semver')
const engines = require('./package').engines

const version = engines.node
if (!semver.satisfies(process.version, version)) {
  console.log(
    '\x1b[1m',
    '\x1b[41m',
    '\x1b[41m',
    `Required node version ${version} not satisfied with current version ${process.version}.`,
    '\x1b[41m'
  )
  process.exit(1)
}
