import { CDN_URL } from "../utills/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  // console.log(resData);
  return (
    <div className=" w-80  p-4  m-4 h-[94%] bg-white shadow-2xl rounded-xl hover:bg-orange-100 hover:shadow-transparent ">
      <img
        className="rounded-xl w-full h-56 "
        alt="IMG"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="m-2 p-2 w-[94%] ">
        <h3 className=" py-4 text-lg w-full font-bold">{name}</h3>
        <h5 className="w-full">{cuisines.join(",")}</h5>
        <h5>{avgRating}</h5>
        <h5>₹{costForTwo}FOR TWO</h5>
        <h5>{sla?.slaString}</h5>
      </div>
    </div>
  );
};

// Higher-order Component;
 
// export const  withPromation = (RestaurantCard) =>{
//   return (props) =>{
//     return (
//       <div>
//         <label className="absolute bg-black text-stone-50">Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }


export default RestaurantCard;
