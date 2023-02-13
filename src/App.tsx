import "./global.css"
import { Route, Routes  ,BrowserRouter as Router } from "react-router-dom"
import ToDoListContent from "./page/ToDoListContent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ToDoListContent />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
