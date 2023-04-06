export type Language = 'EN' | 'RU'

export type Type = 'phone' | 'telegram' | 'skype'

export interface FormContentProps {
  language: Language
  onSuccess: (...args) => any
  onFailure: (...args) => any
}
