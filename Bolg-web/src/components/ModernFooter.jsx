import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import {
  BookOpen,
  GitBranch,
  Rss,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

function ModernFooter({
  isDarkMode,
  textColor,
  textMuted,
  cardBorder,
  setCurrentTab,
}) {
  // ==========================================
  // BACK TO TOP
  // ==========================================
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // NAVIGATION
  // ==========================================
  const handleNavigation = (tab) => {
    setCurrentTab(tab);

    setTimeout(() => {
      handleBackToTop();
    }, 50);
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 10,

        mt: 8,
        pt: 8,
        pb: 4,

        width: "100%",

        background: isDarkMode
          ? "rgba(15, 23, 42, 0.95)"
          : "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(238,242,255,0.7) 100%)",

        borderTop: `1px solid ${cardBorder}`,

        backdropFilter: "blur(20px)",

        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          boxSizing: "border-box",
        }}
      >
        {/* ==========================================
            MAIN FOOTER
        =========================================== */}

        <Grid
          container
          spacing={{
            xs: 4,
            md: 5,
          }}
          sx={{
            mb: 6,
            width: "100%",
          }}
        >
          {/* ==========================================
              BRAND
          =========================================== */}

          <Grid item xs={12} md={4}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",

                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexShrink: 0,
                }}
              >
                <BookOpen
                  size={20}
                  color="#ffffff"
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: textColor,
                }}
              >
                Nexus
                <Box
                  component="span"
                  sx={{
                    color: "#4f46e5",
                  }}
                >
                  Ink
                </Box>
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: textMuted,
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 320,
              }}
            >
              The modern publishing ecosystem built for
              thinkers, developers, designers, and independent
              storytellers worldwide.
            </Typography>

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing={1}
            >
              {[
                {
                  icon: <GitBranch size={18} />,
                  label: "GitHub",
                },
                {
                  icon: <Rss size={18} />,
                  label: "RSS Feed",
                },
              ].map((soc, i) => (
                <IconButton
                  key={i}
                  size="small"
                  aria-label={soc.label}
                  sx={{
                    p: 1.2,
                    borderRadius: "10px",

                    background: isDarkMode
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(79,70,229,0.06)",

                    color: textMuted,

                    transition:
                      "all 0.2s ease",

                    "&:hover": {
                      color: "#4f46e5",
                      transform:
                        "translateY(-2px)",
                    },
                  }}
                >
                  {soc.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* ==========================================
              NAVIGATION
          =========================================== */}

          <Grid
            item
            xs={6}
            sm={4}
            md={2.5}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: textColor,
                mb: 2.5,

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.05em",
              }}
            >
              Navigation
            </Typography>

            <Stack spacing={1.5}>
              {[
                {
                  label: "Home Page",
                  tab: "home",
                },
                {
                  label:
                    "Articles & Explore",
                  tab: "articles",
                },
                {
                  label:
                    "About Us Mission",
                  tab: "about",
                },
                {
                  label:
                    "Write a Story",
                  tab: "write",
                },
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  onClick={() =>
                    handleNavigation(
                      link.tab
                    )
                  }
                  sx={{
                    color: textMuted,
                    cursor: "pointer",

                    transition:
                      "color 0.2s ease",

                    "&:hover": {
                      color: "#4f46e5",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* ==========================================
              POPULAR TOPICS
          =========================================== */}

          <Grid
            item
            xs={6}
            sm={4}
            md={2.5}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: textColor,
                mb: 2.5,

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.05em",
              }}
            >
              Popular Topics
            </Typography>

            <Stack spacing={1.5}>
              {[
                "Artificial Intelligence",
                "UI/UX & Spatial Design",
                "Software Architecture",
                "Productivity & Flow",
                "Philosophical Essays",
              ].map((topic, i) => (
                <Stack
                  key={i}
                  direction="row"
                  alignItems="center"
                  spacing={0.5}
                  sx={{
                    cursor: "pointer",
                    color: textMuted,

                    transition:
                      "all 0.2s ease",

                    "&:hover": {
                      color: "#4f46e5",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                  >
                    {topic}
                  </Typography>

                  <ArrowUpRight
                    size={14}
                  />
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* ==========================================
              SUPPORT & LEGAL
          =========================================== */}

          <Grid
            item
            xs={12}
            sm={4}
            md={3}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: textColor,
                mb: 2.5,

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.05em",
              }}
            >
              Support & Legal
            </Typography>

            <Stack
              spacing={1.5}
              sx={{
                mb: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#4f46e5",
                  },
                }}
              >
                Help & Knowledge Center
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#4f46e5",
                  },
                }}
              >
                Privacy Policy
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#4f46e5",
                  },
                }}
              >
                Terms of Service
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#4f46e5",
                  },
                }}
              >
                Editorial Guidelines
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* ==========================================
            DIVIDER
        =========================================== */}

        <Divider
          sx={{
            borderColor: cardBorder,
            mb: 3,
          }}
        />

        {/* ==========================================
            BOTTOM BAR
        =========================================== */}

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: textMuted,

              textAlign: {
                xs: "center",
                sm: "left",
              },

              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} NexusInk
            Publishing Inc. All rights reserved.
            Built with passion for digital authors.
          </Typography>
        </Stack>

        {/* ==========================================
            FLOATING BACK TO TOP
        =========================================== */}

        <IconButton
          size="medium"
          onClick={handleBackToTop}
          aria-label="Back to top"
          sx={{
            position: "fixed",

            right: {
              xs: 16,
              sm: 24,
              md: 32,
            },

            bottom: {
              xs: 16,
              sm: 24,
              md: 32,
            },

            width: {
              xs: 44,
              sm: 48,
            },

            height: {
              xs: 44,
              sm: 48,
            },

            zIndex: 9999,

            borderRadius: "14px",

            background:
              "linear-gradient(135deg, #4f46e5, #7c3aed)",

            color: "#ffffff",

            boxShadow:
              "0 10px 30px rgba(79, 70, 229, 0.35)",

            border:
              "1px solid rgba(255,255,255,0.15)",

            backdropFilter: "blur(10px)",

            transition:
              "all 0.3s ease",

            "&:hover": {
              background:
                "linear-gradient(135deg, #4338ca, #6d28d9)",

              transform:
                "translateY(-5px) scale(1.05)",

              boxShadow:
                "0 14px 35px rgba(79, 70, 229, 0.45)",
            },

            "&:active": {
              transform:
                "translateY(-2px) scale(0.98)",
            },
          }}
        >
          <ChevronUp
            size={21}
            strokeWidth={2.5}
          />
        </IconButton>
      </Container>
    </Box>
  );
}

export default ModernFooter;
