import style from '../src/App.module.css'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <div className={style.app}>
      <Nav />
      <div className={style.main}>
      <Main />
      </div>
    </div>
  )
}

export default App
