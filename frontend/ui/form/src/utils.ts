import { Language } from './form.interface'

export const fieldToLabelMap = {
  name: ['Name', 'Имя'],
  email: ['E-mail'],
  requisites: ['Phone|Telegram|Skype', 'Телефон|Telegram|Skype'],
}

export const getFieldDataByLanguage = (content, language: Language, field: string): string =>
  content[language].filter(({ label }) => fieldToLabelMap[field].includes(label))[0]?.label

export const formatRequisitesField = (batch, state) =>
  batch &&
  batch.split('|').filter((label) =>
    ({
      phone: ['Phone', 'Телефон'],
      telegram: ['Telegram'],
      skype: ['Skype'],
    }[state].includes(label))
  )[0]
