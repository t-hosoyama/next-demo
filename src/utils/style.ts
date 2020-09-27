import { bustCache } from "~/utils/url"

export const color = {
  white: "#ffffff",
  black: "#000000",
  inkBlack: "#333"
}

export const url = (url: string) => {
  return () => `url(${bustCache(url)})`
}
