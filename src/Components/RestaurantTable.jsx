import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {
  const capital = (str)=>{
    const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" ");
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((el)=>(
            <RestaurantCard name={el.name} id={el.id} price_starts_from={el.price_starts_from} type={capital(el.type.replaceAll("_"," "))} rating={el.rating} />
          ))
        /* <RestaurantCard /> */}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
