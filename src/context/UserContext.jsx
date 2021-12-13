import { useContext, createContext, useState } from 'react';

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user, setUser] = useState('')

    return (
        <UserContext.Provider values={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
const useUsers = () => {
    const context = useContext(UserContext)
    if (context === null){
        throw new Error('useUsers must be defined within a UserContext Provider')
    }
}
export { UserProvider, useUsers }
