import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { tokens } from "../theme.js";
import { profile } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}` },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
];

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 12, md: 16 }, backgroundColor: tokens.primary, color: tokens.cream }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <Typography sx={{ fontSize: 13.5, color: tokens.accentSoft, fontWeight: 500, mb: 2 }}>
                Contact
              </Typography>
              <Typography
                component="h2"
                sx={{ fontSize: { xs: 34, md: 48 }, lineHeight: 1.1, mb: 3, color: tokens.cream }}
              >
                Hiring, or just want to talk shop?
              </Typography>
              <Typography sx={{ fontSize: 17, color: "rgba(251,249,243,0.78)", maxWidth: 440 }}>
                I'm open to HR and talent acquisition internships and roles. The fastest way to
                reach me is email — I read every message.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <Stack sx={{ borderTop: "1px solid rgba(251,249,243,0.25)" }}>
                {links.map((l) => (
                  <Box
                    key={l.label}
                    component="a"
                    href={l.href}
                    target={l.label === "LinkedIn" ? "_blank" : undefined}
                    rel={l.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      color: "inherit",
                      py: 3,
                      borderBottom: "1px solid rgba(251,249,243,0.25)",
                      transition: "padding-left 0.25s ease",
                      "&:hover": { pl: 1 },
                      "&:hover .arrow": { transform: "translateX(4px)" },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: 12.5, color: tokens.accentSoft, mb: 0.5 }}>
                        {l.label}
                      </Typography>
                      <Typography sx={{ fontSize: 19, fontFamily: "'Fraunces', serif" }}>
                        {l.value}
                      </Typography>
                    </Box>
                    <EastRoundedIcon className="arrow" sx={{ transition: "transform 0.25s ease" }} />
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
