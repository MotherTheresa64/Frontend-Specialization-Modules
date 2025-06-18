// src/components/CallbackPage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Spinner } from "react-bootstrap";

const CallbackPage: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <PageLayout>
        <div style={{ color: "red", padding: "2rem", textAlign: "center" }}>
          <h2>⚠️ Authentication Error</h2>
          <p>{error.message}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <Spinner animation="border" variant="primary" />
        <h2 style={{ marginTop: "1rem" }}>Redirecting you to your account...</h2>
        <p>Please wait while we finalize your login.</p>
      </div>
    </PageLayout>
  );
};

export default CallbackPage;
