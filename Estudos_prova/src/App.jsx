import './App.css'
import ChangeTheme from './components/ChangeTheme'
import ChangeColorInput from './components/ChangeColorInput'
import LoginScreen from './components/LoginScreen'
import ListRendering from './components/ListRendering'

function App() {

  return (
    <>
      <h1 className='titlePage'>ATIVIDADE 05 - Desenvolvimento de interfaces com React.js</h1>

      <hr />
      <ChangeTheme></ChangeTheme>
      <hr />
      <ChangeColorInput></ChangeColorInput>
      <hr />
      <LoginScreen></LoginScreen>
      <hr />
      <ListRendering></ListRendering>
      <hr />

    </>
  )
}

export default App
