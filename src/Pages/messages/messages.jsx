import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Fab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import axios from "axios";

const tutorProfiles = {
  "Emily Carter": "/path/to/emily-profile.jpg",
  "David Lee": "/path/to/david-profile.jpg",
  "Sarah Brown": "/path/to/sarah-profile.jpg",
};

export default function MessagingInterface() {
  const [chatData, setChatData] = useState({});
  const [currentChat, setCurrentChat] = useState("Emily Carter");
  const [newMessage, setNewMessage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const messages = chatData[currentChat] || [];

  // Reference for the chat container
  const chatContainerRef = useRef(null);

  // Fetch chats from the backend
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/chats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setChatData(response.data); // Assuming the API returns an object with chat names as keys
        setLoading(false);
      } catch (err) {
        console.error("Error fetching chats:", err);
        setError("Failed to load chats. Please try again later.");
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      sender: "student",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    try {
      const response = await axios.post(
        `/api/chats/${currentChat}/messages`,
        { text: newMessage },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedMessages = [...messages, userMessage];
      updateChat(currentChat, updatedMessages);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again.");
    }
  };

  const updateChat = (name, updatedMessages) => {
    setChatData((prev) => ({ ...prev, [name]: updatedMessages }));
  };

  const handleChatChange = (name) => {
    setCurrentChat(name);
    if (isMobile) setDrawerOpen(false);
  };

  const SidebarContent = (
    <Box width={250} p={2} bgcolor="white" height="100%">
      <Typography variant="h5" fontWeight="bold" color="primary" mb={3}>
        E-Learning
      </Typography>
      {["Home", "Courses", "Grades", "Messages"].map((label, idx) => (
        <Link key={idx} to={`/${label.toLowerCase()}`} style={{ textDecoration: "none" }}>
          <Typography color="primary" fontWeight="bold" my={1}>
            {label}
          </Typography>
        </Link>
      ))}
      <Typography variant="subtitle1" fontWeight="bold" mt={3} mb={1}>
        Chats
      </Typography>
      <List>
        {Object.keys(chatData).map((name) => (
          <ListItem
            key={name}
            button
            selected={currentChat === name}
            onClick={() => handleChatChange(name)}
            sx={{ borderRadius: 2, mb: 1 }}
          >
            <ListItemAvatar>
              <Avatar src={tutorProfiles[name]}>{name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bg-blue-200 min-h-screen">
      <Nav />
      {!chatOpen && (
        <Fab
          color="primary"
          onClick={() => setChatOpen(true)}
          sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1200 }}
        >
          <ChatIcon />
        </Fab>
      )}

      {chatOpen && (
        <Box display="flex" height="calc(100vh - 64px)">
          {isMobile ? (
            <>
              <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {SidebarContent}
              </Drawer>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ position: "absolute", top: 70, left: 16, zIndex: 1000 }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box width="25%" bgcolor="cyan">
              {SidebarContent}
            </Box>
          )}

          {/* Chat Window */}
          <Box flex={1} display="flex" flexDirection="column" width="100%">
            <Box p={2} borderBottom={1} borderColor="gray" display="flex" justifyContent="space-between">
              <Typography variant="h6" fontWeight="bold">
                Chat with {currentChat}
              </Typography>
              <IconButton onClick={() => setChatOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              flex={1}
              p={2}
              overflow="auto"
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{ minHeight: 0 }}
              ref={chatContainerRef} // Attach the ref to the chat container
            >
              {loading && <Typography>Loading messages...</Typography>}
              {error && <Typography color="error">{error}</Typography>}
              {!loading &&
                !error &&
                messages.map((msg, idx) => (
                  <Box
                    key={idx}
                    alignSelf={msg.sender === "tutor" ? "flex-end" : "flex-start"}
                    maxWidth="85%"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      px={2}
                      py={1}
                      borderRadius={2}
                      boxShadow={1}
                      bgcolor={msg.sender === "tutor" ? "blue" : "aqua"}
                      color={msg.sender === "tutor" ? "white" : "black"}
                    >
                      {msg.text}
                    </Box>
                    <Typography variant="caption" color="gray">
                      {msg.time}
                    </Typography>
                  </Box>
                ))}
            </Box>

            <Box p={2} borderTop={1} borderColor="grey.300" display="flex" gap={2}>
              <TextField
                placeholder="Send a message..."
                variant="outlined"
                fullWidth
                size="small"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
