import { NextPage } from "next"
import Link from "next/link"
import styled from "styled-components"
import Layout from "~/components/Layout"
import { color, url } from "~/utils/style"

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Hello Next.js 👋</Title>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)
export default IndexPage

const Title = styled.h1`
  color: ${color.inkBlack};
  &::before {
    content: ${url("/assets/images/nico.gif")};
  }
`
