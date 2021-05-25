import { authContext } from "./contex/contex";
import { useProvideAuth } from "./contex/contexCreator";

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

