
import styled from 'styled-components'
import Auth from './components/Auth'
import pb from './api/pocketbase.config'

// import '@material/web/button/filled-button.js';
// import '@material/web/button/outlined-button.js';
// import '@material/web/checkbox/checkbox.js';
// import '@material/web/divider/divider.js';
// import '@material/web/chips/chip-set.js';
// import '@material/web/chips/assist-chip.js';
// import '@material/web/chips/filter-chip.js';
// import '@material/web/chips/input-chip.js';
// import '@material/web/chips/suggestion-chip.js';


function App() {

  // const signInOauth2 = async ({cookies, url, locals})=>{
  const signInOauth2 = async ( )=>{
    const response = await pb.collection('users').listAuthMethods();
    if(!response) {
      return {
        authProvdrs: '',
      }
    }
    const redirectUrl = "http://127.0.0.1:8091/redirect.html"
    const googleAuthProvider = response.authProviders.find((provider) => provider.name === 'google')
    // const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectUrl}`;
    
    // const state = googleAuthProvider.state;
    const verifier = googleAuthProvider.codeVerifier;
    // const codeChallenge = googleAuthProvider.codeChallenge;
    // // const codeChallengeMethod = googleAuthProvider.codeChallengeMethod;
    // throw redirect(302, authProviderRedirect);

    const params = new URL(window.location).searchParams;

    await pb.collection('users').authWithOAuth2Code(
      'google',
      params.get("code"),
      {verifier},
      redirectUrl,
  );
  }

  return (
      <Container>
        <div>
          <Auth/>
          <button onClick={signInOauth2}>
            Sign in Google
          </button>
          {/* <md-outlined-button>Back</md-outlined-button>
          <section>
            <p>Lorem ipsum...</p>
            <md-divider inset></md-divider>
            <p>Lorem ipsum...</p>
            </section>
            <md-checkbox touch-target="wrapper"></md-checkbox>
            <md-checkbox touch-target="wrapper" checked></md-checkbox>
            <md-checkbox touch-target="wrapper" indeterminate></md-checkbox>
          <md-filled-button>Next</md-filled-button>
          <md-chip-set>
            <md-assist-chip label="Assist"></md-assist-chip>
            <md-filter-chip label="Filter"></md-filter-chip>
            <md-input-chip label="Input"></md-input-chip>
            <md-suggestion-chip label="Suggestion"></md-suggestion-chip>
          </md-chip-set> */}
        </div>
        <route/>
      </Container>      
  )
}

const Container = styled.div`
  display: flex;
`
export default App
