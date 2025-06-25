// React 2 - Week 1

// 4. Build a Responsive Navbar with links to various pages
"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu"; // Icons must still be imported separately
import Link from "next/link"; // Next.js Link for navigation
import { useState } from "react";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  // Functions to handle the hamburger menu
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget); // Opens the menu by setting the anchorEl to the element that triggers the event
  const handleMenuClose = () => setAnchorEl(null); // Closes the menu ny setting the anchorEl to null

  const isMobile = useMediaQuery("(max-width:600px)"); // Uses useMediaQuery to check if the screen width is less than 600px.

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1976d2", boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          My Website
        </Typography>
        {/* show/hide menu items based on the screen size */}
        {isMobile ? (
          <>
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon style={{color: "#fff",}}/>
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/home">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/form">Sign Up</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
            // Clicking a menu item or link navigates the user to the relevant page
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              href="/home"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Contact
            </Link>
            <Link
              href="/form"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Sign Up
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
