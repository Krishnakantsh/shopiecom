import React, { useEffect } from "react";

("use client");
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import Rating from '@mui/material/Rating';
import { Box, Button, Grid2, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import "./ProductDetailsCSS.css";
import { men_kurta_data } from "../../../Data/Mens_kurta";
import ProductCard from "../Product/ProductCard";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProdutById } from "../../../StateRedux/ProductState/Action";
import { store } from "../../../StateRedux/Store";
import { addItemToCart } from "../../../StateRedux/Cart/Action";




const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
 
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },

  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};


// const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState("M");
  
  const { products } = useSelector(store=>store)

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const handleAddToCart=()=>{

        const data = {pid:params.productid, size:selectedSize.name}

        dispatch(addItemToCart(data));

        navigate("/cart")
  }


  //  for find product by id ...............................

  useEffect(()=>{
       const data = {productid:params.productid}

       dispatch(findProdutById(data))

  }, [params.productid])



  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6 ">
        <nav aria-label="Breadcrumb w-full ">
          <ol
            role="list"
            className="mx-auto flex py-6  items-center space-x-2 px-4 sm:px-6 lg:px-10 "
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-lg font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}

            <li className="text-sm   ">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div  className="overflow-hidden rounded-lg min-w-[25rem] max-w-[30rem] max-h-[40rem] object-top shadow-lg"  >
              <img
                alt={"image"}
                src={products.producttt?.imageurl}
                className="w-full h-full object-cover object-top "
              />
            </div>
            
            

          </div>


          {/* Product info */}
          <div className="lg:col-span-1  max-h-auto max-w-2xl  px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24  ">
            <div className="lg:col-span-2 content-start lg:border-r lg:border-gray-200 lg:pr-8 ">
              <h1 className="text-2xl text-left font-bold tracking-tight text-gray-900 sm:text-3xl">
                   {products.producttt?.brand}
              </h1>
              <h1 className=" text-lg lg:text-xl text-gray-900 opacity-60  my-2 text-left pt-1 " >{products.producttt?.pname}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0  pt-3  ">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-5 " >

                <p className="font-semibold" > ₹ {products.producttt?.discountedPrice} </p>
                <p className="opacity-50 line-through" > ₹ {products.producttt?.price}</p>
                <p className="text-green-600 font-semibold " >{products.producttt?.discountPercent}% off </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">

                <div className="flex items-center space-x-3" >
                      <Rating name="read-only" value={4.5} readOnly />
                      <p className="opacity-70 text-sm text-black " >{products.producttt?.ratings.length} Ratings</p>
                      <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"  >{products.producttt?.reviews.length} Reviews</p>

                </div>
              </div>

              <form className="mt-10 h-fit flex flex-col items-start justify-between ">
            
                {/* Sizes */}
                <div className="w-full  mb-5 ">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Size</h3>
                
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              
                <Button   onClick={handleAddToCart}  variant="contained" className="flex justify-start text-bold text-white"    sx={{px:"2rem" , py:"1rem" }} >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 text-justify">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg text-left font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list"  className="list-disc text-left space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900 text-left ">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600 text-justify ">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section for reviews & rating .................................................. */}

        <section className="flex flex-col items-start text-black w-full border"    >
          <h1 className="font-semibold text-lg pb-4 text-black " >Recent Review & Rating </h1>

           <div className="p-5 border w-full reviewAndRating" >
           
           <div className="reviewAndRatingLeft">
           <div  className="space-y-5 text-left "   >
                     {[1,1,1,1].map(() => <ProductReviewCard/> ) }
                  </div>
           </div>

           <div className="reviewAndRatingright border border-black h-full flex items-start flex-col ">
           <h1 className="text-xl font-semibold pb-1"  >Product Ratings</h1>
                   
                   <div className="flex items-center  space-x-3"  >
                    <Rating  value={4.5} precision={0.5} readOnly />
                    <p className="opacity-60"  >65656 Ratings</p>
                   </div>


                   <Box  className="mt-5" >
                       <Grid2  container gap={2} alignItems="center" >
                           <Grid2 item xs={2}   >
                             <p  className="border border-success-900" >Pending Work </p>
                           </Grid2>
                           <Grid2 item  xs={7} >

                            <LinearProgress    value={40}  sx={{ bgcolor:"#d0d0d0 ", borderRadius:4, height:7  }}   color="success" variant="determinate" />

                           </Grid2>
                       </Grid2>
                   </Box>


           </div>



           </div>

        </section>
      

      {/*  similar products .............................................. */}

      <section className=" pt-10 flex flex-col items-start" >

        <h1 className="text-lg font-semibold lg:text-lg  text-black pt-10" >Similar Products</h1>

        <div className="flex flex-wrap space-y-5  gap-10 pt-10 "   >

          { men_kurta_data.map((item) => <HomeSectionCard  product={item} />  ) }

        </div>

      </section>


      </div>
    </div>
  );
}

export default ProductDetails;
