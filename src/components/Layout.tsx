import NextHead from "next/head"
import React from "react"

import { Breadcrumbs } from "./breadcrumbs"

type Props = {
  title: string
}

export const Head: React.FC<Props> = (props) => {
  const { title } = props
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title} | next-demo</title>
    </NextHead>
  )
}

export const Layout: React.FC<Props> = (props) => {
  const { children, title } = props
  return (
    <>
      <Head title={title} />
      <header>
        <Breadcrumbs />
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  )
}
