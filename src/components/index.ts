import { ProductCard as ProductCardHOC } from "./ProductoCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductoImage";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductoImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
