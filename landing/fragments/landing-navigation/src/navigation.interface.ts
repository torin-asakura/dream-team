import { ReactiveVar } from '@apollo/client'
import {NavigationDataType} from '@globals/data'

export type Language = 'RU' | 'EN'

export interface NavigationProps {
  navigationData:NavigationDataType
  language: Language
  languageVar: ReactiveVar<Language>
}
