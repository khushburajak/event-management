import { Container, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Helmet } from "react-helmet";

// components
import FixedCartCounter from "../components/Product/FixedCartCount";
import ProductActionBar from "../components/Product/ProductActionBar";
import ProductList from "../components/Product/ProductList";

// style
const ContainerStyle = styled(Container)(({ theme }) => ({
  padding: 0,
  paddingTop: theme.spacing(2),

  // product header
  // h3
  "& .productHeader": {
    fontSize: 30,
    fontWeight: 500,
  },
}));

const Products = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Events | Evento</title>
      </Helmet>

      {/* Fixed counter for cart */}
      {/* <FixedCartCounter itemAmout="10" /> */}

      {/* main container */}
      <ContainerStyle maxWidth="lg">
        {/* Header */}
        <Typography variant="h3" className="productHeader">
          Events
        </Typography>

        {/* Action bar */}
        <ProductActionBar />

        {/* Products list */}
        <ProductList />
      </ContainerStyle>
    </>
  );
};

export default Products;
