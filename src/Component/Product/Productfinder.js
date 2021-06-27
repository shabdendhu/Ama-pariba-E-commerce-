import React, { useState, useEffect } from "react";
import { Dialog, Slide } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";
import { gql, useLazyQuery } from "@apollo/client";
const SearchProductQuery = gql`
query($name:String!){
  get_product_by_name(name:$name){
    id
    name
  }
}
`
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const SearchResultCard = ({ item }) => {
  return (
    <li
      key={item.id}
      style={{
        padding: "10px 15px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          marginLeft: "32px",
          color: "#5f5959",
          fontSize: "19px",
        }}
      >
        {item.name}
      </span>
      <button
        onClick={() => {
          // const searchName = item.product_name.replace(/ +/g, "");
          window.location.href = `/search-results?id=${item.id}?name=${item.name}`;
          // console.log(market);
        }}
        style={{
          position: "absolute",
          right: 0,
          margin: "0px 10px 0px 0px",
          border: "none",
          background: "#ffb100",
          outline: "none",
          padding: "5px",
          width: "105px",
          borderRadius: "7px",
        }}
      >
        SELECT
      </button>
    </li>
  );
};
const Productfinder = ({ openSearchDilog, onSelectItems }) => {
  const [open, setOpen] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sarchResultProducts, setSarchResultProducts] = useState([]);
  // const [searchResultRecipe, setSearchResultRecipe] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const [SearchProduct, SearchProductRes] = useLazyQuery(
    SearchProductQuery
  );
  useEffect(() => {
    if (searchText.length > 0) {
    //  setTimeout(() => {
      SearchProduct({
        variables: {
          name:searchText
        }
      })
    //  }, 100);
     
    }
  }, [searchText]);
  // eslint-disable-next-line
  console.log(SearchProductRes)
  useEffect(() => {
    if (SearchProductRes.data) {
      console.log(SearchProductRes.data.get_product_by_name)
      setSarchResultProducts(SearchProductRes.data.get_product_by_name)
    }
  }, [SearchProductRes.data]);
  useEffect(() => {
    setOpen(!open);
    // eslint-disable-next-line
  }, [openSearchDilog]);
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div>
          <div
            style={{
              margin: "10px 10px",
              position: "absolute",
              width: "94%",
              background: "white",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: "32px",
                flexDirection: "column",
                width: "-webkit-fill-available",
                padding: "10px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row " }}>
                <Search />
                <input
                  type="text"
                  placeholder="Type hear"
                  autoFocus
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "18px",
                    width: "100%",
                  }}
                />
                <span
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <Close />
                </span>
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  position: "relative",
                }}
              >
                {sarchResultProducts.length > 0 &&
                  searchText.length > 0 &&
                  sarchResultProducts.map((item) => (
                    <SearchResultCard item={item} />
                  ))}
                {/* {searchResultRecipe.length > 0 &&
                  searchText.length > 0 &&
                  searchResultRecipe.map((item) => (
                    <SearchResultCard item={item} />
                  ))} */}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
export default Productfinder;
