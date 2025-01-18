import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import router-related methods
import { store } from "./assets/Store/Store"; // Import Redux store
import Navbar from "./Components/Layout/Layout"; // Import Navbar component
import HomePage from "./Components/HeroSection/HomePage"; // Import HomePage component
import Servicehome from "./Components/ServiceSection/Service/Servicehome";


function App() {
  // Create the router using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Navbar />, // Navbar will be the main layout
      children: [
        {
          path: "", // This is the default route under the root path "/"
          element: <HomePage /> // HomePage will be rendered here
        },
        {
          path: "/Servicehome", 
          element: <Servicehome /> 
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* Redux provider wrapping the Router */}
      <Provider store={store}>
        <RouterProvider router={router} /> {/* RouterProvider will manage routes */}
      </Provider>
    </div>
  );
}

export default App;
