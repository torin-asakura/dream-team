import { useQuery }     from '@apollo/client'
import { GET_CONTACTS } from './contacts.query'

export const useContacts = () => {

  const {data} = useQuery(GET_CONTACTS,{fetchPolicy:'cache-only'})

  if (!data) {return { contactsData: { RU: [], EN: [] } }}

  return {
      contactsData: {
        RU: data.contactItems.nodes.filter(
          (contactFragment) => contactFragment.language.code === 'RU'
        ),
        EN: data.contactItems.nodes.filter(
          (contactFragment) => contactFragment.language.code === 'EN'
        ),
      },
    }
}
