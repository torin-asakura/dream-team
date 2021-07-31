import { useSkillLists } from './queries'

const useData = () => {
  const skillLists = useSkillLists()

  return skillLists.reduce(
    (acc, { name, skills }) => ({
      ...acc,
      [name]: [...skills.nodes.map(({ title }) => title)],
    }),
    {}
  )
}

export { useData }
