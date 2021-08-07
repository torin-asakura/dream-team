const compare = ({ menuOrder: a }, { menuOrder: b }) => (a > b ? 1 : -1)

const sort = (skills) => {
  const leftSide: any[] = []
  const rightSide: any[] = []

  const split = (skill, index) => {
    if (index % 2 === 0) {
      leftSide.push(skill)
    } else {
      rightSide.push(skill)
    }
  }

  ;[...skills].sort(compare).forEach(split)

  return { leftSide, rightSide }
}

export { sort }
