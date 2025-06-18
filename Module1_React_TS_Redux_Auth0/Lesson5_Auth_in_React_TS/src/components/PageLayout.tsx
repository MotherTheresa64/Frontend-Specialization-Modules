import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <main style={{ margin: "2rem", fontFamily: "sans-serif" }}>
      {children}
    </main>
  );
};

export default PageLayout;
