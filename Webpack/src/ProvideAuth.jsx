

///El contexto global de la aplicaicon
const authContext = createContext();

//suscribe a el authcontex
function useAuth() {
    return useContext(authContext);
}

/// El componente que abraza a todos los que necesitan autenticacion
export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

////////////////////////////logica falsa de autenticacion
const fakeAuth = {
    isAuthenticated: false,
    signin(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};


///Crea un objeto con estado 
function useProvideAuth() {
    const [user, setUser] = useState(null);



    const signin = (callback) => 
    {
        let fn =() => {
            setUser("user");
            callback();
            };

        return fakeAuth.signin(fn);
    };

    const signout = callback => {
        return fakeAuth.signout(() => {
            setUser(null);
            callback();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

  //////////////////////////////////////////////////////////////