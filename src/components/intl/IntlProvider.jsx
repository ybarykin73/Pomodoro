import { RawIntlProvider } from "react-intl"

import LanguageContext from '../../context/languageContext'
import setupIntl from "../../intl/intlProvider"
import React from "react"

const IntlProvider = (props) => {
  const {
    children
  } = props

  const [language, setLanguage] = React.useState('en')
  const intl = setupIntl(language)

  return (
    <RawIntlProvider value={intl}>
      <LanguageContext.Provider value={{language, setLanguage}}>
        {children}
      </LanguageContext.Provider>
    </RawIntlProvider>
  )
}

export default IntlProvider
