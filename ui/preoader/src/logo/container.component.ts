import styled        from '@emotion/styled'
import { CSSObject } from '@emotion/css'

import { Box }       from '@ui/layout'

const styles: CSSObject = {
  width: 380,
  height: 64,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Container = styled(Box)(styles)
