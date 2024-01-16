import axios from "axios"
import { useEffect, useState } from "react"

export const useGetMember = () =>{

  const [userData, setUserData] = useState([]);

  useEffect(()=>{

    axios({

      method: 'get',
      url: 'http://192.168.50.31:8000/member/'

    }).then((result) => {

      setUserData(result.data);

    })

  },[])

  return userData

}