import React, { PropsWithChildren, ReactNode, FC } from 'react'

export type ConditionalWrapperProps = {
  condition: boolean
  wrapper?: FC<{ children: ReactNode } & Record<string, any>>
  fallback?: FC<{ children: ReactNode } & Record<string, any>>
} & Record<string, any>

const ConditionalWrapper: React.FC<PropsWithChildren<ConditionalWrapperProps>> = ({
  condition,
  children,
  wrapper: Wrapper,
  fallback: Fallback,
  ...rest
}) => {
  return condition && Wrapper ? (
    <Wrapper {...rest}>{children}</Wrapper>
  ) : Fallback ? (
    <Fallback {...rest}>{children}</Fallback>
  ) : (
    <>{children}</>
  )
}

export default ConditionalWrapper
