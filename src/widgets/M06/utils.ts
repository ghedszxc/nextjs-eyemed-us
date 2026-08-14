export const dynamicTheme = (theme: string, globalTheme?: string) => {
  return theme || globalTheme || 'leaf'
}
