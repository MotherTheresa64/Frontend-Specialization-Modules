type NestedComponentProp = {
  children: React.ReactNode;
};

const NestedComponent: React.FC<NestedComponentProp> = ({ children }) => {
  return <div>{children}</div>;
};

export default NestedComponent;
