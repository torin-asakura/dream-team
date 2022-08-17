export const extractObject = (key: string, role: string, data: any[]) =>
  data?.filter((fragment) => fragment[key].role === role)[0]?.[key]
