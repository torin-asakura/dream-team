const filter = (items) =>
  items.reduce(
    (result, item) => {
      if (item.language.code === 'RU') result.RU.push(item)
      if (item.language.code === 'EN') result.EN.push(item)

      return result
    },
    { RU: [], EN: [] }
  )

export { filter }
