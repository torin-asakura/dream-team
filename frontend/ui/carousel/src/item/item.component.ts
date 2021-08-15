import styled        from '@emotion/styled'
import { motion }    from 'framer-motion'

import { ItemProps } from './item.interface'

const Item = styled(motion.div)<ItemProps>(({ offset }) => ({
  marginRight: offset,
  userSelect: 'none',
}))

export { Item }
