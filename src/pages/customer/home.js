// libraries
import * as React from "react";

// components
import HeaderNavigation from "../../components/customer/headerNavigation";
import FeaturedProducts from "../../components/customer/featuredProducts";
import CategoriesShoes from "../../components/customer/categories/shoes";
import CategoriesWatches from "../../components/customer/categories/watches";
import CategoriesCaps from "../../components/customer/categories/caps";
import CategoriesBags from "../../components/customer/categories/bags";
import CategoriesShirts from "../../components/customer/categories/shirts";
import CategoriesEyewear from "../../components/customer/categories/eyewear";
import CategoriesPerfume from "../../components/customer/categories/perfume";
import CategoriesSeeAll from "../../components/customer/categories/seeAll";
import ProductCard from "../../components/customer/productCard";
import Space from "../../components/customer/space";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

function Home() {
  // put the state here
  return (
    <Grid>
      <Cell span={12}>
        <Space value="2rem" />
        <HeaderNavigation />

        {/* featured products */}
        <Space value="2.5rem" />
        <p style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
          Featured Products
        </p>
        <FeaturedProducts />
        <Space value="3rem" />
      </Cell>

      <Cell span={12}>
        <p style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
          Categories
        </p>
      </Cell>

      {/* categories */}
      <Cell span={3}>
        <CategoriesShoes />
      </Cell>
      <Cell span={3}>
        <CategoriesWatches />
      </Cell>
      <Cell span={3}>
        <CategoriesCaps />
      </Cell>
      <Cell span={3}>
        <CategoriesBags />
      </Cell>
      <Cell span={12}>
        <Space value="1rem" />
      </Cell>
      <Cell span={3}>
        <CategoriesShirts />
      </Cell>
      <Cell span={3}>
        <CategoriesEyewear />
      </Cell>
      <Cell span={3}>
        <CategoriesPerfume />
      </Cell>
      <Cell span={3}>
        <CategoriesSeeAll />
        <Space value="3rem" />
      </Cell>

      <Cell span={12}>
        <p style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
          Categories
        </p>
      </Cell>

      <Cell span={3}>
        <ProductCard />
      </Cell>
    </Grid>
  );
}

export default Home;
