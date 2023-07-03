export interface User {
  email: string;
  password: string;
}

export class FbAuthResponse {
  idToken: string | undefined;
  expiresIn: string | undefined;
}

export class Post {
  id?: string;
  title: string | undefined;
  text: string | undefined;
  author: string | undefined;
  date: Date | undefined;
}
