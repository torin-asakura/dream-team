const stringProps = ['title', 'content', 'excerpt']

const formatString = (str) =>
  str
    .replace(/(<p>|<\/p>)/g, '')
    .replace(/(&#8212;|#8212;)/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/(\n)/g, '')

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
