import ItemsList from "./ItemList";

const RestaurantCategory = ({ data }) => {
//   console.log(data);

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 my-5 bg-white m-auto shadow-2xl p-4 rounded-xl text-xl cursor-pointer ">
      <div className="flex justify-between font-bold" >
        <span>
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>

        <ItemsList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
