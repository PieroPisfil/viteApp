
import pb from "../../api/pocketbase.config";
// import {useState} from "react";

export default function useLogout() {
    // const [dummy, setDummy] = useState(0);
    function logout() {
        pb.authStore.clear();
        // setDummy(Math.random())
    }
    // dummy*4
    return logout
}