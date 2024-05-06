import Time from '../time/Time'
import Circle from '../circle/Circle'
import Toolbar from '../toolbar/Toolbar'

import './Main.scss'

const Main  = () => {
  return (
    <main className="main">
      <Circle />
      <Time />
      <Toolbar />
    </main>
  )
}

export default Main
