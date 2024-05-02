const compare = ({ menuOrder: a }, { menuOrder: b }) => (a > b ? 1 : -1)

export const sortBySide = (list) => {
  const leftSide: any[] = []
  const rightSide: any[] = []

  const split = (item, index) => {
    if (index % 2 === 0) {
      leftSide.push(item)
    } else {
      rightSide.push(item)
    }
  }

  [...list].sort(compare).forEach(split)

  return { leftSide, rightSide }
}
