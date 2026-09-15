
import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Container,
  Stack,
  Chip,
  Typography,
  Button,
  Paper,
  IconButton,
  Tooltip,
  Avatar,
  TextField
} from "@mui/material";

import {
  Sparkles,
  ArrowRight,
  Feather,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Eye,
  PenTool,
  Pause,
  Play,
  Tag,
  Heart,
  Bookmark,
  Flame,
  Send,
  CheckCircle2
} from "lucide-react";

import { TAGLINES, CATEGORIES, FEATURED_POSTS } from "../data/blogData";


function Home({
  isDarkMode,
  textColor,
  textMuted,
  cardBg,
  cardBorder,
  setCurrentTab,
  activeCategory,
  setActiveCategory,
  activePostIndex,
  setActivePostIndex,
  bookmarked,
  setBookmarked,
  liked,
  setLiked,
  likeCounts,
  setLikeCounts
}) {
  const visualRef = useRef(null);

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingCode, setIsTypingCode] = useState(true);
  const [codeTypedText, setCodeTypedText] = useState("");
  const [wordCount, setWordCount] = useState(340);
  const [activeTags, setActiveTags] = useState([
    "#ideas",
    "#tech",
    "#design",
    "#future"
  ]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const currentTagline = TAGLINES[taglineIndex];
    const speed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTaglineIndex(
          (prev) => (prev + 1) % TAGLINES.length
        );
      } else {
        setDisplayText(
          isDeleting
            ? currentTagline.substring(
                0,
                displayText.length - 1
              )
            : currentTagline.substring(
                0,
                displayText.length + 1
              )
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  useEffect(() => {
    if (!isTypingCode) return;

    const fullSnippet =
      FEATURED_POSTS[activePostIndex].draftSnippet;

    let charIndex = 0;

    setCodeTypedText("");

    const interval = setInterval(() => {
      if (charIndex <= fullSnippet.length) {
        setCodeTypedText(
          fullSnippet.slice(0, charIndex)
        );

        setWordCount(
          320 + Math.floor(charIndex / 3)
        );

        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [activePostIndex, isTypingCode]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!visualRef.current) return;

      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      visualRef.current.style.transform = `
        perspective(1200px)
        rotateY(${x * 6}deg)
        rotateX(${-y * 6}deg)
        translateZ(10px)
      `;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleLike = (id) => {
    setLiked((prev) => {
      const isCurrentlyLiked = prev[id];

      setLikeCounts((cPrev) => ({
        ...cPrev,
        [id]: isCurrentlyLiked
          ? cPrev[id] - 1
          : cPrev[id] + 1
      }));

      return {
        ...prev,
        [id]: !isCurrentlyLiked
      };
    });
  };

  const handleAddTag = () => {
    const sampleTags = [
      "#creativity",
      "#publishing",
      "#thoughts",
      "#philosophy",
      "#code",
      "#deepwork"
    ];

    const randomTag =
      sampleTags[
        Math.floor(
          Math.random() * sampleTags.length
        )
      ];

    if (!activeTags.includes(randomTag)) {
      setActiveTags((prev) => [
        ...prev,
        randomTag
      ]);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (newsletterEmail.trim()) {
      setSubscribed(true);

      setTimeout(
        () => setSubscribed(false),
        4000
      );

      setNewsletterEmail("");
    }
  };

  const activePost =
    FEATURED_POSTS[activePostIndex];

  return (
    <>
      <Container
  maxWidth="xl"
  sx={{
    position: "relative",
    zIndex: 5,
    width: "100%",
    maxWidth: "1536px !important",
    minHeight: {
      xs: "auto",
      md: "calc(100vh - 110px)"
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
    px: {
      xs: 2,
      sm: 3,
      md: 4
    },
    py: {
      xs: 3,
      sm: 4,
      md: 6
    }
  }}
>
       <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 1.1fr) minmax(0, 0.9fr)"
    },
    gap: {
      xs: 4,
      sm: 5,
      lg: 8
    },
    alignItems: "center",
    width: "100%",
    minWidth: 0
  }}
>

          {/* Left Hero Column */}

          <Box
            sx={{
              animation:
                "contentReveal 0.9s ease forwards"
            }}
          >
            <Chip
              icon={
                <Sparkles
                  size={16}
                  color="#7c3aed"
                />
              }
              label="The Premium Writing & Reading Hub"
              sx={{
                mb: 3,
                px: 1.5,
                py: 2.2,
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "0.88rem",
                color: isDarkMode
                  ? "#c084fc"
                  : "#6d28d9",
                background: isDarkMode
                  ? "rgba(168, 85, 247, 0.14)"
                  : "rgba(124, 58, 237, 0.08)",
                border: isDarkMode
                  ? "1px solid rgba(168, 85, 247, 0.3)"
                  : "1px solid rgba(124, 58, 237, 0.2)",
                backdropFilter: "blur(10px)"
              }}
            />

            <Typography
  component="h1"
  sx={{
    fontSize: {
      xs: "2.35rem",
      sm: "3.2rem",
      md: "4.5rem",
      lg: "5rem"
    },
    lineHeight: 1.08,
    fontWeight: 900,
    letterSpacing: {
      xs: "-0.035em",
      md: "-0.04em"
    },
    color: textColor,
    mb: {
      xs: 2,
      md: 2.5
    },
    maxWidth: "100%",
    overflowWrap: "anywhere",
    wordBreak: "break-word"
  }}
>
              Ideas <br />

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #4f46e5, #7c3aed, #9333ea)",
                  WebkitBackgroundClip:
                    "text",
                  WebkitTextFillColor:
                    "transparent",
                  display: "inline-block"
                }}
              >
                {displayText}
              </Box>

              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: "4px",
                  height: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4.2rem"
                  },
                  backgroundColor: "#4f46e5",
                  ml: 1,
                  animation:
                    "blink 1s step-end infinite",
                  verticalAlign: "middle"
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.05rem",
                  md: "1.18rem"
                },
                lineHeight: 1.8,
                color: textMuted,
                maxWidth: 580,
                mb: 4
              }}
            >
              Immerse yourself in deep-dive essays,
              tech breakthroughs, and creative
              inspirations authored by independent
              thinkers and creators around the world.
            </Typography>

            {/* Category Filter Chips */}
{/* 
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: textMuted,
                  mb: 1.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem"
                }}
              >
                Filter by Topic
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ gap: 1 }}
              >
                {CATEGORIES.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() =>
                      setActiveCategory(cat)
                    }
                    sx={{
                      borderRadius: "10px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "0.82rem",
                      transition:
                        "all 0.2s ease",

                      background:
                        activeCategory === cat
                          ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                          : isDarkMode
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(255, 255, 255, 0.7)",

                      color:
                        activeCategory === cat
                          ? "#fff"
                          : textMuted,

                      border:
                        activeCategory === cat
                          ? "none"
                          : `1px solid ${cardBorder}`,

                      boxShadow:
                        activeCategory === cat
                          ? "0 4px 14px rgba(79,70,229,0.3)"
                          : "none",

                      "&:hover": {
                        background:
                          activeCategory === cat
                            ? "linear-gradient(135deg, #4338ca, #6d28d9)"
                            : isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#ffffff",

                        color:
                          activeCategory === cat
                            ? "#fff"
                            : textColor
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box> */}

            {/* CTA Action Buttons */}

            <Stack
              direction={{
                xs: "column",
                sm: "row"
              }}
              spacing={2.5}
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() =>
                  setCurrentTab("articles")
                }
                endIcon={
                  <ArrowRight size={20} />
                }
                sx={{
                  px: 4,
                  py: 1.8,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  boxShadow:
                    "0 14px 30px rgba(79,70,229,0.3)",
                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-3px)",
                    boxShadow:
                      "0 18px 40px rgba(79,70,229,0.45)"
                  }
                }}
              >
                Start Exploring
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() =>
                  setCurrentTab("write")
                }
                startIcon={
                  <Feather size={18} />
                }
                sx={{
                  px: 4,
                  py: 1.8,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: textColor,
                  borderColor: cardBorder,
                  background: isDarkMode
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 4px 15px rgba(0,0,0,0.02)",

                  "&:hover": {
                    borderColor: "#4f46e5",
                    background: isDarkMode
                      ? "rgba(255, 255, 255, 0.08)"
                      : "#ffffff",
                    transform:
                      "translateY(-3px)"
                  },

                  transition:
                    "all 0.3s ease"
                }}
              >
                Become an Author
              </Button>
            </Stack>

            {/* Platform Stats Row */}

            <Stack
              direction="row"
              spacing={{
                xs: 3,
                sm: 6
              }}
              sx={{
                pt: 3,
                borderTop:
                  `1px solid ${cardBorder}`,
                flexWrap: "wrap",
                rowGap: 2
              }}
            >
              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <FileText
                    size={18}
                    color="#4f46e5"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    12K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Curated Articles
                </Typography>
              </Box>

              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Users
                    size={18}
                    color="#7c3aed"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    3.2K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Active Writers
                </Typography>
              </Box>

              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <TrendingUp
                    size={18}
                    color="#10b981"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    650K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Monthly Readers
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right Featured Preview Card */}

          <Box
            ref={visualRef}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: {
                xs: 480,
                md: 560
              },
              transition:
                "transform 0.15s ease-out"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 320,
                  md: 450
                },
                height: {
                  xs: 320,
                  md: 450
                },
                borderRadius: "50%",
                border:
                  "1px solid rgba(79,70,229,0.18)",
                animation:
                  "orbit 26s linear infinite"
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 380,
                  md: 540
                },
                height: {
                  xs: 380,
                  md: 540
                },
                borderRadius: "50%",
                border:
                  "1px dashed rgba(124,58,237,0.18)",
                animation:
                  "orbitReverse 32s linear infinite"
              }}
            />

            {/* Post Switcher Dots */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                top: 0,
                right: "6%",
                zIndex: 10,
                background: isDarkMode
                  ? "rgba(15, 23, 42, 0.8)"
                  : "rgba(255, 255, 255, 0.9)",
                p: 0.6,
                borderRadius: "20px",
                border:
                  `1px solid ${cardBorder}`,
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.05)"
              }}
            >
              {FEATURED_POSTS.map(
                (_, idx) => (
                  <Button
                    key={idx}
                    size="small"
                    onClick={() =>
                      setActivePostIndex(idx)
                    }
                    sx={{
                      minWidth: 32,
                      height: 28,
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color:
                        activePostIndex === idx
                          ? "#fff"
                          : textMuted,

                      background:
                        activePostIndex === idx
                          ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                          : "transparent"
                    }}
                  >
                    0{idx + 1}
                  </Button>
                )
              )}
            </Stack>

            {/* Main Interactive Card */}

            <Paper
              elevation={0}
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  sm: 420,
                  md: 450
                },
                p: 3.5,
                borderRadius: "28px",
                background: cardBg,
                backdropFilter: "blur(25px)",
                border:
                  `1px solid ${cardBorder}`,

                boxShadow: isDarkMode
                  ? "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 20px 50px rgba(79, 70, 229, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)",

                zIndex: 4,
                transition:
                  "all 0.4s ease"
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Chip
                  label={activePost.category}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#4f46e5",
                    background:
                      "rgba(79, 70, 229, 0.1)",
                    border:
                      "1px solid rgba(79, 70, 229, 0.2)"
                  }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    color: textMuted,
                    fontSize: "0.8rem"
                  }}
                >
                  <Clock size={14} />

                  <Typography variant="caption">
                    {activePost.readTime}
                  </Typography>

                  <Typography variant="caption">
                    •
                  </Typography>

                  <Eye size={14} />

                  <Typography variant="caption">
                    {activePost.views}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: textColor,
                  mb: 1.5,
                  lineHeight: 1.35
                }}
              >
                {activePost.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  mb: 2.5,
                  lineHeight: 1.6
                }}
              >
                {activePost.excerpt}
              </Typography>

              {/* Typewriter snippet preview */}

              <Box
                sx={{
                  mb: 3,
                  p: 2,
                  borderRadius: "16px",
                  background: isDarkMode
                    ? "rgba(15, 23, 42, 0.9)"
                    : "#0f172a",
                  border:
                    "1px solid rgba(79, 70, 229, 0.2)",
                  fontFamily:
                    "'Fira Code', monospace, sans-serif",
                  fontSize: "0.78rem",
                  color: "#a7f3d0",
                  position: "relative"
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <PenTool
                      size={14}
                      color="#818cf8"
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#818cf8",
                        fontWeight: 700
                      }}
                    >
                      Live Draft Counter (
                      {wordCount} words)
                    </Typography>
                  </Stack>

                  <IconButton
                    size="small"
                    onClick={() =>
                      setIsTypingCode(
                        (prev) => !prev
                      )
                    }
                    sx={{
                      color: "#94a3b8"
                    }}
                  >
                    {isTypingCode ? (
                      <Pause size={14} />
                    ) : (
                      <Play size={14} />
                    )}
                  </IconButton>
                </Stack>

                <Box
                  component="pre"
                  sx={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    overflowX: "auto"
                  }}
                >
                  {codeTypedText}

                  <Box
                    component="span"
                    sx={{
                      animation:
                        "blink 1s infinite"
                    }}
                  >
                    |
                  </Box>
                </Box>
              </Box>

              <Stack
                direction="row"
                spacing={0.8}
                alignItems="center"
                flexWrap="wrap"
                sx={{
                  mb: 3,
                  gap: 0.5
                }}
              >
                {activeTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      height: 24,
                      fontSize: "0.72rem",
                      background:
                        "rgba(124, 58, 237, 0.1)",
                      color: "#7c3aed",
                      border:
                        "1px solid rgba(124, 58, 237, 0.2)"
                    }}
                  />
                ))}

                <IconButton
                  size="small"
                  onClick={handleAddTag}
                  sx={{
                    width: 24,
                    height: 24,
                    background:
                      "rgba(79, 70, 229, 0.1)",
                    color: "#4f46e5",

                    "&:hover": {
                      background: "#4f46e5",
                      color: "#fff"
                    }
                  }}
                >
                  <Tag size={12} />
                </IconButton>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt: 2,
                  borderTop:
                    `1px solid ${cardBorder}`
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Avatar
                    src={
                      activePost.author.avatar
                    }
                    alt={
                      activePost.author.name
                    }
                    sx={{
                      width: 38,
                      height: 38,
                      border:
                        "2px solid #4f46e5"
                    }}
                  />

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: textColor,
                        fontSize: "0.85rem",
                        lineHeight: 1.1
                      }}
                    >
                      {activePost.author.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: textMuted
                      }}
                    >
                      {activePost.author.role}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  spacing={0.5}
                >
                  <Tooltip title="Like story">
                    <IconButton
                      size="small"
                      onClick={() =>
                        toggleLike(
                          activePost.id
                        )
                      }
                      sx={{
                        color: liked[
                          activePost.id
                        ]
                          ? "#ef4444"
                          : textMuted
                      }}
                    >
                      <Heart
                        size={18}
                        fill={
                          liked[
                            activePost.id
                          ]
                            ? "#ef4444"
                            : "none"
                        }
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Save story">
                    <IconButton
                      size="small"
                      onClick={() =>
                        toggleBookmark(
                          activePost.id
                        )
                      }
                      sx={{
                        color: bookmarked[
                          activePost.id
                        ]
                          ? "#4f46e5"
                          : textMuted
                      }}
                    >
                      <Bookmark
                        size={18}
                        fill={
                          bookmarked[
                            activePost.id
                          ]
                            ? "#4f46e5"
                            : "none"
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
            </Paper>

            {/* Activity floating badge */}

            <Paper
              elevation={0}
              sx={{
                position: "absolute",
                left: {
                  xs: "-2%",
                  md: "-5%"
                },
                bottom: {
                  xs: "2%",
                  md: "5%"
                },
                px: 2.2,
                py: 1.6,
                borderRadius: "18px",
                background: cardBg,
                backdropFilter: "blur(18px)",
                border:
                  `1px solid ${cardBorder}`,
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.06)",
                animation:
                  "miniFloat 6s ease-in-out infinite",
                zIndex: 6
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow:
                      "0 0 10px #10b981"
                  }}
                />

                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                  >
                    <Flame
                      size={14}
                      color="#4f46e5"
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: textColor,
                        display: "block"
                      }}
                    >
                      Community Resonances
                    </Typography>
                  </Stack>

                  <Typography
                    variant="caption"
                    sx={{
                      color: textMuted,
                      fontSize: "0.72rem"
                    }}
                  >
                    {
                      likeCounts[
                        activePost.id
                      ]
                    }{" "}
                    readers loved this article
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Quick Newsletter Banner */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          py: {
            xs: 6,
            md: 8
          }
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 4,
              md: 6
            },
            borderRadius: "32px",

            background: isDarkMode
              ? "linear-gradient(135deg, rgba(30,27,75,0.8), rgba(17,24,39,0.9))"
              : "linear-gradient(135deg, #ffffff, #f1f5f9)",

            border:
              `1px solid ${cardBorder}`,

            boxShadow:
              "0 20px 50px rgba(79, 70, 229, 0.08)",

            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              maxWidth: 600,
              mx: "auto"
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "16px",
                background:
                  "rgba(79, 70, 229, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1
              }}
            >
              <Send
                size={24}
                color="#4f46e5"
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: textColor
              }}
            >
              Stay Inspired Weekly
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: textMuted,
                lineHeight: 1.6
              }}
            >
              Get handpicked essays, deep dives
              into AI and technology, and curated
              creative wisdom delivered directly to
              your inbox.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                width: "100%",
                mt: 2
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  sm: "row"
                }}
                spacing={1.5}
                sx={{ width: "100%" }}
              >
                <TextField
                  placeholder="Enter your email address..."
                  variant="outlined"
                  fullWidth
                  value={newsletterEmail}
                  onChange={(e) =>
                    setNewsletterEmail(
                      e.target.value
                    )
                  }
                  sx={{
                    "& .MuiOutlinedInput-root":
                      {
                        borderRadius: "14px",
                        background:
                          isDarkMode
                            ? "rgba(15, 23, 42, 0.6)"
                            : "#ffffff",
                        borderColor:
                          cardBorder,
                        color: textColor
                      }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: "14px",
                    fontWeight: 700,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    boxShadow:
                      "0 8px 20px rgba(79, 70, 229, 0.3)",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4338ca, #6d28d9)"
                    }
                  }}
                >
                  {subscribed
                    ? "Subscribed! ✨"
                    : "Subscribe Free"}
                </Button>
              </Stack>
            </Box>

            {subscribed && (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  color: "#10b981",
                  mt: 1
                }}
              >
                <CheckCircle2 size={16} />

                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600
                  }}
                >
                  Thank you! You've successfully
                  joined our newsletter.
                </Typography>
              </Stack>
            )}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default Home;