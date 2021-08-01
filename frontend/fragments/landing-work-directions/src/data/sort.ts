const sort = (skills) => {
  const leftSide = []
  const rightSide = []

  const split = (skill, index) => {
    index % 2 === 0 ? leftSide.push(skill) : rightSide.push(skill)
  }

  skills.forEach(split)

  return { leftSide, rightSide }
}

export { sort }
