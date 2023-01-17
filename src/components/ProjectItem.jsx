import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ProjectItem({ name, description, githubUrl, bodyItems, stackItems }) {
  return (
    <Accordion key={name}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={`${name}-header`}
      >
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails align="justify">
        <Typography mb={2}>{description}</Typography>
        <Typography variant="h6"># Tech Stack</Typography>
        <List
          sx={{
            pl: 2,
          }}
        >
          {stackItems.map((item, index) => (
            <ListItem key={`${item.title}-${index}`} disablePadding>
              <ListItemText>
                <strong>{item.title}: </strong>
                {item.description}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        {bodyItems.map((item, index) =>
          // If the passed item content is an array, render a list
          // Otherwise, render a paragraph
          item.content instanceof Array ? (
            <div key={`${item.title}-${index}`}>
              <Typography variant="h6"># {item.title}</Typography>
              <List
                sx={{
                  paddingLeft: 2,
                  marginBottom: 2,
                }}
              >
                {item.content.map((content, index) => (
                  <ListItem key={`${content.length}-${index}`} disablePadding>
                    <ListItemText>{content}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          ) : (
            <div key={`${item.title}-${index}`}>
              <Typography variant="h6"># {item.title}</Typography>
              <Typography
                sx={{
                  paddingLeft: 2,
                  marginBottom: 2,
                }}
              >
                {item.content}
              </Typography>
            </div>
          )
        )}
      </AccordionDetails>
    </Accordion>
  );
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectItem;
