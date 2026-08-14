const safeEnv = (value?: string, defaultValue?: string) => value || defaultValue || ''

const clientConfig = {
  publicUrl: safeEnv(process.env.NEXT_PUBLIC_DOMAIN),
  akamaiPath: safeEnv(process.env.AKAMAY_PATH),
}

export type ClientConfig = typeof clientConfig

export default clientConfig
