import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../theme.js";
import { skills } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Pill({ label, filled }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -2, borderColor: tokens.primary }}
      sx={{
        px: 2.1,
        py: 0.9,
        borderRadius: 999,
        border: `1px solid ${filled ? tokens.primary : tokens.line}`,
        backgroundColor: filled ? tokens.primary : "transparent",
        color: filled ? tokens.cream : tokens.ink,
        fontSize: 14,
        whiteSpace: "nowrap",
        transition: "border-color 0.25s ease",
      }}
    >
      {label}
    </Box>
  );
}

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 14 }, backgroundColor: tokens.paperAlt }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
            Skills
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 30, md: 38 }, mb: 6, maxWidth: 560 }}>
            Tools I run recruitment on, and the habits that make it work.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 14, color: tokens.inkSoft, mb: 2 }}>
            Power skills
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.4} sx={{ mb: 6 }}>
            {skills.power.map((s) => (
              <Pill key={s} label={s} filled />
            ))}
          </Stack>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.08 }}
        >
          <Typography sx={{ fontSize: 14, color: tokens.inkSoft, mb: 2 }}>
            Tools &amp; platforms
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.4}>
            {skills.tools.map((s) => (
              <Pill key={s} label={s} />
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
