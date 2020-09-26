import { NextPage } from "next"
import Link from "next/link"
import styled from "styled-components"

import Layout from "~/components/Layout"
import { color, url } from "~/utils/style"

const IndexPage: NextPage = () => {
  return (
    <$Container>
      <Layout title="Home | Next.js + TypeScript Example">
        <$Title>Hello Next.js 👋</$Title>
        <$Body>
          <Link href="/about">
            <a>About</a>
          </Link>
        </$Body>
      </Layout>
    </$Container>
  )
}

export default IndexPage

const $Container = styled.div`
  background-color: ${color.white};
`

const $Title = styled.h1`
  color: ${color.inkBlack};
  &::before {
    content: ${url("/assets/images/nico.gif")};
  }
`

const $Body = styled.p`
  color: ${color.inkBlack};
`
