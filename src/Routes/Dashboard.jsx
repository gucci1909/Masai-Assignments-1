import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import { AppContext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";

function Dashboard() {
  const { authState, logoutUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [x,setX] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const handlePageChange = (value) => {
    setPage(value);
  };
  const limit = 10;
  console.log(page);
  const fetching = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}`
      );
      const data12 = await res.json();
      setData(data12.data);
      setX(data12.data);
      setTotalCount(data12.totalPages);
      setLoading(false);
    } catch (error) {}
  };
  const handleFilter = async(value)=>{
    if(value===""){
      setData(x);
    }
    else{
      const res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?filter=${value}&limit=${limit}`
      );
      const data12 = await res.json();
      setData(data12.data);
      setTotalCount(data12.totalPages);
    }
  }
  
  useEffect(() => {
    fetching(page);
  }, [page]);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" onChange={(e)=>{handleFilter(e.target.value)}}>
          <option  value="" >All</option>
          <option  value="fine_dining" >Fine Dining</option>
          <option  value="ethnic" >Ethnic</option>
          <option  value="fast_food">Fast Food</option>
          <option  value="casual_dining" >Casual Dining</option>
          <option value="cafe">Cafe</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <Loader />}
        {<RestaurantTable data={data} />}
      </div>
      <br />
      <div data-testid="pagination-container">
        {
          <Pagination
            totalPages={totalCount}
            currentPage={page}
            handlePageChange={handlePageChange}
          />
        }
      </div>
    </div>
  );
}

export default Dashboard;
