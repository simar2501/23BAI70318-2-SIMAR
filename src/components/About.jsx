
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        scrollMarginTop: "90px", 
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#065f46",
        }}
      >
        About
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "#374151",
          maxWidth: "900px",
        }}
      >
        I am a final year Computer Science Engineering student specializing in
        Artificial Intelligence and Machine Learning. I focus on building
        clean, scalable, and user-centric web applications using modern
        frontend technologies.
      </Typography>
    </Box>
  );
}
