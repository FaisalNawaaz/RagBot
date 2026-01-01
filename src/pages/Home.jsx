import React from "react";
import DrawerAppBar from "../components/Navbar/AppBar";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import MemoryIcon from "@mui/icons-material/Memory";
import logo from "../assets/RagBot.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const libraries = [
    "NLP",
    "Microsoft Phi -2",
    "OpenAI",
    "mammoth",
    "pdfjs-dist",
    "tesseract",
  ];

  const techStack = [
    {
      title: "AI Model",
      description: "MiniMax-M2.1",
      icon: <SmartToyIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      title: "Backend",
      description: "Node JS + Express JS",
      icon: <StorageIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      title: "Frontend & UI",
      description: "React JS + Material UI",
      icon: <DesktopMacIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#121212", color: "#fff", minHeight: "100vh" }}>
      <DrawerAppBar />

      {/* Hero Section */}
      <Box sx={{ py: 12, textAlign: "center", px: 2 }}>
        <img src={logo} alt="RagBot Logo" style={{ width: 140, height: 60 }} />
        <Typography
          variant="h2"
          sx={{ mt: 3, fontWeight: "bold", lineHeight: 1.2 }}
        >
          RagBot Chatbot
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#aaa",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Your intelligent AI assistant. Ask questions, upload documents or
          images, and get accurate AI-driven answers instantly.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 5,
            bgcolor: "#1976d2",
            px: 5,
            py: 1.8,
            fontWeight: "bold",
            fontSize: "1rem",
            ":hover": { bgcolor: "#115293" },
          }}
          onClick={() => navigate("/chat")}
        >
          Start Chatting
        </Button>
      </Box>

      {/* Technology Stack */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 8, fontWeight: "bold" }}
        >
          Technology Stack
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {techStack.map((tech) => (
            <Grid item xs={12} sm={6} md={4} key={tech.title}>
              <Paper
                sx={{
                  p: 5,
                  bgcolor: "#1f1f1f",
                  textAlign: "center",
                  borderRadius: 3,
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                {tech.icon}
                <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
                  {tech.title}
                </Typography>
                <Typography sx={{ mt: 1.5, color: "#ccc", lineHeight: 1.6 }}>
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Libraries Section */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 6, fontWeight: "bold" }}
        >
          Libraries & Tools Used
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {libraries.map((lib) => (
            <Grid item xs={6} sm={4} md={2} key={lib}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "#1f1f1f",
                  textAlign: "center",
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography sx={{ fontWeight: "medium" }}>{lib}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
