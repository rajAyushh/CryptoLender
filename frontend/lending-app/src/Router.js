import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Error404 from "./pages/404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path: '',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path : '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element : <Signup />
    }
])

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
}