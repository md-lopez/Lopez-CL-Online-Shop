import classes from "./AvailableClothes.module.css";
import Card from "../Layout/UI/Card";
import ClothesItem from "./ClothesItem/ClothesItem";

const DUMMY_CLOTHES = [
  {
    id: "m1",
    availableSizes: ["X", "L", "XL", "XXL"],
    isFreeShipping: true,
    price: 599,
    sku: 85525157,
    style: "White T-Shirt",
    title: "Cropped Stay Groovy Off-White",
    firstImg: "images/productImages/8552515751438644-1-product.webp",
    secondImg: "images/productImages/8552515751438644-2-product.webp",
    cartImg: "images/productImages/8552515751438644-1-cart.webp"
  },
  {
    id: "m2",
    availableSizes: ["X", "ML", "L"],
    isFreeShipping: true,
    price: 450,
    sku: 39876704,
    style: "Wine",
    title: "Basic Cactus White T-shirt",
    firstImg: "images/productImages/39876704341265610-1-product.webp",
    secondImg: "images/productImages/39876704341265610-2-product.webp",
    cartImg: "images/productImages/39876704341265610-1-cart.webp"
  },
  {
    id: "m3",
    availableSizes: ["XL"],
    isFreeShipping: false,
    price: 1150,
    sku: 91979075,
    style: "Tony Hawk",
    title: "Skater Black Sweatshirt",
    firstImg: "images/productImages/9197907543445676-1-product.webp",
    secondImg: "images/productImages/9197907543445676-2-product.webp",
    cartImg: "images/productImages/9197907543445676-1-cart.webp"
  },
  {
    id: "m4",
    availableSizes: ["M", "ML"],
    isFreeShipping: true,
    price: 1399,
    sku: 51498472,
    style: "Tule",
    title: "Black Tule oversized",
    firstImg: "images/productImages/51498472915966370-1-product.webp",
    secondImg: "images/productImages/51498472915966370-2-product.webp",
    cartImg: "images/productImages/51498472915966370-1-cart.webp"
  },
  {
    id: "m5",
    availableSizes: ["S", "XS"],
    isFreeShipping: true,
    price: 549,
    sku: 12064273,
    style: "Really Cool T-shirt",
    title: "Black Batman T-Shirt",
    firstImg: "images/productImages/12064273040195392-1-product.webp",
    secondImg: "images/productImages/12064273040195392-2-product.webp",
    cartImg: "images/productImages/12064273040195392-1-cart.webp"
  },
  {
    id: "m6",
    availableSizes: ["X", "L", "XL"],
    isFreeShipping: true,
    price: 549,
    sku: 10686354,
    style: "The Zuck",
    title: "Plain Blue T-Shirt",
    firstImg: "images/productImages/10686354557628304-1-product.webp",
    secondImg: "images/productImages/10686354557628304-2-product.webp",
    cartImg: "images/productImages/10686354557628304-1-cart.webp"
  },
  {
    id: "m7",
    availableSizes: ["X", "L", "XL", "XXL"],
    isFreeShipping: true,
    price: 549,
    sku: 11033926,
    style: "Surf's up!",
    title: "Loose Black T-shirt",
    firstImg: "images/productImages/11033926921508488-1-product.webp",
    secondImg: "images/productImages/11033926921508488-2-product.webp",
    cartImg: "images/productImages/11033926921508488-1-cart.webp"
  },
  {
    id: "m8",
    availableSizes: ["X", "L", "XL", "XXL"],
    isFreeShipping: true,
    price: 549,
    sku: 18644119,
    style: "White T-shirt",
    title: "Ringer Hall Pass",
    firstImg: "images/productImages/18644119330491310-1-product.webp",
    secondImg: "images/productImages/18644119330491310-2-product.webp",
    cartImg: "images/productImages/18644119330491310-1-cart.webp"
  },
];

const AvailableClothes = () => {
  const productList = DUMMY_CLOTHES.map((product) => (
    <ClothesItem
      key={product.id}
      id={product.id}
      name={product.title}
      style={product.style}
      sku={product.sku}
      price={product.price}
      shipping={product.isFreeShipping}
      sizes={product.availableSizes}
      firstImg={product.firstImg}
      secondImg={product.secondImg}
      cartImg={product.cartImg}
    />
  ));

  return (
    <section className={classes.wrapper}>
      <Card>
        <p className={classes.productCount}> 0 Product(s) found</p>
        <ul className={classes.clothes}>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableClothes;
