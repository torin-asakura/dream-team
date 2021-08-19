import React     from 'react'
import { FC }    from 'react'

import { Index } from './index.component'
import { Seo }   from './seo.component'

const IndexPage: FC = () => (
  <>
    <Seo />
    <Index />
  </>
)

export default IndexPage
