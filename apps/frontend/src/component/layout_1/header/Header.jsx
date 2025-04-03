"use client";

import { useState } from "react";  // Import useState for handling state
import { useEffect } from "react"; // Import useEffect if needed for initial fetch
import Link from "next/link";
import cx from "classnames";
import s from "./Header.module.scss";
import { navigationBarList } from "../../utils/constant";

function HeaderHome() {
  const navBarList = ["home", "org", "student"];

  // State to hold the fetched data
  const [data, setData] = useState(null);
  // State for loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API call function
  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state before each call
    try {
      const response = await fetch("http://localhost:3002/data"); // Replace with your backend API
      console.log(response);
      if (!response.ok) {
        throw new Error("Fail to fetch data.");
      }
      const result = await response.json();
      setData(result); // Set the fetched data to state
    } catch (error) {
      setError(error.message); // Set the error if the fetch fails
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  };

  return (
    <div className={cx(s.headerContainer)}>
      <div className={cx(s.navContainer)}>
        {navBarList &&
          navBarList.map((key) => {
            const navItem = navigationBarList[key];
            if (navItem) {
              return (
                <Link key={key} href={navItem.path} className={cx(s.navItem)}>
                  {navItem.name}
                </Link>
              );
            }
            return null;
          })}
      </div>

      {/* Start Button */}
      <button onClick={fetchData} className={cx(s.startButton)}>
        Start
      </button>

      {/* Loading State */}
      {loading && <p>Loading data...</p>}

      {/* Error State */}
      {error && <p>Error: {error}</p>}

      {/* Display fetched data */}
      {data && (
        <div className={cx(s.dataContainer)}>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HeaderHome;
