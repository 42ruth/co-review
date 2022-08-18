export interface UserContext {
  userState: {
    isLogin: boolean;
    token: string;
    user: UserType;
  };
  // eslint-disable-next-line no-unused-vars
  login: (user: UserType, token: string) => void;
  logout: () => void;
}

export interface UserType {
  id?: number;
  blocked?: boolean;
  confirmed?: boolean;
  email?: string;
  githubId?: string;
  username?: string;
  profileImageUrl?: string;
  provider?: string;
  createdAt?: string;
  updatedAt?: string;
}
