import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import router-related methods
import { store } from "./assets/Store/Store"; // Import Redux store
import Navbar from "./Components/Layout/Layout"; // Import Navbar component
import HomePage from "./Components/HeroSection/HomePage"; // Import HomePage component

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
        // {
        //   path: "HomePage", // This can be an additional route like "/HomePage"
        //   element: <HomePage /> // HomePage will be rendered here as well
        // },
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
