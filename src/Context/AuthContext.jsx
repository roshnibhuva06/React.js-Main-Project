import { createContext, useState } from "react";


export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [token, setoken] = useState(null)
    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    )
}
