import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@emotion/react";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Close, ContentCopy } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function BotomHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: true,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowOutlinedIcon />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.myColor.main,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* <MenuItem onClick={handleClose}><SportsEsportsOutlinedIcon />Profile</MenuItem> */}

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      <IconButton onClick={toggleDrawer("top", true)}>
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root .MuiAccordion-rounded MuiAccordion-gutters": { height: "100%" } }}
      >
        <Box
          
          sx={{ width: 444, mt: 6, mx: "auto", position: "relative", pt: 10 }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <Close />
          </IconButton>

        {
          ["home1" , "home2" , "home3" ,"home4" , "home5"].map((item)=>{
            return(
              <Accordion key={item} elevation={0} sx={{ bgcolor: "initial",  }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Home </Typography>
              </AccordionSummary>
              <List sx={{py:0 , my:0}}>
            <ListItem sx={{py:0 , my:0}}>
              <ListItemButton>
                <ListItemText primary="Link 1" />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Link 2" />
              </ListItemButton>
            </ListItem>
          </List>
  
            </Accordion>
  

              
            )
          })
        }
          
        </Box>
      </Drawer>
    </Container>
  );
}

export default BotomHeader;
