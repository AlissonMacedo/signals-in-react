import './App.css'
import BadPerformance from './badPerformance'
import GoodPerformance from './goodPerformance'

const style = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8rem'

}

function App() {
  return (
      <div style={style}>
        <BadPerformance />
        <GoodPerformance />
      </div>
  )
}

export default App
