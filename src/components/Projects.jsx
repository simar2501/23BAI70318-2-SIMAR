import { Box, Typography } from "@mui/material";

const projects = [
  {
    title: "AI Attendance System",
    desc: "Smart attendance using face recognition and ML models.",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with React and Material UI.",
  },
  {
    title: "College Event Portal",
    desc: "Web platform for managing college events.",
  },
];

export default function Projects() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: "#065f46",
        }}
      >
        Projects
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {projects.map((p, i) => (
          <Box
            key={i}
            sx={{
              width: "100%",
              p: 3.5,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, #064e3b, #022c22)",
              border: "1px solid rgba(16,185,129,0.35)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
              transition: "all 0.35s ease",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-6px) scale(1.01)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.65)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#ecfdf5", mb: 1 }}
            >
              {p.title}
            </Typography>

            <Typography sx={{ color: "#a7f3d0", fontSize: "0.95rem" }}>
              {p.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
