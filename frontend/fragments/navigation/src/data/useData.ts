import { useMenus } from './queries'

const useData = () => {
  const menus = useMenus()

  return menus
}

export { useData }
