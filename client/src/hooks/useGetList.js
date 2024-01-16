import { useState, useEffect } from "react";
import axios from "axios";
import { WiCloudyGusts } from "react-icons/wi";

export default function useGetList(baseUrl) {
  const [list, setList] = useState([]);
  useEffect(() => {
    try {
      axios
      .get(baseUrl)
      .then(result => setList(result.data.response.body.items.item));
    } catch (error) {
      console.log(error);
    }
  }, [baseUrl]);
  return [list];
}
