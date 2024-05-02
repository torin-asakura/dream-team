import { RecruitsDataType } from '@globals/data'

export type Language = 'RU' | 'EN'

export interface LandingProps {
  language: Language
  recruitsData: RecruitsDataType
}
