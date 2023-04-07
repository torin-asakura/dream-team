import { Review }   from '../item'
import { Language } from '../landing-reviews.interface'

export interface PopoverProps {
  visible: number | null
  setVisible: (newState: number | null) => any
  reviews: Review[]
  language: Language
}
