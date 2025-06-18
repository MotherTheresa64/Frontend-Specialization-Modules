import { useAuth0 } from "@auth0/auth0-react";
import { Container, Image, Spinner } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner animation="border" />;

  return (
    isAuthenticated && (
      <Container className="mt-5 text-center">
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <Image src={user?.picture} alt={user?.name} roundedCircle width={120} />
      </Container>
    )
  );
};

export default Profile;
