import { Fragment }       from 'react'
/* eslint-disable react/require-default-props */
import { createElement }  from 'react'

import { ConditionProps } from './condition.interface'

const Condition = ({ match, ...props }: ConditionProps) =>
  match ? createElement(Fragment, props) : null

export { Condition }
