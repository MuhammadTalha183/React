import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Placeholder({
  title,
  subtitle,
  textColor,
  textMuted
}) {
  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 5,
        py: 12,
        textAlign: "center"
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: textColor,
            mb: 2
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: textMuted,
            lineHeight: 1.8
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Container>
  );
}

export default Placeholder;