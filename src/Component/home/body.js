// eslint-disable-next-line
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LProductCard from "../Product/LProduct";
import { TopDeal } from "../Product/Topdeals";
const data = [
  {
    id: 1,
    product_id: "1",
    Products: {
      id: 1,
      name: "Apple",
      image: "apple.png",
      qntity: [
        {
          id: 4,
          quantity: 1,
          base_price: 32,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 5,
          quantity: 2,
          base_price: 54,
          discount: 32,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 6,
          quantity: 5,
          base_price: 65,
          discount: 50,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 2,
    product_id: "2",
    Products: {
      id: 2,
      name: "Banana",
      image: "banana.webp",
      qntity: [
        {
          id: 1,
          quantity: 2,
          base_price: 23,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 2,
          quantity: 1,
          base_price: 32,
          discount: 23,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 9,
          quantity: 3,
          base_price: 32,
          discount: 11,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 6,
    product_id: "3",
    Products: {
      id: 3,
      name: "Water Millon",
      image: "product_image__2021-03-25-16-45-26.png",
      qntity: [
        {
          id: 3,
          quantity: 3,
          base_price: 32,
          discount: 24,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 7,
          quantity: 3,
          base_price: 23,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 8,
          quantity: 5,
          base_price: 12,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 9,
    product_id: "18",
    Products: {
      id: 18,
      name: "Baby Corn",
      image: "Baby-corn.jpg",
      qntity: [
        {
          id: 50,
          quantity: 1,
          base_price: 20,
          discount: 2,
          unit: {
            id: 3,
            full_name: "Pices",
            short_name: "pcs",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 51,
          quantity: 2,
          base_price: 40,
          discount: 4,
          unit: {
            id: 3,
            full_name: "Pices",
            short_name: "pcs",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 52,
          quantity: 3,
          base_price: 60,
          discount: 5,
          unit: {
            id: 3,
            full_name: "Pices",
            short_name: "pcs",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 10,
    product_id: "63",
    Products: {
      id: 63,
      name: "Gilodi",
      image: "DESI_GILODI-270x360.jpg",
      qntity: [
        {
          id: 108,
          quantity: 1,
          base_price: 50,
          discount: 5,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 11,
    product_id: "8",
    Products: {
      id: 8,
      name: "Button Mushroom",
      image: "product_image__2021-03-25-16-48-08.webp",
      qntity: [
        {
          id: 28,
          quantity: 1,
          base_price: 100,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 29,
          quantity: 2,
          base_price: 200,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
        {
          id: 30,
          quantity: 3,
          base_price: 300,
          discount: 12,
          unit: {
            id: 1,
            full_name: "Kilogram",
            short_name: "Kg",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
  {
    id: 12,
    product_id: "78",
    Products: {
      id: 78,
      name: "Coriander",
      image: "coriander-270x360.jpg",
      qntity: [
        {
          id: 80,
          quantity: 100,
          base_price: 30,
          discount: 14,
          unit: {
            id: 2,
            full_name: "Gram",
            short_name: "g",
            __typename: "Unit",
          },
          __typename: "ProductsQuantityOptions",
        },
      ],
      __typename: "Products",
    },
    __typename: "TopDeals",
  },
];
const getAllProduct = gql`
  query {
    Product: get_allProduct {
      id
      name
      image
      qntity {
        id
        quantity
        base_price
        discount
        unit {
          id
          full_name
          short_name
        }
      }
    }
  }
`;
const Body = () => {
  const [products, setProducts] = useState([]);
  const { networkStatus, called, loading, data } = useQuery(getAllProduct);
  useEffect(() => {
    // setShowloader(true);
    if (networkStatus === 7) {
      console.log("data.get_allProduct", data.get_allProduct);
      setProducts(data.Product);
      // setShowloader(false);
    }
  }, [networkStatus]);
  return (
    <div>
      <img
        src="amaparibaBanner4.webp"
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <Grid
        container
        style={{
          marginTop: "20px",
          background: "white",
          padding: "10px",
        }}
      >
        {products.map((item) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            style={{
              display: "flex",
              marginBottom: "15px",
              justifyContent: "center",
            }}
          >
            <LProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Body;
