import styles from './App.module.css'
import "./global.css"

import { Header } from './components/header/Header'
import { Form } from './components/Form/Form'
import { Table } from './components/Table/Table'


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
