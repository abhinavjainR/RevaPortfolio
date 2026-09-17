import React from "react";
import { Box, Container, Grid, Stack, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { tokens } from "../theme.js";
import { experience, community } from "../data/resumeData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Row({ item, isLast }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ position: "relative", pb: isLast ? 0 : 6 }}>
        <Grid item xs={12} md={3}>
          <Typography
            sx={{
              fontSize: 14,
              color: tokens.inkSoft,
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
            }}
          >
            {item.period}
          </Typography>
          <Typography sx={{ fontSize: 13.5, color: tokens.support, mt: 0.5 }}>
            {item.place}
          </Typography>
        </Grid>

        <Grid item xs={12} md={9} sx={{ position: "relative", pl: { md: 4 } }}>
          {/* connector line + dot, desktop only */}
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 0,
              top: 6,
              bottom: isLast ? "auto" : -48,
              width: "1px",
              backgroundColor: tokens.line,
            }}
          />
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: -5,
              top: 4,
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: tokens.primary,
              border: `2px solid ${tokens.paper}`,
              boxShadow: `0 0 0 1px ${tokens.primary}`,
            }}
          />

          <Typography component="h3" sx={{ fontSize: 24, mb: 0.3 }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: 15.5, color: tokens.primary, fontWeight: 500, mb: 2 }}>
            {item.org}
          </Typography>

          <Stack component="ul" spacing={1} sx={{ pl: 2.2, m: 0, mb: 2.5 }}>
            {item.points.map((p, i) => (
              <Typography
                key={i}
                component="li"
                sx={{ fontSize: 15, color: tokens.inkSoft, lineHeight: 1.6 }}
              >
                {p}
              </Typography>
            ))}
          </Stack>

          <Typography sx={{ fontSize: 13, color: tokens.support, mb: item.verified ? 1.2 : 0 }}>
            Skills learned — {item.skillsLearned}
          </Typography>

          {item.verified && (
            <Chip
              icon={<VerifiedRoundedIcon sx={{ fontSize: 16, color: `${tokens.primary} !important` }} />}
              label={item.verifiedLabel}
              size="small"
              sx={{
                backgroundColor: "transparent",
                border: `1px solid ${tokens.line}`,
                color: tokens.inkSoft,
                fontSize: 12,
                height: 26,
              }}
            />
          )}
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <Box id="experience" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
            Experience
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 30, md: 38 }, mb: 7, maxWidth: 560 }}>
            Three roles, one thread — finding and keeping the right people.
          </Typography>
        </motion.div>

        <Box>
          {experience.map((item, i) => (
            <Row key={item.org} item={item} isLast={i === experience.length - 1} />
          ))}
        </Box>

        <Box sx={{ mt: 9, pt: 7, borderTop: `1px solid ${tokens.line}` }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Typography sx={{ fontSize: 13.5, color: tokens.primary, fontWeight: 500, mb: 1.5 }}>
              Community &amp; leadership
            </Typography>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={3}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: tokens.inkSoft,
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                  }}
                >
                  {community.period}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography component="h3" sx={{ fontSize: 22, mb: 0.3 }}>
                  {community.title}
                </Typography>
                <Typography sx={{ fontSize: 15, color: tokens.primary, fontWeight: 500, mb: 2 }}>
                  {community.org}
                </Typography>
                <Stack component="ul" spacing={1} sx={{ pl: 2.2, m: 0 }}>
                  {community.points.map((p, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ fontSize: 15, color: tokens.inkSoft, lineHeight: 1.6 }}
                    >
                      {p}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
