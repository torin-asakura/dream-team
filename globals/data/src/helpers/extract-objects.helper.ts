const extractObjects = (role: string, params: string, fragments) =>
  fragments?.filter((fragment) => fragment[params].role === role)

export { extractObjects }
