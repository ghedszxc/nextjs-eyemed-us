import Script from 'next/script'
import React from 'react'

const ClaripScript: React.FC = ({}) => {
  const scriptContent = `window.addEventListener("DOMContentLoaded", function() {
document.querySelector("a[href='https://eyemed.clarip.com/']")?.setAttribute("id", "clarip-do-not-sell-link");
});
var globalDnsDeployment = false;
var claripHost = "eyemed.clarip.com";
var claripCdnHost = "cdn.clarip.com";
var clientName = "eyemed";
var clientIdentifier = '45f867b58dd7be4686b6';`

  const newScriptContent = `var claripCdnHost = "cdn.clarip.com";
var claripClientName = "eyemed";
var claripCookieConsentHost = "eyemed.clarip.com";
var claripCookieManagerIdentifier = "fc89669cdbd4e32e661e";`
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.clarip.com/eyemed/donotsell/assets/css/donotsell-extended.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.clarip.com/eyemed/cookieconsent/assets/css/cookieconsent.min.css"
      />

      <Script
        src="https://cdn.clarip.com/eyemed/cookieconsent/assets/js/cookieconsent.min.js"
        strategy={'beforeInteractive'}
      ></Script>

      <Script id="clarip_script" strategy={'beforeInteractive'}>
        {scriptContent}
      </Script>
      <Script
        id="claript_block"
        strategy={'beforeInteractive'}
        src="https://cdn.clarip.com/eyemed/donotsell/assets/js/donotsell-block.min.js"
      ></Script>

      <Script id="new_clarip_script" strategy={'beforeInteractive'}>
        {newScriptContent}
      </Script>
      <Script
        src="https://cdn.clarip.com/eyemed/cookieconsent/assets/js/clarip-cookie-manager.min.js"
        strategy={'beforeInteractive'}
      ></Script>
    </>
  )
}

export default ClaripScript
