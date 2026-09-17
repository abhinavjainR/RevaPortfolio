import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme.js";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
        backgroundColor: scrolled ? "rgba(236,239,233,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? `1px solid ${tokens.line}` : "1px solid transparent",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: { xs: 68, md: 84 } }}
        >
          <Box
            onClick={() => handleNav("hero")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1.5px solid ${tokens.primary}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 15,
                  color: tokens.primary,
                }}
              >
                RT
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontSize: 17,
                letterSpacing: "-0.01em",
                display: { xs: "none", sm: "block" },
              }}
            >
              Reva Thakur
            </Typography>
          </Box>

          {!isMobile && (
            <Stack direction="row" spacing={4}>
              {NAV_ITEMS.map((item) => (
                <Typography
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="link-underline"
                  sx={{
                    fontSize: 14.5,
                    cursor: "pointer",
                    color: tokens.ink,
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)} aria-label="Open menu">
              <MenuIcon sx={{ color: tokens.ink }} />
            </IconButton>
          )}
        </Stack>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 260, backgroundColor: tokens.paper, padding: 3 },
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={3} sx={{ mt: 4 }}>
          {NAV_ITEMS.map((item) => (
            <Typography
              key={item.id}
              onClick={() => handleNav(item.id)}
              sx={{
                fontFamily: "'Fraunces', serif",
                fontSize: 22,
                cursor: "pointer",
                color: tokens.ink,
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
