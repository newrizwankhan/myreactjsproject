const ItemsList = ({ items }) => {
  console.log(items);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="border border-b-2">
            <div
              key={item.card.info.id}
              className=" border-gray-200  "
            >
              <div className="text-left font-medium">
                <span>{item.card.info.name}</span>
              </div>
              <div className="text-left font-medium">
                <span>₹{item.card.info.price / 100}</span>
                <span>⭐{item.card.info.ratings.aggregatedRating.rating}</span>
              </div>
            </div>
            <div className="text-left  ">
              <span>{item.card.info.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
