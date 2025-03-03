import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TraingleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achievements = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with Zosh
        </Typography>
        <Typography variant="body2">Congratulations </Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          420.8K
        </Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>

        <TraingleImg src=""></TraingleImg>

        <TrophyImg src="https://i.imgur.com/VZ3uLlJ.png"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achievements;
