import {FooterDataType} from '@globals/data'

export type Language = 'EN' | 'RU'

export interface LandingProps {
  language: Language
  footerData:FooterDataType
}
