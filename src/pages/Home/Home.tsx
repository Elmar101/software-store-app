import "./homeStyle.css";
import { SearchOutlined } from "@ant-design/icons";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import { Flex, Input, Space } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

interface IState {
  data: Product[];
}

const Home = () => {
  const [state, setState] = useState<IState>({ data: [] });
  const [index, setIndex] = useState<{
    start: number,
    end: number
  }>({ 
    start: 0,
    end: 2
  });

  console.log(index)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log({ res });
      setState({
        ...state,
        data: res.data,
      });
    });
  }, []);

  const onForvard = () => {
    if(index.start === state.data.length || index.end === state.data.length) return;
    setIndex(prevIndex=> ({
      start: prevIndex.start+1,
      end: prevIndex.end + 1,
    }))
  }

  const onPrev = () => {
    if(index.start === 0) return;
    setIndex(prevIndex=> ({
      start: prevIndex.start - 1,
      end: prevIndex.end - 1,
    }))
  }

  return (
    <div className="mrg">
      <div>
        <div>MEN</div>
        <div>WOMEN</div>
        <div>KIDS</div>
        <div>
          <Space.Compact size="large">
            <Space.Addon>
              <SearchOutlined />
            </Space.Addon>
            <Input placeholder="search" />
          </Space.Compact>
        </div>
      </div>
      <Flex gap="large">
        <div className="cart">
          <div>
            <div>
              <h1>
                New <br />
                Collection
              </h1>
              <p>
                Summer <br /> 2024
              </p>
            </div>
            <Flex>
              <Flex
                style={{
                  background: "#D9D9D9",
                  width: "265px",
                  padding: "5px",
                }}
              >
                <div>Go To Shop</div>
                <div> ----- </div>
              </Flex>
              <div>
                <button onClick={onPrev}>
                  <MdArrowBackIosNew />
                </button>
                <button onClick={onForvard}>
                  <IoIosArrowForward />
                </button>
              </div>
            </Flex>
          </div>
        </div>

        {state?.data?.slice(index.start, index.end)?.map?.((item) => (
          <img className="img" src={item.image} />
        ))}
      </Flex>
    </div>
  );
};

export default Home;
