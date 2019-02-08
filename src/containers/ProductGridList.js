import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import Grid from "@material-ui/core/Grid";

class ProductGridList extends Component {
  listProducts() {
    return this.props.products
      .filter(p => !this.props.filter || this.props.filter === p.gender)
      .map((p) => (
           <ProductCard product={p} />
         
      ));
  }

  // componentDidMount(){
  //   console.log(this.props.match.params.gender)
  // }

  // thereAreProducts() {
  //   return this.props.products.length > 0;
  // }

  render() {
    return (
      <Grid
          container item xs={12} spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
        {/* {this.thereAreProducts() ? this.listProducts() : "No products!"} */}
        {this.props.showLoader ? "Cargando productos..." : "We couldn't find any products"}
      </Grid>
    );
  }
}

export default ProductGridList;
