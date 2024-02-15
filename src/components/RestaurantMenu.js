
import { useState } from "react";
import useRestMenuInfo from "../utils/useRestMenuInfo";
import RestaurantCategory from "./RestaurantCategory";
 import Shimmer from "./Shimmer";
 import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const restMenu = () =>{
       
    const { resId } = useParams();
    const dummy="dummy data";
    console.log(resId);

    const restinfo = useRestMenuInfo(resId)

    const [showIndex,setShowIndex]=useState(null);

    if(restinfo === null) return  < Shimmer />;
       
    const {itemCards} = 
    restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || restinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

     const {name} = restinfo?.data?.cards[0]?.card?.card?.info;
     const{text} = restinfo?.data?.cards[0]?.card?.card;
     const{city,cuisines,costForTwoMessage} = restinfo?.data?.cards[2]?.card?.card?.info || restinfo?.data?.cards[0]?.card?.card?.info;
     
     console.log(restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
     const categories=restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    return(
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl ">{name}</h1>
                    <p className="font-bold text-lg">
                        {cuisines.join(",")}-{costForTwoMessage}
                    </p>
                    {categories.map((category,index)=>(
                        //controlled component
                    <RestaurantCategory
                    key={category?.card?.card.title}
                     data={category?.card?.card}
                     showItems={index=== showIndex? true :false}  
                     setShowIndex={()=>setShowIndex(index)}
                     dummy={dummy}
                     />))} 
                            
        </div>
    )
}
export default restMenu;
