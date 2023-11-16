import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>

      {/* offered section */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert section */}
      <MenuCategory
        items={desserts}
        title="desserts"
        coverImg={dessertImg}
      ></MenuCategory>

      {/* pizza section */}
      <MenuCategory
        items={pizzas}
        title="pizzas"
        coverImg={pizzaImg}
      ></MenuCategory>

      {/* soup section */}
      <MenuCategory
        items={soups}
        title="soups"
        coverImg={soupImg}
      ></MenuCategory>

      {/* salad section */}
      <MenuCategory
        items={salads}
        title="salads"
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
