import React from 'react'
import { Div_copyright, Text_copyright } from "../../style-components/Footer/Style"
const Footer = () => {
  return (
      <Div_copyright>
        &copy; {new Date().getFullYear()} Copyright{' '}
        <Text_copyright href='https://www.linkedin.com/in/neiderurbano08/'>
          Neider Urbano
        </Text_copyright>
      </Div_copyright>
  )
}

export default Footer