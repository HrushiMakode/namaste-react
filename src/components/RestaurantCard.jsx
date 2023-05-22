import { RES_LOGO_BASE_URL } from "../utils/constant";

export const RestaurantCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo , minDeliveryTime } =
        resData.data;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                src={`${RES_LOGO_BASE_URL}/${cloudinaryImageId}`}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join()}</h4>
            <h4>{avgRating}</h4>
            <h4>₹ {costForTwo / 100} for two </h4>
            <h4>{minDeliveryTime} mins</h4>
        </div>
    );
};