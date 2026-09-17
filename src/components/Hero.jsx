import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { tokens } from "../theme.js";
import { profile, metrics } from "../data/resumeData.js";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        pt: { xs: 16, md: 20 },
        pb: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* faint background wordmark, purely decorative */}
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: -10, md: -40 },
          right: { xs: -40, md: -20 },
          fontFamily: "'Fraunces', serif",
          fontSize: { xs: 160, md: 320 },
          color: tokens.line,
          opacity: 0.5,
          zIndex: 0,
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        R
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={rise}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: tokens.primary,
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  HR &amp; Talent Acquisition · Phagwara, India
                </Typography>
              </motion.div>

              <motion.div variants={rise}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: 44, sm: 58, md: 72 },
                    lineHeight: 1.04,
                    color: tokens.ink,
                    mb: 3,
                  }}
                >
                  Reva Thakur
                </Typography>
              </motion.div>

              <motion.div variants={rise}>
                <Typography
                  sx={{
                    fontSize: { xs: 19, md: 22 },
                    color: tokens.inkSoft,
                    maxWidth: 560,
                    lineHeight: 1.55,
                    mb: 5,
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {profile.tagline}
                </Typography>
              </motion.div>

              <motion.div variants={rise}>
                <Stack
                  direction="row"
                  divider={
                    <Box
                      sx={{
                        width: "1px",
                        backgroundColor: tokens.line,
                        my: 0.5,
                      }}
                    />
                  }
                  spacing={{ xs: 3, sm: 5 }}
                  sx={{ maxWidth: 520 }}
                >
                  {metrics.map((m) => (
                    <Box key={m.label}>
                      <Typography
                        sx={{
                          fontFamily: "'Fraunces', serif",
                          fontSize: { xs: 26, md: 32 },
                          color: tokens.primary,
                          lineHeight: 1,
                        }}
                      >
                        {m.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 12.5,
                          color: tokens.inkSoft,
                          mt: 0.7,
                          maxWidth: 130,
                        }}
                      >
                        {m.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 340,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <Box
                  component="svg"
                  viewBox="0 0 340 340"
                  aria-hidden
                  sx={{
                    position: "absolute",
                    top: -18,
                    left: -18,
                    width: "calc(100% + 36px)",
                    height: "calc(100% + 36px)",
                    zIndex: 0,
                  }}
                >
                  <circle
                    cx="170"
                    cy="170"
                    r="160"
                    fill="none"
                    stroke={tokens.primary}
                    strokeWidth="1.4"
                    strokeDasharray="4 7"
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "50%",
                    overflow: "hidden",
                    aspectRatio: "1 / 1",
                    border: `3px solid ${tokens.cream}`,
                    boxShadow: "0 18px 40px rgba(22,35,28,0.18)",
                  }}
                >
                  <Box
                    component="img"
                    src={profile.photo}
                    alt="Portrait of Reva Thakur"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 6,
                    right: -10,
                    backgroundColor: tokens.primary,
                    color: tokens.cream,
                    borderRadius: "50%",
                    width: 84,
                    height: 84,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    zIndex: 2,
                    boxShadow: "0 10px 24px rgba(47,93,80,0.35)",
                  }}
                >
                  <Typography sx={{ fontSize: 11.5, lineHeight: 1.25, px: 1.2 }}>
                    MBA — HR &amp; Marketing
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{ display: "flex", justifyContent: "center", marginTop: 56 }}
      >
        <Stack alignItems="center" spacing={0.5} sx={{ color: tokens.inkSoft }}>
          <Typography sx={{ fontSize: 12.5 }}>Scroll</Typography>
          <ArrowDownwardRoundedIcon fontSize="small" />
        </Stack>
      </motion.div>
    </Box>
  );
}
