import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Login from "./src/Components/loginFrom.js";
import Sign from "./src/Components/signUp.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const App = () => {

    return (

        <Fragment>
            <div>
                <Outlet />
            </div>

        </Fragment>
    )
};



const AppRouter = createBrowserRouter([


    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Sign />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />)