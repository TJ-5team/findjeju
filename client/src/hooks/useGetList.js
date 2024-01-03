import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetList(baseUrl){
  const [list, setList] = useState([]);
  useEffect(()=>{
    axios
    .get(baseUrl)
    .then(result => setList(result.data.response.body.items.item))
  }, [baseUrl]);
  return [list]
}