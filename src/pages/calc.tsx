import { NextPage } from "next"
import { useMemo, useState } from "react"
import styled from "styled-components"

import { Layout } from "~/components/Layout"

const calc = (values: string[]) =>
  values.reduce((total: number, current: string) => total + Number(current), 0)

const CalcPage: NextPage = () => {
  const [values, setValues] = useState<string[]>(["0", "0", "0", "0"])
  const total = useMemo(() => calc(values), [values])

  const handleChange = (value: string, index: number) => {
    setValues((current) => {
      const newValues = [...current]
      newValues[index] = value
      return newValues
    })
  }

  return (
    <Layout title="Calc">
      <h1>Calc</h1>
      <p>This is the Calc page</p>
      <form>
        <$ul>
          {values.map((value, index) => (
            <li key={index}>
              <input
                type="text"
                name="number${index}"
                value={value}
                onChange={(e) => handleChange(e.currentTarget.value, index)}
              />
              <input type="button" name="check${index}" value="Check" />
            </li>
          ))}
        </$ul>
      </form>
      <div>合計: {total}</div>
    </Layout>
  )
}

const $ul = styled("ul")`
  list-style-type: none;
  padding: 0;
`

export default CalcPage
