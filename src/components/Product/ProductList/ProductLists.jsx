import React from "react";
import "./ProductList.scss";
import ProductTile from "../ProductTile/ProductTile";

const itemsList = [
  {
    id: "shoes",
    name: "Shoes",
    pic: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Good for running and comfortable",
    rating: "4/5",
    detailDescription:
      "A very comfortable and relaxing. Can be used for jogging, running and as causal office wear as well",
  },
  {
    id: "glasses",
    name: "Sun glasses",
    pic: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Good shades",
    rating: "4.5/5",
    detailDescription:
      "Very cool and stylish shades. Good for sunny days and for driving.",
  },
  {
    id: "watch",
    name: "watch",
    pic: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Perfect for time",
    rating: "3.8/5",
    detailDescription:
      "A perfect watch, not too heavy not too light, just perfect. Good for keeping time",
  },
  {
    id: "laptop",
    name: "Laptop",
    pic: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Gets the work done",
    rating: "5/5",
    detailDescription:
      "A heavy duty laptop, with long lasting battery life. It will get the work done for you",
  },
  {
    id: "mobile",
    name: "mobile",
    pic: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Our latest and slimest",
    rating: "4.8/5",
    detailDescription:
      "Go mobile with our latest mobile. Amazing camera and long lasting battery.",
  },
  {
    id: "books",
    name: "books",
    pic: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    shortDesc: "Your forever companion",
    rating: "5/5",
    detailDescription:
      "Books never goes out of fashion. A good book is a man's best friend. Read it either to learn something new, or just for fun.",
  },
];

const ProductLists = () => {
  return (
    <div className="list">
      {itemsList.map((item, i) => (
        <ProductTile
          key={i}
          id={item.id}
          name={item.name}
          desc={item.shortDesc}
          image={item.pic}
        />
      ))}
    </div>
  );
};

export default ProductLists;
