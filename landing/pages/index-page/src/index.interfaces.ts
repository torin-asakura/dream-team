import { SkillsDataType }     from '@globals/data'
import { RecruitsDataType }   from '@globals/data'
import { FooterDataType }     from '@globals/data'
import { NavigationDataType } from '@globals/data'

export interface IndexPageProps {
  data: any
  SEO: any
  skillsData: SkillsDataType
  recruitsData: RecruitsDataType
  footerData: FooterDataType
  navigationData: NavigationDataType
}
