import { createContext } from 'react';
import { UserContext } from 'types/userTypes';

export const userContext = createContext<null | UserContext>(null);
