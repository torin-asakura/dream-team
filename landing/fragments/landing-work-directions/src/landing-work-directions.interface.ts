import { SkillsDataType } from '@globals/data'

export type Language = 'RU' | 'EN'

export interface LandingWorkDirectionsProps {
  language: Language
  skillsData: SkillsDataType
}
