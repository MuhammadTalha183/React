import React from "react";

import {
  Box,
  Container,
  Stack,
  Chip,
  Typography,
  Button,
  Paper,
  Avatar,
  Grid
} from "@mui/material";

import {
  Compass,
  Award,
  ShieldCheck,
  Target,
  Globe
} from "lucide-react";

import {
  TEAM_MEMBERS,
  MILESTONES
} from "../data/blogData";


function About({
  isDarkMode,
  textColor,
  textMuted,
  cardBg,
  cardBorder,
  setCurrentTab
}) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        zIndex: 10,
        py: { xs: 6, md: 10 }
      }}
    >
      {/* Hero Mission Header */}

      <Box
        sx={{
          textAlign: "center",
          maxWidth: 850,
          mx: "auto",
          mb: 10
        }}
      >
        <Chip
          icon={
            <Compass
              size={16}
              color="#7c3aed"
            />
          }
          label="Our Mission & Philosophy"
          sx={{
            mb: 2.5,
            px: 2,
            py: 2.2,
            borderRadius: "30px",
            fontWeight: 700,
            fontSize: "0.85rem",
            color: isDarkMode
              ? "#c084fc"
              : "#6d28d9",
            background: isDarkMode
              ? "rgba(168, 85, 247, 0.14)"
              : "rgba(124, 58, 237, 0.08)",
            border: isDarkMode
              ? "1px solid rgba(168, 85, 247, 0.3)"
              : "1px solid rgba(124, 58, 237, 0.2)"
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: {
              xs: "2.4rem",
              sm: "3.4rem",
              md: "4.2rem"
            },
            letterSpacing: "-0.03em",
            color: textColor,
            mb: 3,
            lineHeight: 1.15
          }}
        >
          Empowering Thoughtful Voices in an{" "}
          <br />

          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent"
            }}
          >
            Algorithmic World.
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: textMuted,
            lineHeight: 1.8,
            fontWeight: 400
          }}
        >
          NexusInk was founded on a simple premise:
          deep ideas deserve space to breathe. We
          build tools that celebrate long-form
          journalism, analytical clarity, and
          cross-disciplinary inspiration without the
          noise of clickbait feeds.
        </Typography>
      </Box>

      {/* Core Values Section */}

      <Box sx={{ mb: 12 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 6,
            color: textColor
          }}
        >
          What Guides Our Platform
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              icon: (
                <Award
                  size={28}
                  color="#4f46e5"
                />
              ),
              title: "Authentic Authorship",
              desc:
                "We prioritize original human perspectives, rigorous research, and nuanced essays over superficial automated snippets."
            },
            {
              icon: (
                <ShieldCheck
                  size={28}
                  color="#7c3aed"
                />
              ),
              title: "Distraction-Free Focus",
              desc:
                "Our typography-first interface guarantees that readers focus entirely on clarity and cognitive retention."
            },
            {
              icon: (
                <Target
                  size={28}
                  color="#ec4899"
                />
              ),
              title: "Independent Reach",
              desc:
                "Writers retain 100% ownership of their intellectual property with full freedom to build personal subscriber bases."
            },
            {
              icon: (
                <Globe
                  size={28}
                  color="#10b981"
                />
              ),
              title: "Global Discourse",
              desc:
                "Connecting thinkers, programmers, visual artists, and researchers across over 140 countries in meaningful dialogue."
            }
          ].map((val, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={idx}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "24px",
                  background: cardBg,
                  backdropFilter: "blur(20px)",
                  border:
                    `1px solid ${cardBorder}`,
                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-6px)",
                    borderColor:
                      "#4f46e5",
                    boxShadow:
                      "0 15px 35px rgba(79, 70, 229, 0.1)"
                  }
                }}
              >
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "16px",
                    background:
                      "rgba(79, 70, 229, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5
                  }}
                >
                  {val.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: textColor,
                    mb: 1.5
                  }}
                >
                  {val.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: textMuted,
                    lineHeight: 1.6
                  }}
                >
                  {val.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Milestone Timeline */}

      <Box sx={{ mb: 12 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 6,
            color: textColor
          }}
        >
          Our Journey So Far
        </Typography>

        <Grid container spacing={3}>
          {MILESTONES.map((item, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={idx}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: "24px",
                  background: cardBg,
                  border:
                    `1px solid ${cardBorder}`,
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: "#4f46e5",
                    opacity: 0.85,
                    mb: 1
                  }}
                >
                  {item.year}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: textColor,
                    mb: 1
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: textMuted,
                    lineHeight: 1.6
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Editorial Team Board */}

      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 2,
            color: textColor
          }}
        >
          Meet the Editorial Board
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: textMuted,
            textAlign: "center",
            mb: 6,
            maxWidth: 600,
            mx: "auto"
          }}
        >
          The strategists, designers, and engineers
          maintaining NexusInk's publishing
          standards.
        </Typography>

        <Grid container spacing={4}>
          {TEAM_MEMBERS.map((member, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={idx}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  background: cardBg,
                  border:
                    `1px solid ${cardBorder}`,
                  textAlign: "center",
                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-5px)"
                  }
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    border:
                      "3px solid #4f46e5"
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: textColor,
                    fontSize: "1.1rem",
                    mb: 0.5
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "#7c3aed",
                    fontWeight: 700,
                    display: "block",
                    mb: 2
                  }}
                >
                  {member.role}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: textMuted,
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  {member.bio}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.8}
                  justifyContent="center"
                  flexWrap="wrap"
                  sx={{ gap: 0.5 }}
                >
                  {member.tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: 22,
                        background:
                          "rgba(79, 70, 229, 0.08)",
                        color: "#4f46e5"
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Banner */}

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 4,
            md: 8
          },
          borderRadius: "32px",
          background:
            "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "#ffffff",
          textAlign: "center",
          boxShadow:
            "0 20px 40px rgba(79, 70, 229, 0.3)"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 2,
            fontSize: {
              xs: "2rem",
              md: "3rem"
            }
          }}
        >
          Ready to Share Your Perspective?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.9,
            maxWidth: 650,
            mx: "auto",
            mb: 4,
            fontSize: "1.1rem"
          }}
        >
          Join thousands of creators who publish
          deep, inspiring stories on NexusInk every
          single day.
        </Typography>

        <Stack
          direction={{
            xs: "column",
            sm: "row"
          }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              setCurrentTab("write")
            }
            sx={{
              px: 4,
              py: 1.6,
              borderRadius: "14px",
              fontWeight: 800,
              textTransform: "none",
              background: "#ffffff",
              color: "#4f46e5",

              "&:hover": {
                background: "#f8fafc"
              }
            }}
          >
            Start Writing Now
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              setCurrentTab("articles")
            }
            sx={{
              px: 4,
              py: 1.6,
              borderRadius: "14px",
              fontWeight: 800,
              textTransform: "none",
              color: "#ffffff",
              borderColor:
                "rgba(255,255,255,0.4)",

              "&:hover": {
                borderColor: "#ffffff",
                background:
                  "rgba(255,255,255,0.1)"
              }
            }}
          >
            Browse Articles
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default About;