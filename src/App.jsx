import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from "./pages/register/page";

function App() {

  const router = createBrowserRouter([
    {
        path: '/',
        element : <p>Home Router</p>
    },
    {
        path: '/register',
        element : <Register />
    },
])
  
  return (
    <>
      <h1>It is working</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
