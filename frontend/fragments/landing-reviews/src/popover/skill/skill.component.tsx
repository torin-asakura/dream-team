import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'
import { useHover }   from '@ui/utils'

import { SkillProps } from './skill.interface'

const Skill: FC<SkillProps> = ({ content }) => {
  const [hover, hoverProps] = useHover()

  const transition = '.2s'

  return (
    <Box
      px={10}
      alignItems='center'
      backgroundColor={hover ? 'background.blue' : 'background.lightGray'}
      height={32}
      borderRadius='normal'
      style={{
        transition,
        cursor: 'pointer',
      }}
      {...hoverProps}
    >
      <Text style={{ transition }} fontSize='regular' color={hover ? 'text.white' : 'text.primary'}>
        {content}
      </Text>
    </Box>
  )
}

export { Skill }
