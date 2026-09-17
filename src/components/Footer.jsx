import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { tokens } from "../theme.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ py: 4, backgroundColor: tokens.primaryDark }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
        >
          <Typography sx={{ fontSize: 13, color: "rgba(251,249,243,0.65)" }}>
            © {year} Reva Thakur. Built with care.
          </Typography>
          <Typography sx={{ fontSize: 13, color: "rgba(251,249,243,0.65)" }}>
            Phagwara, Punjab, India
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
