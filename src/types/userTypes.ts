export interface UserContext {
  userState: {
    isLogin: boolean;
    user: UserType;
  };
  // eslint-disable-next-line no-unused-vars
  login: (user: UserType) => void;
  logout: () => void;
}

export interface UserType {
  id?: number;
  userName?: string;
  email?: string;
  profileImage?: string;
}
