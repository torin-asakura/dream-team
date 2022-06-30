import styled                          from '@emotion/styled'
import { createWrapperBaseStyles }     from '@atls-ui-parts/carousel'
import { createWrapperPositionStyles } from '@atls-ui-parts/carousel'

import { motion }                      from 'framer-motion'

export const Wrapper = styled(motion.div)<any>(
  createWrapperBaseStyles(),
  createWrapperPositionStyles()
)
