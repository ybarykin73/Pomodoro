import { createIntl, createIntlCache } from "react-intl"
import messages from "./messages"

const cache = createIntlCache()

const setupIntl = (lang) => {
  const intl = createIntl({
    locale: lang,
    messages: {...messages[lang]}
  }, cache)

  return intl
}

export default setupIntl
