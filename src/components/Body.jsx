import { useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([...resList]);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            res => res.data.avgRating < 4.2
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(res => (
                    <RestaurantCard key={res.data.uuid} resData={res} />
                ))}
            </div>
        </div>
    );
};
