import getConfig from "next/config"

export const bustCache = (url: string) => {
  const { publicRuntimeConfig: { buildTime } } = getConfig()
  const delimiter = url.includes("?") ? '&' : '?'
  return `${url}${delimiter}cc=${buildTime}`
}
