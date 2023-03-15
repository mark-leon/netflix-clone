import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Signup = () => {
  return (
    <div>
      <div style={{ padding: "0px 200px 0px 200px" }}>
        <Accordion style={{ borderRadius: "0px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Netflix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Signup;
