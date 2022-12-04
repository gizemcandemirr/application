import { useEffect, useState } from "react";

function useAuth({ user }) {
    console.log(user)
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(false)
    }, [user])

    return isAuth;
}
export default useAuth;