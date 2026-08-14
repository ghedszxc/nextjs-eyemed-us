import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ILayoutModel } from '@/models/ILayout.interface'
import { cmsRepo } from '@/graphql/CMSRepo'
import { getBlogMetaData, getMetaData } from '@/lib/server-actions'
import { defaultLocale } from '@/middleware'
import { footerNavigationAdapter } from '@/widgets/EMFooter/adapter'
import { headerNavigationAdapter } from '@/widgets/EMHeader/adapter'

const Navigation = dynamic(() => import('@/widgets/EMHeader'))
const Footer = dynamic(() => import('@/widgets/EMFooter'))

export type PageContext = {
  params: { lang: string; route?: string[] }
  searchParams?: Record<string, string | string[] | undefined>
}

interface MetadataProps extends PageContext {
  blogId?: string | null
}

export async function generateMetaData({ params, blogId }: MetadataProps): Promise<Metadata> {
  const metadata: {
    title: any
    description: any
    metaDataImage: any
    noIndexNoFollow?: boolean
    hreflang: any
  } = blogId
    ? await getBlogMetaData(blogId)
    : await getMetaData(params?.lang, params?.route?.join('/'))

  const languages: { [key: string]: string } = { ...metadata?.hreflang }
  const canonical = [params?.lang, ...(params?.route || [])].join('/') || `/${defaultLocale}`

  if (canonical) {
    languages['x-default'] = canonical // TODO temporary x-default logic since the site has only one locale
  }

  try {
    // console.log(metadata)
    const meta: Metadata = {
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
      title: metadata?.title || '404 - Page Not Found',
      description: metadata?.description,
      robots: {
        index: metadata?.noIndexNoFollow,
        follow: metadata?.noIndexNoFollow,
      },
      icons: [
        { type: 'image/x-icon', rel: 'icon', url: '/images/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          url: '/resource/crblob/apple-touch-icon-png-data.png',
          sizes: '180x180',
        },
        {
          rel: 'image/png',
          url: '/resource/crblob/favicon-32x32-png-data.png',
          sizes: '32x32',
        },
        {
          rel: 'image/png',
          url: '/resource/crblob/favicon-16x16-png-data.png',
          sizes: '32x32',
        },
        {
          rel: 'mask-icon',
          url: '/resource/crblob/safari-pinned-tab-svg-data.svg',
          color: '#4e9b36',
        },
      ],
      manifest: '/resource/crblob/site.webmanifest-8342-1.js',
      alternates: {
        canonical: canonical,
        languages,
      },
      openGraph: {
        type: 'article',
        title: metadata?.title || '404 - Page Not Found',
        description: metadata?.description,
        siteName: metadata?.title || '404 - Page Not Found',
        url: `${process.env.NEXT_PUBLIC_DOMAIN}${params?.lang}/${(params?.route || [])?.join('/')}`,
        images: metadata?.metaDataImage,
      },
      twitter: {
        card: 'summary',
        title: metadata?.title || '404 - Page Not Found',
        description: metadata?.description,
        images: metadata?.metaDataImage,
      },
    }

    return meta
  } catch (err) {
    return {
      title: '404',
      description: '404',
      robots: { index: false, follow: false },
    }
  }
}

export interface NavigationLayoutProps extends PageContext {
  children: React.ReactNode
  data?: ILayoutModel
}

export async function NavigationLayout({ params, data, children }: NavigationLayoutProps) {
  try {
    const { lang } = params
    const { hideHeader } = data?.navigationData

    const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`

    // Fetch navigation data
    const cmsNavigation = await cmsRepo.getNavigation(cmLanguage)
    const headerData = headerNavigationAdapter.adapt(cmsNavigation)
    const footerData = footerNavigationAdapter.adapt(cmsNavigation)

    const navData = {
      ...headerData,
      crumbs: data?.navigationData?.crumbs,
    }

    return (
      <>
        {!hideHeader && <Navigation {...navData} />}
        {children}
        <Footer {...footerData} />
      </>
    )
  } catch (error) {
    console.error('Failed to fetch navigation:', error)
    notFound()
  }
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
