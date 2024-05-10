import IntlProvider from "../intl/IntlProvider"
import Main from "../main/Main"

const App = () => {
  return (
      <IntlProvider>
        <Main />
      </IntlProvider>
  )
}

export default App
