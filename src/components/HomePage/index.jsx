import React from "react";
import Menu from "../Menu";
import Card from "../UI_Kits/Card";
import CategoryItem from "./Category/CategoryItem";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Menu />
      <Card
        image="https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f"
        name="Hoodie đẹp lắm nè mọi người ơi"
      />
      <CategoryItem
        image="https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f"
        title="Hoodie"
      />
    </div>
  );
}
