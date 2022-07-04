export type Language = 'RU' | 'EN'

export interface FormPopoverProps {
  language: Language
  visible: boolean
  setVisible: (...args) => any
}
