import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Foul = [
  {
    id: 1,
    name: "Процедура признания недобросовестного лица",
    description: "Процедура признания недобросовестного лица description",
    link: "/foul/1",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Процедура признания недобросовестного лица 2",
    description: "Процедура признания недобросовестного лица description 2",
    link: "/foul/2",
    img: "https://images.hindustantimes.com/auto/auto-images/bmw/3series/1593162288016_2019-bmw-3-series-1024x576.jpg",
  },
  {
    id: 3,
    name: "Процедура признания недобросовестного лица 3",
    description: "Процедура признания недобросовестного лица description 3",
    link: "/foul/3",
    img: "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984__340.png",
  },
  {
    id: 4,
    name: "Процедура признания недобросовестного лица 4",
    description: "Процедура признания недобросовестного лица description 4",
    link: "/foul/4",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=75&wm=1",
  },
];

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {Foul.map((__res) => {
        return (
          <NavLink
            to={__res?.link}
            style={{ color: "#0173c1" }}
            key={__res?.id}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  style={{ borderRadius: "4px" }}
                  src={__res?.img}
                />
              </ListItemAvatar>
              <ListItemText
                primary={__res?.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="#1ab394"
                    >
                      {__res?.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </NavLink>
        );
      })}
    </List>
  );
}
