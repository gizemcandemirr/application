import { useEffect, useState } from "react";

const useAuth = ({ user }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (user) {
            return setIsAuth(!isAuth);
        }
    }, [user])

    return isAuth;
}

export default useAuth;
