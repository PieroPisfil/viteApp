import styled from "styled-components";
import Auth from "../components/Auth";
import { useState } from "react";
export default function LandingHome() {
  const [toLogin, setToLogin] = useState(true);

  function changeForm() {
    setToLogin(!toLogin);
  }

  return (
    <Container>
      <div>
        <h1>App to play secret friend </h1>
      </div>
      <div>
        <div>
            {toLogin ? <Auth /> : <>Register Form</>}
        </div>
        <div>
            <a onClick={changeForm}>{toLogin ?  "New Account Register"  : "I have an account"} </a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
