import LandingHome from "../pages/LandingHome";
import pb from "../api/pocketbase.config";
import { Navigate } from "react-router-dom";

export default function IsLoggin() {
    
    const isLoggedIn = pb.authStore.isValid;
    if (isLoggedIn) {
        return <Navigate to="/home" />
    }
    return <LandingHome/>
}