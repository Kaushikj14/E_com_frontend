import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import Dashboard from "./Components/Dashboard";
import CreateProductForm from './Components/CreateProductForm.jsx'
import ProductsTable from "./Components/ProductsTable.jsx";
import OrdersTable from "./Components/OrdersTable.jsx";
import CustomersTable from "./Components/CustomersTable.jsx";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <CreateIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargestScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  // console.log(menu);
  

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100%"
      }}
    >
      {/* {isLargestScreen && <Toolbar />} */}
      <List>
        {/* {menu.map((item, index) => {
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItemButton>

            <ListItemText>{item.name}</ListItemText>
          </ListItem>;
        })} */}
        {menu.map((item) => (
  <ListItem
    key={item.name}
    disablePadding
    onClick={() => navigate(item.path)}
  >
    <ListItemButton>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItemButton>
  </ListItem>
))}

      </List>

      <List>
        
          <ListItem
        disablePadding >
            <ListItemButton>
              <ListItemIcon>
                  <PersonIcon/>
                </ListItemIcon>

                <ListItemText>
                  Account
                </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    // <div className="relative">
      <div className="relative flex h-[100vh]   ">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300 h-full fixed top-0">
          {drawer}
        </div>


          <div className="w-[85%] h-full ml-[15%]">
              <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/product/create" element={<CreateProductForm />}></Route>
                  <Route path="/products" element={<ProductsTable />}></Route>
                  <Route path="/orders" element={<OrdersTable />}></Route>
                  <Route path="/customers" element={<CustomersTable />}></Route>


              </Routes>
          </div>
      </div>
    // </div>
  );
};

export default Admin;
