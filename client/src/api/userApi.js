import axios from "axios";
import { fnUserData } from "../reducer/userReducer";

export const UserData = (userInfo) =>{

  return (dispatch) =>{
  
        axios({
  
          method: "get",
          url: `http://127.0.0.1:8000/member/${userInfo.id}`,
  
        }).then((result) => {

          console.log(result.data);

          dispatch(fnUserData(result.data[0]));

        });


  }

}