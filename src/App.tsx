import styles from './App.module.css'
import "./global.css"

import { Header } from './components/header/Header'
import { Form } from './components/Form/Form'


function App() {

  return (
    <div>
      <Header />
      <div>
        <Form />
      </div>

    </div>
  )
}

export default App
