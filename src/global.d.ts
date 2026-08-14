declare global {
  interface Window {
    utag_data: Record<string, any>
    tealium_data2track: Record<string, any>
    utag: Record<string, any>
    TealiumConsentPrivacyLink: () => void
    TealiumTermsOfUseLink: () => void

    locatorTenancy: Record<string, any>

    _dl: any
    _trackAnalytics: (a) => void
  }
}

export {}
