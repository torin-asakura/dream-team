import { Browser } from '../landing-hero.constants'

export const defineSafariBrowser = (): boolean => {
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase()

    return (
      userAgent.includes(Browser.SAFARI) &&
      !userAgent.includes(Browser.CHROME) &&
      !userAgent.includes(Browser.OPERA) &&
      !userAgent.includes(Browser.YANDEX) &&
      !userAgent.includes(Browser.FIREFOX)
    )
  }

  return false
}
