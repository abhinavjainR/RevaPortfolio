import React, { useState } from "react";
import { Box, Container, Grid, Modal, Stack, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { tokens } from "../theme.js";
import { certificates } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const tilts = [-2.2, 1.6, -1.2];

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <Box id="certificates" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
            Certificates
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 30, md: 38 }, mb: 2, maxWidth: 560 }}>
            On record, not just on the résumé.
          </Typography>
          <Typography sx={{ fontSize: 15, color: tokens.inkSoft, mb: 7 }}>
            Click any document to view it in full.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 5, md: 4 }}>
          {certificates.map((cert, i) => (
            <Grid item xs={12} sm={6} md={4} key={cert.title}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Box
                  onClick={() => setActive(cert)}
                  sx={{
                    cursor: "pointer",
                    transform: `rotate(${tilts[i % tilts.length]}deg)`,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "rotate(0deg) translateY(-4px)" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: tokens.cream,
                      border: `1px solid ${tokens.line}`,
                      p: 1.2,
                      boxShadow: "0 14px 30px rgba(22,35,28,0.12)",
                    }}
                  >
                    <Box
                      component="img"
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      sx={{
                        width: "100%",
                        display: "block",
                        aspectRatio: "3 / 4",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </Box>
                  <Stack sx={{ mt: 2, px: 0.5 }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{cert.title}</Typography>
                    <Typography sx={{ fontSize: 13.5, color: tokens.inkSoft, mt: 0.3 }}>
                      {cert.org}
                    </Typography>
                    <Typography sx={{ fontSize: 12.5, color: tokens.support, mt: 0.3 }}>
                      {cert.note} · {cert.date}
                    </Typography>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={Boolean(active)} onClose={() => setActive(null)} closeAfterTransition>
        <AnimatePresence>
          {active && (
            <Box
              sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                style={{ maxWidth: 560, width: "100%" }}
              >
                <Box sx={{ backgroundColor: tokens.cream, p: 1.5, position: "relative" }}>
                  <IconButton
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: tokens.cream,
                      "&:hover": { backgroundColor: tokens.paper },
                    }}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Box
                    component="img"
                    src={active.image}
                    alt={`${active.title} certificate enlarged`}
                    sx={{ width: "100%", display: "block" }}
                  />
                </Box>
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
}
