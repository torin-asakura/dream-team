const splitItems = (items) =>
  items.reduce(
    (result, item) => {
      result[item.contentAddons.order > items.length / 2 ? 1 : 0].push(item)

      return result
    },
    [[], []]
  )

export { splitItems }
