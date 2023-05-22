import { LOGO_URL } from "../utils/constant";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={`${LOGO_URL}`}
                    alt="logo"
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Address</li>
                    <li>Contanct Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
