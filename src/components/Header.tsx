import { Button, Flex } from "antd";
import { FaCircleUser } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import menuImg from "../assets/Group 36.png";
import logoImg from "../assets/Group 53.png";
import favorite from "../assets/favorites.png"
import "./style.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <Flex gap="medium">
      <Flex gap="medium" className="header-item">
        <div>
          <img src={menuImg} style={{ width: "20px" }} />
        </div>

        <nav>
          <Flex gap="medium">
            <li> <Link to="/">HOME </Link></li>
            <li> <Link to="/about">ABOUT</Link> </li>
            <li> <Link to="/contacts">CONTACTS</Link> </li>
          </Flex>
        </nav>
      </Flex>

      <div className="header-item" style={{textAlign: "center"}}> 
        <Link to="/"><img src={logoImg} style={{ width: "20px" }} /></Link>
      </div>
      <Flex className="header-item" gap="medium" justify="flex-end"> 
        <div>
          <img src={favorite} className="favorite-img"/>
        </div>

        <Flex>
          <Button className="cart-button">Cart</Button> 
          <LuShoppingBag className="icons"/>
        </Flex>
        
        <div><FaCircleUser className="icons"/></div>
      </Flex>
    </Flex>
  );
};

export default Header;
