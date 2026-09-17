import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../theme.js";
import { about } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
            About
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, md: 38 },
                  mb: 4,
                  maxWidth: 520,
                  lineHeight: 1.25,
                }}
              >
                Recruitment that closes on time. People practices that people remember.
              </Typography>
              <Typography sx={{ color: tokens.inkSoft, fontSize: 17, mb: 3, maxWidth: 560 }}>
                {about.paragraph}
              </Typography>
              <Typography sx={{ color: tokens.inkSoft, fontSize: 17, maxWidth: 560 }}>
                {about.paragraph2}
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <Stack sx={{ borderTop: `1px solid ${tokens.line}`, mt: { md: 2 } }}>
                {about.facts.map((f) => (
                  <Stack
                    key={f.label}
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      py: 2.4,
                      borderBottom: `1px solid ${tokens.line}`,
                    }}
                  >
                    <Typography sx={{ fontSize: 14.5, color: tokens.inkSoft }}>
                      {f.label}
                    </Typography>
                    <Typography sx={{ fontSize: 15, fontWeight: 500, textAlign: "right" }}>
                      {f.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
