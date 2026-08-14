'use client'

import { TBlogBanner } from '../../types'
import Anchor from '@/components/shared/Anchor'
import ConditionalWrapper from '@/components/shared/ConditionalWrapper'

const SharePrint = ({ socialTitle = '', externalLinks = [] }: TBlogBanner) => {
  return (
    <div>
      {socialTitle && <h5>{socialTitle}</h5>}
      <nav aria-label="social media sharing and print navigation">
        {externalLinks?.map(link => {
          const isPrint = link.url === '#'
          const props = {
            ...(isPrint
              ? { onClick: () => window.print() }
              : { href: link.url || '#', isExternal: true }),
          }

          return (
            <ConditionalWrapper
              key={link.url}
              wrapper="button"
              fallback={Anchor}
              condition={isPrint}
              {...(props as any)}
            >
              <img src={link.logo} alt={link.alt || 'external link'} />
            </ConditionalWrapper>
          )
        })}
      </nav>
    </div>
  )
}

export default SharePrint
