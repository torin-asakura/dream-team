const compare = ({ menuOrder: a }, { menuOrder: b }) => (a > b ? 1 : -1)

const sort = (reviews: any[]) => [...reviews].sort(compare)

export { sort }
