import { fnLogin } from "../reducer/loginReducer";

export const loginData = (userInfo) =>{

  return (dispatch) =>{

    dispatch(fnLogin(userInfo));

  }

}