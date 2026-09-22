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


import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import {
  BookOpen,
  PenTool,
  Sun,
  Moon,
  Menu as MenuIcon,
  X,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";

function Navbar({
  isDarkMode,
  setIsDarkMode,
  textColor,
  textMuted,
  cardBorder,
  user,
}) {
  const navigate = useNavigate();

  const [profileAnchor, setProfileAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isProfileMenuOpen = Boolean(profileAnchor);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Articles",
      path: "/blog",
    },
    {
      label: "About Us",
      path: "/about",
    },
  ];

  // -----------------------------
  // PROFILE MENU
  // -----------------------------

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  // -----------------------------
  // LOGOUT
  // -----------------------------

  const handleLogout = async () => {
    try {
      await signOut(auth);

      handleProfileClose();
      setMobileOpen(false);

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // -----------------------------
  // NAVIGATION
  // -----------------------------

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  // -----------------------------
  // PROFILE DATA
  // -----------------------------

  const userImage = user?.photoURL || "";

  const userName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  const userInitial =
    userName?.charAt(0)?.toUpperCase() || "U";

  // -----------------------------
  // NAV LINK STYLE
  // -----------------------------

  const navLinkStyle = ({ isActive }) => ({
    padding: "8px 18px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none",

    color: isActive ? "#ffffff" : textMuted,

    background: isActive
      ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
      : "transparent",

    boxShadow: isActive
      ? "0 4px 14px rgba(79,70,229,0.3)"
      : "none",

    transition: "all 0.25s ease",

    whiteSpace: "nowrap",
  });

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP / MAIN NAVBAR */}
      {/* ================================================= */}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 100,
          pt: 2.5,
          pb: 1.5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: 58,

            display: "flex",
            alignItems: "center",

            gap: 2,
          }}
        >
          {/* ========================================= */}
          {/* LOGO */}
          {/* ========================================= */}

          <Box
            onClick={() => handleNavigation("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,

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
                  "0 8px 20px rgba(79,70,229,0.35)",

                transition: "transform 0.3s ease",

                "&:hover": {
                  transform: "scale(1.05) rotate(-3deg)",
                },
              }}
            >
              <BookOpen size={24} color="#ffffff" />
            </Box>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.35rem",
                },

                fontWeight: 800,

                letterSpacing: "-0.03em",

                color: textColor,
              }}
            >
              Nexus
              <Box
                component="span"
                sx={{
                  color: "#4f46e5",
                }}
              >
                Ink
              </Box>
            </Typography>
          </Box>

          {/* ========================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================================= */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              gap: 0.5,

              mx: "auto",

              p: 0.6,

              borderRadius: "30px",

              background: isDarkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.75)",

              backdropFilter: "blur(16px)",

              border: `1px solid ${cardBorder}`,

              boxShadow:
                "0 4px 20px rgba(0,0,0,0.03)",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={navLinkStyle}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          {/* ========================================= */}
          {/* RIGHT SIDE */}
          {/* ========================================= */}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              ml: "auto",
              flexShrink: 0,
            }}
          >
            {/* DARK MODE */}

            <Tooltip
              title={
                isDarkMode
                  ? "Light Mode"
                  : "Dark Mode"
              }
            >
              <IconButton
                onClick={() =>
                  setIsDarkMode(!isDarkMode)
                }
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

            {/* ===================================== */}
            {/* DESKTOP START WRITING */}
            {/* ===================================== */}

            <Button
              onClick={() =>
                navigate(
                  user
                    ? "/dashboard"
                    : "/login"
                )
              }
              startIcon={<PenTool size={18} />}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },

                borderRadius: "12px",

                textTransform: "none",

                fontWeight: 700,

                px: {
                  sm: 1.8,
                  md: 2.4,
                },

                py: 1.1,

                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",

                color: "#ffffff",

                boxShadow:
                  "0 10px 25px rgba(79,70,229,0.3)",

                "&:hover": {
                  background:
                    "linear-gradient(135deg,#4338ca,#6d28d9)",

                  transform:
                    "translateY(-2px)",

                  boxShadow:
                    "0 12px 28px rgba(79,70,229,0.4)",
                },

                transition: "all 0.3s ease",
              }}
            >
              Start Writing
            </Button>

            {/* ===================================== */}
            {/* PROFILE */}
            {/* ===================================== */}

            {user && (
              <>
                <Tooltip title={userName}>
                  <IconButton
                    onClick={handleProfileClick}
                    sx={{
                      p: 0.3,

                      border: isProfileMenuOpen
                        ? "2px solid #4f46e5"
                        : "2px solid transparent",

                      transition:
                        "all 0.2s ease",
                    }}
                  >
                    <Avatar
                      src={userImage}
                      alt={userName}
                      sx={{
                        width: 42,
                        height: 42,

                        background:
                          "linear-gradient(135deg,#4f46e5,#7c3aed)",

                        fontWeight: 700,
                      }}
                    >
                      {userInitial}
                    </Avatar>
                  </IconButton>
                </Tooltip>

                {/* PROFILE DROPDOWN */}

                <Menu
                  anchorEl={profileAnchor}
                  open={isProfileMenuOpen}
                  onClose={handleProfileClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        mt: 1.5,

                        minWidth: 220,

                        borderRadius: "16px",

                        p: 1,

                        border:
                          `1px solid ${cardBorder}`,

                        boxShadow:
                          "0 15px 40px rgba(0,0,0,0.15)",
                      },
                    },
                  }}
                >
                  {/* USER INFO */}

                  <Box
                    sx={{
                      px: 1.5,
                      py: 1,

                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: textColor,

                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userName}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: textMuted,

                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {user.email}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 0.5 }} />

                  {/* DASHBOARD */}

                  <MenuItem
                    onClick={() => {
                      handleProfileClose();
                      navigate("/dashboard");
                    }}
                    sx={{
                      borderRadius: "10px",
                      gap: 1,
                    }}
                  >
                    <LayoutDashboard size={18} />

                    Dashboard
                  </MenuItem>

                  {/* LOGOUT */}

                  <MenuItem
                    onClick={handleLogout}
                    sx={{
                      borderRadius: "10px",
                      gap: 1,

                      color: "#ef4444",
                    }}
                  >
                    <LogOut size={18} />

                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}

            {/* ===================================== */}
            {/* MOBILE MENU BUTTON */}
            {/* ===================================== */}

            <IconButton
              onClick={() =>
                setMobileOpen(true)
              }
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                p: 1,

                borderRadius: "12px",

                color: textColor,

                border:
                  `1px solid ${cardBorder}`,
              }}
            >
              <MenuIcon size={23} />
            </IconButton>
          </Stack>
        </Box>
      </Container>

      {/* ================================================= */}
      {/* MOBILE DRAWER */}
      {/* ================================================= */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
        PaperProps={{
          sx: {
            width: {
              xs: "82%",
              sm: 340,
            },

            background: isDarkMode
              ? "#0f172a"
              : "#ffffff",

            color: textColor,

            p: 2,
          },
        }}
      >
        {/* MOBILE HEADER */}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mb: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Box
              sx={{
                width: 38,
                height: 38,

                borderRadius: "11px",

                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BookOpen
                size={20}
                color="#ffffff"
              />
            </Box>

            <Typography
              sx={{
                fontWeight: 800,
                color: textColor,
              }}
            >
              Nexus
              <Box
                component="span"
                sx={{
                  color: "#4f46e5",
                }}
              >
                Ink
              </Box>
            </Typography>
          </Stack>

          <IconButton
            onClick={() =>
              setMobileOpen(false)
            }
            sx={{
              color: textColor,
            }}
          >
            <X size={23} />
          </IconButton>
        </Stack>

        <Divider />

        {/* MOBILE NAVIGATION */}

        <List sx={{ mt: 2 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() =>
                setMobileOpen(false)
              }
              style={({ isActive }) => ({
                textDecoration: "none",

                color: isActive
                  ? "#4f46e5"
                  : textColor,

                fontWeight: isActive
                  ? 700
                  : 500,
              })}
            >
              <ListItemButton
                sx={{
                  borderRadius: "12px",
                  mb: 0.5,
                }}
              >
                <ListItemText
                  primary={item.label}
                />
              </ListItemButton>
            </NavLink>
          ))}
        </List>

        {/* MOBILE START WRITING */}

        <Button
          fullWidth
          onClick={() =>
            handleNavigation(
              user
                ? "/dashboard"
                : "/login"
            )
          }
          startIcon={
            <PenTool size={18} />
          }
          sx={{
            mt: 1,

            py: 1.3,

            borderRadius: "12px",

            textTransform: "none",

            fontWeight: 700,

            color: "#ffffff",

            background:
              "linear-gradient(135deg,#4f46e5,#7c3aed)",
          }}
        >
          Start Writing
        </Button>

        {/* MOBILE USER */}

        {user && (
          <>
            <Divider
              sx={{ my: 2 }}
            />

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                px: 1,
                mb: 1.5,
              }}
            >
              <Avatar
                src={userImage}
                sx={{
                  width: 42,
                  height: 42,

                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",
                }}
              >
                {userInitial}
              </Avatar>

              <Box
                sx={{
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: textColor,

                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {userName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: textMuted,

                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>
            </Stack>

            <Button
              fullWidth
              startIcon={
                <LayoutDashboard
                  size={18}
                />
              }
              onClick={() =>
                handleNavigation(
                  "/dashboard"
                )
              }
              sx={{
                justifyContent:
                  "flex-start",

                px: 2,

                py: 1.2,

                mb: 0.5,

                borderRadius: "12px",

                textTransform: "none",

                color: textColor,
              }}
            >
              Dashboard
            </Button>

            <Button
              fullWidth
              startIcon={
                <LogOut size={18} />
              }
              onClick={handleLogout}
              sx={{
                justifyContent:
                  "flex-start",

                px: 2,

                py: 1.2,

                borderRadius: "12px",

                textTransform: "none",

                color: "#ef4444",
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Drawer>
    </>
  );
}

export default Navbar;