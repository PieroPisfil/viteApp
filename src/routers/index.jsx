import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { ProtectedRoute } from "../components/utils/ProtectedRoute";
import IsLoggin from "../components/IsLoggin";
import pb from "../api/pocketbase.config";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IsLoggin/>,
        errorElement: <NotFound/>,
    },
    {
        element: <ProtectedRoute isAllowed={pb.authStore.isValid}/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/home",
                element: <Home/>,
            },    
        ]
    }
]);