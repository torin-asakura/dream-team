/* eslint-disable no-param-reassign */

const filter = (items) =>
  items.reduce(
    (result, { title, ...form }) => {
      if (title === 'contact_ru') result.EN = form.fields.nodes
      if (title === 'contact_en') result.RU = form.fields.nodes

      return result
    },
    { EN: [], RU: [] }
  )

export { filter }
