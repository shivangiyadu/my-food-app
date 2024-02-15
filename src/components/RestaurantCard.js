import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";
import UserContext from "../utils/UserContext";

const RestaurantCard =(props)=>{
    const {resData}=props; 
    const {loggedInUser}=useContext(UserContext);
    const {
        cloudinaryImageId
          ,name,
          avgRating,
          cuisines,
          costForTwo,
          deliveryTime
        }=resData?.data

    console.log(props);
    return (
        <div className="m-4 p-4 w-[260px] rounded-lg bg-slate-200 hover:bg-orange-100 " 
       // style={{backgroundColor:"#f0f0f0"
        //}}
        >
            <img 
            className=" rounded-lg"
            src={CDN_URL+cloudinaryImageId}
            alt ="res-logo"/>
            <div className="res-font">
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo/100}For Two</h4>
            <h4>{deliveryTime}minutes</h4>
            <h4>User : {loggedInUser}</h4>
            </div>

      </div>
    )
}

export const withLabelPromoted=(RestaurantCard)=>{

  return (props) =>{
    return <div>
       <lable className="absolute bg-black text-white m-2 p-2">Promoted</lable>
       <RestaurantCard {...props} />
    </div>

  }

}
export default RestaurantCard;