// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase/config.js";
// import { signOut } from "firebase/auth";

// const pages = [
//   { name: "Home", url: "/" },
//   { name: "Blog", url: "/blog" },
// ];


// function Navbar({ user }) {
//   const logoutHandler = async () => {
//     console.log("logout handler is workign..");

//     try {
//       const userLogout = await signOut(auth);
//     } catch (error) {
//       console.log("Error aya");
//     }
//   };

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);


//   const settings = [
//   { name: "Profile", handler: () => {} },
//   { name: "Account", handler: () => {} },
//   { name: "Dashboard", handler: () => {} },
//   { name: "Logout", handler: logoutHandler },
// ];


//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" className="bg-amber-800">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" },
//            mr: 1 , color: "brown"}} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             Blog Application
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: "center" }}>
//                     {page.name}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Link to={`${page.url}`}>
//                 <Button
//                   key={page.name}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page.name}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting.name} onClick={setting.handler}>
//                   <Typography sx={{ textAlign: "center" }}>
//                     {setting.name}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;



import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  BookOpen,
  PenTool,
  Sun,
  Moon,
} from "lucide-react";

function Navbar({
  currentTab,
  setCurrentTab,
  isDarkMode,
  setIsDarkMode,
  textColor,
  textMuted,
  cardBorder,
}) {
  const navItems = [
    { label: "Home", tab: "home" },
    { label: "Articles", tab: "articles" },
    { label: "About Us", tab: "about" },
    { label: "Write", tab: "write" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        zIndex: 20,
        pt: 2.5,
        pb: 1.5,
      }}
    >
<Stack
  direction="row"
  alignItems="center"
  justifyContent="space-between"
  sx={{
    position: "relative",
    width: "100%",
  }}
>
  {/* Brand Logo */}
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    onClick={() => setCurrentTab("home")}
    sx={{
      cursor: "pointer",
      flexShrink: 0,
    }}
  >
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "14px",
        background:
          "linear-gradient(135deg, #4f46e5, #7c3aed)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 8px 20px rgba(79, 70, 229, 0.35)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05) rotate(-3deg)",
        },
      }}
    >
      <BookOpen size={24} color="#ffffff" />
    </Box>

    <Typography
      variant="h5"
      sx={{
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: textColor,
      }}
    >
      Nexus
      <Box
        component="span"
        sx={{ color: "#4f46e5" }}
      >
        Ink
      </Box>
    </Typography>
  </Stack>

  {/* Navigation */}
  <Stack
    direction="row"
    spacing={1}
    sx={{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: { xs: "none", md: "flex" },
      p: 0.6,
      borderRadius: "30px",
      background: isDarkMode
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.75)",
      backdropFilter: "blur(16px)",
      border: `1px solid ${cardBorder}`,
      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    }}
  >
    {navItems.map((item) => {
      const isActive = currentTab === item.tab;

      return (
        <Button
          key={item.tab}
          onClick={() => setCurrentTab(item.tab)}
          sx={{
            px: 2.5,
            py: 0.8,
            borderRadius: "20px",
            fontSize: "0.9rem",
            fontWeight: isActive ? 700 : 500,
            textTransform: "none",
            color: isActive ? "#ffffff" : textMuted,
            background: isActive
              ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
              : "transparent",
            boxShadow: isActive
              ? "0 4px 14px rgba(79,70,229,0.3)"
              : "none",
            transition: "all 0.25s ease",

            "&:hover": {
              color: isActive ? "#ffffff" : textColor,
              background: isActive
                ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                : "rgba(79,70,229,0.06)",
            },
          }}
        >
          {item.label}
        </Button>
      );
    })}
  </Stack>

  {/* RIGHT SIDE ACTIONS */}
  <Stack
    direction="row"
    spacing={1.5}
    alignItems="center"
    sx={{
      ml: "auto",
      flexShrink: 0,
    }}
  >
    <Tooltip
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
    >
      <IconButton
        onClick={() => setIsDarkMode(!isDarkMode)}
        sx={{
          p: 1.2,
          borderRadius: "12px",
          background: isDarkMode
            ? "rgba(255,255,255,0.08)"
            : "rgba(79,70,229,0.08)",
          color: isDarkMode
            ? "#facc15"
            : "#4f46e5",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "rotate(15deg)",
          },
        }}
      >
        {isDarkMode ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </IconButton>
    </Tooltip>

    <Button
      variant="contained"
      onClick={() => setCurrentTab("write")}
      startIcon={<PenTool size={18} />}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 700,
        px: 2.6,
        py: 1.1,
        background:
          "linear-gradient(135deg, #4f46e5, #7c3aed)",
        boxShadow:
          "0 10px 25px rgba(79, 70, 229, 0.3)",

        "&:hover": {
          background:
            "linear-gradient(135deg, #4338ca, #6d28d9)",
          transform: "translateY(-2px)",
          boxShadow:
            "0 12px 28px rgba(79, 70, 229, 0.4)",
        },

        transition: "all 0.3s ease",
      }}
    >
      Start Writing
    </Button>
  </Stack>
</Stack>


    </Container>
  );
}

export default Navbar;