import { useContext } from "react"
import { authContext } from "../Context/Authprovider"

const useAuth = () => {
    return useContext(authContext);
}

export default useAuth;