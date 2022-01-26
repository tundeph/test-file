import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const itemsList = [
  { name: "Tunde" },
  { name: "Tola" },
  { name: "Tolu" },
  { name: "Bolaji" },
  { name: "Opeyemi" },
  { name: "Ajekiigbe" },
  { name: "Atoyebi" },
  { name: "Adubiobi" },
  { name: "Dipo" },
  { name: "Adeoye" },
  { name: "Olumide" },
  { name: "Olumide1" },
  { name: "Tunde1" },
  { name: "Tola1" },
  { name: "Tolu1" },
  { name: "Bolaji1" },
  { name: "Opeyemi1" },
  { name: "Ajekiigbe1" },
  { name: "Atoyebi1" },
  { name: "Adubiobi1" },
  { name: "Dipo1" },
  { name: "Adeoye1" },
  { name: "Olumide2" },
  { name: "Olumide3" },
];

function ReactInfiniteScroll() {
  const [count, setCount] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(itemsList.slice(0, 5));
  //console.log("hi", items);

  const fetchMoreData = () => {
    if (items.length >= itemsList.length) {
      setHasMore(false);
      return;
    }

    setCount(count + 5);
    setTimeout(() => {
      setItems([...items, ...itemsList.slice(count, count + 5)]);
    }, 2000);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={"Loading..."}
        endMessage={<b>End of Items </b>}
      >
        {items.map((item, index) => {
          return (
            <div key={index} className="rowList">
              {item.name}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default ReactInfiniteScroll;
