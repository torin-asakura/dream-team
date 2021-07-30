import { ReactiveVar } from '@apollo/client'

export type Language = 'RU' | 'EN'

export interface NavigationProps {
  language: Language,
  languageVar: ReactiveVar<Language>
}
