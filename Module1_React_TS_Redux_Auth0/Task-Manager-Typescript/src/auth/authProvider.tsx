import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AuthProviderWithNavigate = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;
  const redirectUri = window.location.origin + "/callback";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || "/");
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithNavigate;
