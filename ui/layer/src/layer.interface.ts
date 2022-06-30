export type OpacityTypes = 'small' | 'large' | 'none'

export interface LayerProps {
  children: any
  visible: boolean
  onClose: () => void
  scroll?: boolean
  opacity?: OpacityTypes
  center?: boolean
  top?: number
  left?: number
}
