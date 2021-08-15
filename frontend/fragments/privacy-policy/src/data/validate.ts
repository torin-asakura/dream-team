/* eslint-disable no-param-reassign */

const stringProps = ['title', 'content', 'excerpt']

const formatString = (str) => {
  str = str.split('</p>')
  return str.map((p) =>
    p
      .replace(/(<p>|<\/p>)/g, '')
      .replace(/(&#8212;|#8212;)/g, '–')
      .replace(/&nbsp;/g, '')
  )
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
