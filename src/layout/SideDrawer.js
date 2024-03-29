import {
  Avatar,
  Box, Drawer, Hidden, List, styled,
  Toolbar, Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

// icons & images
import { FaUserFriends } from "react-icons/fa";
import { GiHazardSign } from "react-icons/gi";
import { ImPieChart } from "react-icons/im";
import {
  RiClipboardFill, RiShoppingBag3Fill
} from "react-icons/ri";
import userAvatar from "../images/avatar_default.jpg";
import getMoreAvatar from "../images/illustration_avatar.png";

import CustomListItem from "../components/Drawer/CustomListItem";
import { drawerWidth } from "./DashboardLayout";

const NavDrawerStyle = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const LogoStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.green.darker,
  margin: 0,
}));

const UserCardStyle = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  backgroundColor: theme.palette.gray.light,
  margin: "12px",
  padding: "14px 12px",
  borderRadius: theme.spacing(1.5),
  textDecoration: "none",
  "& .MuiTypography-root": {
    marginLeft: theme.spacing(1.5),
  },
}));

const ListStyle = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const GetMoreStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray.lighter,
  margin: "40px 12px 16px",
  padding: "60px 12px 14px 12px",
  borderRadius: theme.spacing(1.5),
  textAlign: "center",
  position: "relative",

  "& img": {
    position: "absolute",
    top: 0,
    left: "50%",
    width: theme.spacing(12.5),
    transform: "translate(-40%, -40%)",
    transition: "all 0.3s ease-in",
  },
  "& h5": {
    margin: "10px 0",
  },
  "& a": {
    textDecoration: "none",
    fontWeight: 500,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.green.darker,
    display: "block",
    padding: "6px",
    borderRadius: "inherit",
    transition: "background 0.3s ease-in",
    boxShadow: "0px 5px 5px white",
    "&:hover": {
      backgroundColor: theme.palette.green.dark,
    },
  },

  "&:hover": {
    "& img": {
      transform: "translate(-40%, -50%)",
    },
  },
}));



// links for the side nav
const links = [
  {
    id: "L0",
    path: "/dashboard",
    icon: <ImPieChart />,
    title: "Dashboard",
  },
  { id: "L1", path: "/user", icon: <FaUserFriends />, title: "My Events" },
  {
    id: "L2",
    path: "/product",
    icon: <RiShoppingBag3Fill />,
    title: "All Events",
  },
  { id: "L3", path: "/blog", icon: <RiClipboardFill />, title: "Blog" },
  // { id: "L4", path: "/login", icon: <RiLoginCircleFill />, title: "Login" },
  // { id: "L5", path: "/register", icon: <FaUserPlus />, title: "Register" },
];

const SideDrawer = (props) => {
  const drawerContent = (
    <>
      {/* Logo */}
      <Toolbar>
        <LogoStyle variant="h6" component="h2">
          Evento Dash
        </LogoStyle>
      </Toolbar>

      {/* User Card */}
      <UserCardStyle to="/dashboard" onClick={props.onClose}>
        <Avatar
          src={userAvatar}
          alt="User Image"
        />

        <Typography variant="subtitle1" component="h3">
        khushbu Rajak
        </Typography>
      </UserCardStyle>

      {/* List of links */}
      <ListStyle>
        {links.map((el) => (
          <CustomListItem
            key={el.id}
            path={el.path}
            icon={el.icon}
            title={el.title}
            onClick={props.onClose}
          />
        ))}
      </ListStyle>

      {/* get more card */}
      <GetMoreStyle>
        <img src={getMoreAvatar} alt="avatar" />

        <Typography variant="h6" component="h4">
          Want App?
        </Typography>

        <Typography variant="body2" component="h5">
          For free
        </Typography>

        <a
          href="https://github.com/stw300cem/final-assignment-MILANydv.git"
          target="_blank"
          rel="noreferrer"
        >
          Download Here
        </a>
      </GetMoreStyle>
    </>
  );

  return (
    <NavDrawerStyle aria-label="Navigation Panel">
      {/* Hidden 01 for sm size */}
      <Hidden smUp implementation="css">
        <Drawer
          container={props.container}
          variant="temporary"
          //anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.toggleMenu}
          onClose={props.onClose}
          classes={{ paper: props.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          {/* Drawer Component */}
          {drawerContent}
        </Drawer>
      </Hidden>

      {/* Hidden 02 for big size*/}
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open classes={{ paper: props.drawerPaper }}>
          {drawerContent}
        </Drawer>
      </Hidden>
    </NavDrawerStyle>
  );
};

export default SideDrawer;
