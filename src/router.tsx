import { Route, Routes  ,BrowserRouter } from "react-router-dom"
import ToDoListContent from "./page/ToDoListContent";


function Router() {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ToDoListContent />} />
            </Routes>
          </BrowserRouter>
        </div>
      )
}

export default Router