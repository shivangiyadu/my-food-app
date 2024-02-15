
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantCard ,{withLabelPromoted} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");
  
  const RestaurantCardPromoted=withLabelPromoted(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
      return(
          <>
            <h1>Looks like you are offline!! Please check your internet status</h1>                
          </>        
      )      
  }
  if (filteredRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant.."
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 bg-green-200 m-4 rounded-lg text-lg"
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-slate-200 rounded-lg"
          onClick={() => {
            // Filter logic
            const filteredList = filteredRestaurant.filter(
              (res) => res.data.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
       <Link
        key={restaurant.data.id} 
        to ={"/restaurants/"+restaurant.data.id}>
          {
            restaurant.data.promoted ? (
             <RestaurantCardPromoted resData={restaurant}/>) : 
             (<RestaurantCard resData={restaurant}/>)
          }     
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

