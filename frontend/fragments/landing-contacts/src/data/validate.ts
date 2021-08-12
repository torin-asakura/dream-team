/* eslint-disable no-param-reassign */

const stringProps = ['title', 'content', 'excerpt']

const formatString = (str) => {
  str = str.replace(/(<p>|<\/p>)/g, '')
  str = str.replace(/(&#8212;|#8212;)/g, '–')
  str = str.replace(/&#8217;/g, "'")
  return str
}

const validate = (target) =>
  stringProps.reduce((acc, prop) => {
    if (target[prop]) {
      return {
        ...acc,
        [prop]: formatString(target[prop]),
      }
    }
    return acc
  }, target)

export { validate }
