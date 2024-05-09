const formaString = (str: string): string => str.replace(/(<p>|<\/p>)/g, '')

const stringProps = ['title', 'content', 'excerpt']

export const removeParagraphTags = (target) =>
  stringProps.reduce((acc, prop) => {
    if (target[prop]) {
      return {
        ...acc,
        [prop]: formaString(target[prop]),
      }
    }
    return acc
  }, target)
