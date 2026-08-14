'use client'

import React from 'react'
import { ICta } from '@/models/ICta'
import { trackCTAClicks } from '@/lib/utilities'
import Button, { ButtonProps } from '@/components/UI/Button'

const CTAClientWrapper = ({ cta, ...props }: { cta?: ICta } & ButtonProps) => {
  if (!cta?.url) return null

  return (
    <Button
      href={cta?.url}
      isExternal={cta?.isExternal}
      onClick={() => {
        trackCTAClicks(cta?.label || '')
      }}
      {...props}
    >
      {cta?.label}
    </Button>
  )
}

export default CTAClientWrapper
