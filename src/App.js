import ProjectLayout from "./Project/ProjectLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Output from "./Project/Output";
import Navbar1 from "./Project/Navbar1";

function App() {

  let routerObj = createBrowserRouter([
    {
      path:'/',
      element:<ProjectLayout/>
    },
    {
      path:'/output',
      element:<Output/>
    }
  ])


  return (
    
    <div>
      <div>
        <Navbar1/>
      </div>
      <div>
        <RouterProvider router={routerObj}/>  
      </div>
    </div>
  );
}

export default App;
