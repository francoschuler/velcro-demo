import { Icon } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../theme'

export default function PlusIcon() {
  return (
    <Icon color={theme.main} boxSize={12}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Icon>
  )
}
