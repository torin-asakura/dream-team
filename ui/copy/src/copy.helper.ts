const copy = (content) => {
  if (navigator && navigator.clipboard) navigator.clipboard.writeText(content)
  else {
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.style.position = 'absolute'
    input.style.left = '-100%'
    input.setAttribute('value', content)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
}

export { copy }
