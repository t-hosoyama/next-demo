import Link from "next/link"
import React from "react"
import styled from "styled-components"

export const Breadcrumbs: React.FC = () => {
  return (
    <$Navigation>
      <Link href="/" passHref>
        <$Link>Home</$Link>
      </Link>
      <Link href="/about" passHref>
        <$Link>About</$Link>
      </Link>
      <Link href="/users" passHref>
        <$Link>Users</$Link>
      </Link>
      <Link href="/api/users" passHref>
        <$Link target="_blank">Users API</$Link>
      </Link>
    </$Navigation>
  )
}

const $Navigation = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
`

const $Link = styled.a`
  &:not(:first-child) {
    margin-left: 10px;
  }
`
