import Link from "next/link";
import React, { useEffect, useState } from "react";

const Bookmarks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = window.localStorage.getItem("bookmarks");
    setData(JSON.parse(data));
  }, []);
  return (
    <div>
      <div className="bg-primary">
        <ul className="flex justify-end space-x-8 p-5 text-white font-[500] text-[14px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </div>
      <h1>Welcome to Bookmarks</h1>
      {data?.map((item) => {
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
            <a href={item.url} target="_blank" rel="noreferrer">
              Details
            </a>
            <h1>{item.category}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmarks;
