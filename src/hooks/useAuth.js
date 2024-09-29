import { AuthContext } from "@contexts/AppContext";
import { useContext } from "react";

export const useAuth = useContext(AuthContext);