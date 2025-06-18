import { useAuth0 } from "@auth0/auth0-react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Container className="mt-5 text-center">
      <h1>Welcome to Lesson 5</h1>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()} variant="primary">
          Log In
        </Button>
      ) : (
        <Button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          variant="danger"
        >
          Log Out
        </Button>
      )}
    </Container>
  );
};

export default Home;
