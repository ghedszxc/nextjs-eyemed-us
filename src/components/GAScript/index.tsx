import Script from 'next/script'
import React from 'react'

const GAScript: React.FC<{ ga_id: string; lang: string; path: string[] }> = ({
  ga_id,
  lang = 'en-us',
  path = [],
}) => {
  if (!ga_id?.trim()) {
    return null
  }

  const crumbs = [lang, ...path]

  const scriptContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;d.head.appendChild(j);})(window,document,'script','dataLayer','${ga_id}');`

  const noScriptContent = `<iframe src="https://www.googletagmanager.com/ns.html?id=${ga_id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`

  const dataLayerDefined = `
/* Define data layer */
var _dl = { /*define data layer elements here*/ };
/* TMS-specific data layer requirements may go here... */
/*initialize _trackAnalytics*/
var _trackAnalytics = function(dl){console.log("fallback analytics" + dl)};
_dl = {
"site_hierarchy": ${JSON?.stringify(crumbs)}
}
`

  return (
    <>
      <Script
        id="gtm_Script"
        dangerouslySetInnerHTML={{ __html: scriptContent }}
        strategy="beforeInteractive"
      />
      <noscript dangerouslySetInnerHTML={{ __html: noScriptContent }} />
      <script dangerouslySetInnerHTML={{ __html: dataLayerDefined }}></script>
    </>
  )
}

export default GAScript
