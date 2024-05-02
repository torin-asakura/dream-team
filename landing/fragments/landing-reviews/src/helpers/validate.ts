export const formatString = (str:string):string => str.replace(/(<p>|<\/p>)/g, '').replace(/&nbsp;/g, ' ')
