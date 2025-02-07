import React, { useEffect } from "react";

("use client");

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import  AuthModel from "../../../Auth/AuthModel";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../StateRedux/Auth/Action";




const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "Branded Girl Sweater",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/736x/3e/fd/60/3efd60f57ef3c160833468b96b3c4289.jpg",
          imageAlt:
            "Models sitting infront in creamy Sweater.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/474x/4a/cc/6a/4acc6a2c4a2884db5f240971de7c03e3.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Sarees", href: "#" },
            { name: "Panties", href: "#" },
            { name: "Bra's", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Raymonds", href: "#" },
            { name: "Vimal", href: "#" },
            { name: "Adidas", href: "#" },
            { name: "Nike", href: "#" },
            { name: "Puma", href: "#" },
            { name: "Reebok", href: "#" },
            { name: "Red Chief", href: "#" },
            { name: "Jaguar", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "100% Woolen Hoodie",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/736x/90/17/e3/9017e38d82b153415672712831b024b2.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Stylish White Shirt",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/736x/6d/93/ad/6d93adcfbc12b259ff7f6d731cf1a9c7.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Kurta", href: "/men/Clothing/kurta" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Manyawer", href: "#" },
            { name: "Pathani", href: "#" },
            { name: "Sex Items", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Raymonds", href: "#" },
            { name: "Vimal", href: "#" },
            { name: "Adidas", href: "#" },
            { name: "Nike", href: "#" },
            { name: "Puma", href: "#" },
            { name: "Reebok", href: "#" },
            { name: "Red Chief", href: "#" },
            { name: "Jaguar", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

export default function Navigation() {

  const [open, setOpen] = useState(false);
  const [anchorEl , setAnchorEl] = useState(false);
  const [openAuthModel , setOpenAuthModel] = useState(false);

  const openUserMenu = Boolean(anchorEl);

  const { auth , cart } = useSelector(store => store)

  const jwt = localStorage.getItem("jwt");

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useDispatch();
  
  const handleUserClick = (event) =>{
    setAnchorEl(event.currentTarget);
  }

  const handleCloseUserMenu = (event) =>{
    setOpenAuthModel(false);
  }

  const handleOpen = () =>{
    setOpenAuthModel(true);
  }

  const handleClose = () =>{
    setOpenAuthModel(false);
  }


  const handleCategoryClick = (category , section , item , close) =>{
    navigate('/?${category.id}/${section.id}/${item.id}')
    close();
  }


useEffect(()=>{

  if(jwt){
    dispatch(getUser(jwt));
  }

 if( location.pathname === "/login" || location.pathname === "/register" ){
  navigate(-1)
 }

},[jwt, auth.jwt])


useEffect(()=>{

    if(auth.user){
      handleClose();
    }

  }, [auth.user])

const handleLogout= ()=>{
  dispatch(logout())
  handleCloseUserMenu()
  localStorage.clear();
}



  return (
    <div className="bg-white ">
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-50 lg:hidden  "
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto w-100 px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img alt="" src="/ShowNOW.png" className="h-14 w-auto" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-50">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li 
                                        key={item.name} 
                                        className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                            onClick={()=>{
                                              handleCategoryClick(
                                                category,
                                                section,
                                                item,
                                                close
                                              )
                                            }}
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center z-50">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 z-50">
                  {
                    auth.user?.firstName ? (
                      <div>
                          <Avatar
                           className="text-white"
                           onClick = {handleUserClick}
                           aria-haspopup = "true"
                           aria-controls={open ? "basic-menu": undefined }
                           aria-expanded = {open ? "true" : undefined } 
                           sx={{
                            bgcolor:"rgb(145,85,253)",
                            color:"white",
                            cursor:"pointer"
                           }}
                          >
                         {auth.user?.firstName[0].toUpperCase()   }
                         
                          </Avatar>
                          
                             <Menu
                              id="basic-menu"
                              open={openUserMenu}
                              anchorEl={anchorEl}
                              onClose={handleCloseUserMenu}
                              MenuListProps={{
                                "aria-labelledby":"basic-button",
                              }}
                            >
                              <MenuItem   onClick={handleCloseUserMenu} >
                               Profile                           
                              </MenuItem>
                              <MenuItem    >
                               My Orders                           
                              </MenuItem>
                              <MenuItem  onClick={handleLogout}   >
                               Logout                           
                              </MenuItem>

                            </Menu>                         
                      </div>
                    ):(  
                      <Button 
                      onClick={handleOpen}
                      className="text-sm font-semibold text-gray-900 hover:text-gray-900"
                      >
                        Login Now
                      </Button>
                    )
                  }
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-blue-500 hover:text-red-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="size-6"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-red-500 group-hover:text-gray-800">
                     2
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModel  handleClose={handleClose}  open = {openAuthModel}      />
      
    </div>
  );
}
