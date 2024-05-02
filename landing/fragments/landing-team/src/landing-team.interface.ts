import {RecruitsDataProps} from '@globals/data'

export type Language = 'RU' | 'EN'

export interface LandingProps {
  language: Language
  recruitsData:RecruitsDataProps
}
