import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Layeout from "./Components/Layeout/Layeout.jsx";
import About from "./Components/About/about.jsx";
import Notfound from "./Components/Notfound/Notfound.jsx";
import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import OurWork from "./Components/OurWork/OurWork.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layeout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "ourwork", element: <OurWork /> },
      { path: "*", element: <Notfound /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
