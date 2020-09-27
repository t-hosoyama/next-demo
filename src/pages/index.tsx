import { NextPage } from "next"
import styled from "styled-components"

import { Layout } from "~/components/Layout"
import { color, url } from "~/utils/style"

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <$Title>Hello Next.js 👋</$Title>
      <$Description>Next.js のデモ</$Description>
    </Layout>
  )
}

export default IndexPage

const $Title = styled.h1`
  color: ${color.black}c4;
  &::before {
    content: ${url("/assets/images/nico.gif")};
  }
`

const $Description = styled.p`
  color: ${color.inkBlack};
`
