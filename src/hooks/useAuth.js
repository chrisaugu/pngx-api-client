import { useContext } from "react";
import { AuthContext } from "../contexts/AppContext";

export const useAuth = () => useContext(AuthContext);