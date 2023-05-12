import "./scss/app.scss";
import Header from "./components/header/Header";
import PostsItems from "./pages/posts-items/PostsItems";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import axios from "axios";
import Loader from "./components/loader/Loader";

function App() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisibleMenu, setIsVisible] = useState(false);
  const [searchField, setSearchField] = useState("");

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsVisible(false));

  const visibleMobailMenu = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );

        setPostsData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPost();
  }, []);
  const searchItems = (str) => {
    setSearchField(str);
  };

  const searchCartItems = postsData.filter((cart) => {
    return (
      cart.autor.toLowerCase().includes(searchField.toLowerCase()) ||
      cart.date.toLowerCase().includes(searchField.toLowerCase()) ||
      cart.tags.toLowerCase().includes(searchField.toLowerCase()) ||
      cart.title.toLowerCase().includes(searchField.toLowerCase()) ||
      cart.text.toLowerCase().includes(searchField.toLowerCase())
    );
    //Можно циклом перебрать все свойтсва обьектов и найти нужные, но тут мы пойдем по всей свойствам, даже которые не хотим проверять (по типу ссылки на изображения)
    // for (let key in cart) {
    //   return cart[key].toLowerCase().includes(searchField.toLowerCase());
    // }
  });

  return (
    <div className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className={`${"mobile_menu"} ${isVisibleMenu ? "show" : ""}`}
            ref={ref}
          >
            <MobileMenu visibleMobailMenu={visibleMobailMenu} />
          </div>
          <div className={isVisibleMenu ? "menu_activ" : ""}>
            <Header
              visibleMobailMenu={visibleMobailMenu}
              searchItems={searchItems}
            />
            <PostsItems
              postsData={postsData}
              searchCartItems={searchCartItems}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
