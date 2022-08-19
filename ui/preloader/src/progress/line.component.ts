import styled      from '@emotion/styled'

import { motion }  from 'framer-motion'
import { styleFn } from 'styled-system'

const styles: styleFn = ({ theme }) => ({
  width: '100%',
  height: 2,
  backgroundColor: theme.colors.background.white,
})

export const Line = styled(motion.div)(styles)
