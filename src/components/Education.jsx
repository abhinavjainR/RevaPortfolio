import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../theme.js";
import { education } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 8, md: 10 }, backgroundColor: tokens.paperAlt }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 5 }}>
            Education
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {education.map((e, i) => (
            <Grid item xs={12} md={4} key={e.school + e.degree}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Box sx={{ borderTop: `2px solid ${tokens.primary}`, pt: 2.5 }}>
                  <Typography sx={{ fontSize: 13, color: tokens.support, mb: 1 }}>
                    {e.period}
                  </Typography>
                  <Typography sx={{ fontSize: 17.5, fontWeight: 500, mb: 0.6 }}>
                    {e.degree}
                  </Typography>
                  <Typography sx={{ fontSize: 14.5, color: tokens.inkSoft }}>
                    {e.school}, {e.place}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: tokens.primary, mt: 1 }}>
                    {e.detail}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
