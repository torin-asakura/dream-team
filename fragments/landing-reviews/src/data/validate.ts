const stringProps = ['title', 'content', 'excerpt']

const formatString = (str) => str.replace(/(<p>|<\/p>)/g, '').replace(/&nbsp;/g, ' ')

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
