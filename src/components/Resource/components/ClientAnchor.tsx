'use client'

import Anchor, { AnchorProps } from '@/components/shared/Anchor'
import { getResourceUrl } from '@/lib/utilities'

const ClientAnchor = ({ children, href, ...rest }: AnchorProps) => {
  // async function downloadFile(url: string) {
  //   try {
  //     const localUrl = getResourceUrl(url)
  //     const response = await fetch(localUrl)
  //     const blob = await response.blob()

  //     if (blob.size === 0) throw new Error('Received empty file')

  //     const link = document.createElement('a')
  //     const blobUrl = URL.createObjectURL(blob)

  //     link.href = blobUrl
  //     link.download = url?.split('/').pop() || 'download'
  //     link.style.display = 'none'

  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //     URL.revokeObjectURL(blobUrl)
  //   } catch (err) {
  //     console.error('Error downloading file:', err)
  //   }
  // }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) return
    e.preventDefault()
    // downloadFile(`${href}`)
    const localUrl = getResourceUrl(`${href}`, true)
    window.open(localUrl, '_blank')
  }

  return (
    <Anchor {...rest} href={href} onClick={handleClick}>
      {children}
    </Anchor>
  )
}

export default ClientAnchor
