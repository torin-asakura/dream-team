import { useEffect }                  from 'react'
import { useState }                   from 'react'

import { Browser }                    from './hero-background-color.constants'
import { UseHeroBackgroundColorType } from './hero-background-color.interfaces'

export const useHeroBackgroundColor: UseHeroBackgroundColorType = () => {
  const [color, setColor] = useState<string>('background.hero')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.indexOf(Browser.CHROME) > -1) {
      setColor('background.purpleInChrome')
    } else if (userAgent.indexOf(Browser.SAFARI) > -1) {
      setColor('background.purpleInSafari')
    } else if (userAgent.indexOf(Browser.FIREFOX) > -1) {
      setColor('background.purpleInFirefox')
    } else {
      setColor('background.hero')
    }
  }, [])

  return { heroBackgroundColor: color }
}
