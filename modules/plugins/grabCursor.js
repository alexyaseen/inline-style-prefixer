import camelToDashCase from '../utils/camelToDashCase'

const values = {
  'grab': true,
  'grabbing': true
}

export default function cursor({ property, value, browserInfo: { browser, version }, prefix: { css }, keepUnprefixed }) {
  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
  if (
    property === 'cursor' && values[value] &&
    (
    browser === 'firefox' ||
    browser === 'chrome' ||
    browser === 'safari' ||
    browser === 'opera'
    )
  ) {
    return {
      cursor: css + value + (keepUnprefixed ? ';' + camelToDashCase(property) + ':' + value : '')
    }
  }
}
