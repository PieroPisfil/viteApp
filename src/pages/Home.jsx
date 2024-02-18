import pb from "../api/pocketbase.config";
import styled from "styled-components"
import useLogout from "../hooks/auth/useLogout";
import useVerified, {requestVerification} from "../hooks/auth/useVerified";
import { useNavigate  } from "react-router-dom";
export default function Component() {
    const logout = useLogout();
    const navigate = useNavigate();
    const {data: isVerified} = useVerified();

    function logout2() {
        logout();
        // setIsLoggedIn(false);
        navigate("/");
    }

    return (<Container>
        <h1>Home</h1>
        <>Dashboard List</>
        <h1>Logged in: {pb.authStore.model?.username}</h1>
        <p> {isVerified ? `Email verified` : "email not verified"}</p>
         {!isVerified && <button onClick={requestVerification} >Send verification email</button>}
         <button onClick={logout2}>Logout</button>
    </Container>);
}

const Container = styled.div`

`