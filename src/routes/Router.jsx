import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main.Jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />
            },
        ]
    },
    {
        path: "/*",
        element: <div>Bhag!!</div>
    },
]);

export default router;