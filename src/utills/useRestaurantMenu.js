import { MENU_API } from "../utills/contants";
import { useEffect, useState } from "react";


const useResataurantMenu = ( resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);

      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
      };

    return  resInfo;
}
export default useResataurantMenu;