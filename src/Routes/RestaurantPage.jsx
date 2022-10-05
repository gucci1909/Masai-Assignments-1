import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
function RestaurantPage() {
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState({});
  const [value,setValue] = useState("type");
  const fetching = async ()=>{
    setLoading(true);
    try {
      const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
      const data = await res.json();
      console.log(data.data);
      setData(data.data);
      setValue(data.data.type);
      setLoading(false);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
   fetching();

  },[])
  const capital = (str)=>{
    const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" ");
  }
  console.log(value);

  if (loading) {
    return <Loader />;
  }
  return (
   <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" src={data.image} width={"100%"} alt={data.name}/>
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{capital(value.replace("_"," "))}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
