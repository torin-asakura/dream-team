const separateLanguages = (data) => {
  let RU = []
  let EN = []

  data.forEach(piece => {
    piece.language.code === 'EN'
      ? EN.push(piece)
      : RU.push(piece)
  })

  return [EN, RU]
}

export { separateLanguages }
