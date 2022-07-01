import { makeVar }  from '@apollo/client'

import { Language } from './store.interfaces'

export const languageVar = makeVar<Language>('RU')
