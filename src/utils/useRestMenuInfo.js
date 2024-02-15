import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// creating custom hook
const useRestMenuInfo = (resId) =>{
    const[restinfo, setRestinfo] = useState(null);
    // calling api 
    useEffect(() => {
        fetchData();

    },[])
    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        setRestinfo(jsonData)
    }; 
  return restinfo;
}

export default useRestMenuInfo;