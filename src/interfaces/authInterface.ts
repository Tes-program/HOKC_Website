export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  email: string;
  password: string;
}

export interface TokenPayload {
  access: {
    token: string;
    expires: Date;
  };
  refresh: {
    token: string;
    expires: Date;
  };
}
