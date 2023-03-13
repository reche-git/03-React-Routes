import { useHistory, useLocation } from "react-router-dom";

const Products = () => {
  // let location = useLocation();
  // console.log(location);
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query);

  const LIMIT = 20;

  let start = parseInt(query.get("initiation")) || 1;
  let end = parseInt(query.get("ending")) || LIMIT;
  // console.log(start, end);

  let history = useHistory();
  // console.log(history);

  const handlePrev = (e) => {
    history.push({
      search: `?initiation=${start - LIMIT}&ending=${end - LIMIT}`,
    });
  };

  const handleNext = (e) => {
    history.push({
      search: `?initiation=${start + LIMIT}&ending=${end + LIMIT}`,
    });
  };

  return (
    <div>
      <h3>Products</h3>
      <p>
        Showing products from <b>{start}</b> to <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Back</button>}
      <button onClick={handleNext}>Forward</button>
    </div>
  );
};

export default Products;
