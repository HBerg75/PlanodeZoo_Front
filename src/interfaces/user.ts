export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    token: string;
    role: string
  }
  
  export interface RegisterForm {
    username: string;
    role: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface LoginForm {
    username: string;
    password: string;
  }
  
  export interface FormAccount {
    firstname: string,
    lastname: string,
  }