import styled      from '@emotion/styled'

import { motion }  from 'framer-motion'
import { styleFn } from 'styled-system'

const styles: styleFn = ({ theme }) => ({
  width: 240,
  height: 2,
  backgroundColor: theme.colors.border.transparent,
})

export const Path = styled(motion.div)(styles)
