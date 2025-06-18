import type { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface AuthProviderConfig {
  children: ReactNode;
}

interface AppState {
  returnTo?: string;
}

export const useAuthProvider = ({ children }: AuthProviderConfig) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!(domain && clientId && redirectUri)) {
    console.error("Missing Auth0 environment variables.");
    return null;
  }

  const onRedirectCallback = (appState?: AppState) => {
    const returnTo = appState?.returnTo || window.location.pathname;
    navigate(returnTo);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
