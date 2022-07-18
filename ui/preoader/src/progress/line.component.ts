import styled      from '@emotion/styled'

import { styleFn } from 'styled-system'

import { Box }     from '@ui/layout'

const styles: styleFn = ({ theme, progress = 0 }) => ({
  width: `${progress}%`,
  height: 2,
  backgroundColor: theme.colors.background.white,
  transition: '0.2s',
})

export const Line = styled(Box)<{ progress: number } & any>(styles)
