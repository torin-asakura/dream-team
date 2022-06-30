import React            from 'react'
import { FC }           from 'react'

import { ContactsPage } from './contacts.page'
import { Seo }          from './seo.component'

const Contacts: FC = () => (
  <>
    <Seo />
    <ContactsPage />
  </>
)

export default Contacts
