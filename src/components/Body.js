import RestaurantCard, { withPromation } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/userOnlineStatus";
const Body = (props) => {
  // state variable -

  const [listOfRestaureants, setListOfRestaurents] = useState([]);
  const [fliterRestaurant, setFliterRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState([]);
  // const RestaurantCardWithPromoted = withPromation(RestaurantCard);
  useEffect(() => {
    fatchData();
  }, []);
  const fatchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    // console.log(json);
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFliterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  //conditional Rendering
  //   if(listOfRestaureants.length === 0){
  //       return(<Shimmer/>)
  // };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return <h1>Looks Yore Offline !!!! Please check the Your Internet</h1>;

  return listOfRestaureants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-between p-4 m-4 items-center">
        <div className="p-4 m-4 ">
          <input
            className="p-4 m-4 rounded-xl"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 text-white px-4 p-4 rounded-xl font-medium text-xl"
            onClick={() => {
              console.log(searchText);
              const fliterRestaurant = listOfRestaureants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(fliterRestaurant);
              setFliterRestaurant(fliterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 my-11 px-10 py-4 text-white font-medium text-xl rounded-xl "
          onClick={() => {
            // filter logic  here
            const fliterList = listOfRestaureants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(fliterList);
            setListOfRestaurents(fliterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap m-3">
        {fliterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* {restaurant.info.promoted ? (
              <RestaurantCardWithPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
             <RestaurantCard resData={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
