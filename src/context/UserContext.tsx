import React, { useState, ReactNode, createContext } from 'react';

interface Props {
  children: ReactNode;
}

type User = {
  username: string;
  password: string;
};

interface UserContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<Partial<UserContextInterface>>({});

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
