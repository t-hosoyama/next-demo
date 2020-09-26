import { setConfig } from "next/config"

import nextConfig from "/next.config"
import { url } from "~/utils/style"

beforeEach(() => {
  setConfig(nextConfig)
})

test("url", () => {
  const styleUrl = url("/assets/images/test.png")()
  expect(styleUrl).toMatch(/^url\(.+\?cc=\d+\)$/)
})
