import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { tokens } from "../theme.js";
import { projects } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectRow({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Box
      onClick={() => setOpen((o) => !o)}
      sx={{
        borderBottom: `1px solid ${tokens.line}`,
        py: { xs: 3, md: 4 },
        cursor: "pointer",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        spacing={2}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.5, sm: 3 }} alignItems={{ sm: "baseline" }}>
          <Typography
            sx={{
              fontSize: 13,
              color: tokens.support,
              minWidth: 120,
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
            }}
          >
            {item.period}
          </Typography>
          <Typography component="h3" sx={{ fontSize: { xs: 21, md: 25 } }}>
            {item.title}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexShrink: 0 }}>
          <Typography
            sx={{
              fontSize: 12.5,
              color: tokens.primary,
              border: `1px solid ${tokens.primary}`,
              borderRadius: 999,
              px: 1.4,
              py: 0.3,
              display: { xs: "none", sm: "block" },
            }}
          >
            {item.tag}
          </Typography>
          <motion.div animate={{ rotate: open ? 135 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowOutwardRoundedIcon sx={{ color: tokens.ink }} fontSize="small" />
          </motion.div>
        </Stack>
      </Stack>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <Typography sx={{ fontSize: 15.5, color: tokens.inkSoft, maxWidth: 680, pt: 2 }}>
              {item.description}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 14 }, backgroundColor: tokens.paperAlt }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
            Projects
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 30, md: 38 }, mb: 2, maxWidth: 560 }}>
            Applied work, outside the day job.
          </Typography>
          <Typography sx={{ fontSize: 15, color: tokens.inkSoft, mb: 6 }}>
            Tap a project to read more.
          </Typography>
        </motion.div>

        <Box sx={{ borderTop: `1px solid ${tokens.line}` }}>
          {projects.map((item) => (
            <ProjectRow key={item.title} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
