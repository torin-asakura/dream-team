export type Language = 'EN' | 'RU'

export type Type = 'phone' | 'telegram' | 'skype'

export interface FormProps {
  language: Language
  onSuccess?: (...args) => any
  onFailure?: (...args) => any
  popover?: boolean
  visible?: boolean
}
