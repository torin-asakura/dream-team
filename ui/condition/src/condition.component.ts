import { Fragment }       from 'react'
import { createElement }  from 'react'

import { ConditionProps } from './condition.interface'

const Condition = ({ match, ...props }: ConditionProps) =>
  match ? createElement(Fragment, props) : null

export { Condition }
