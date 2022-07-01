export type Language = 'EN' | 'RU'

export type Type = 'phone' | 'telegram' | 'skype'

export interface FormProps {
  language: Language
  onSuccess?: () => any
  onFailure?: () => any
  popover?: boolean
  visible?: boolean
}
