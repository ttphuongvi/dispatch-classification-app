import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as LinkRoute } from "react-router-dom";

export const DEFAULT_IMG = "https://www.chanchao.com.tw/VTG/images/default.jpg";

const ListDispatch = (props) => {
  return (
    <Grid container spacing={3}>
      {props.data.map((item, idx) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Link component={LinkRoute} to={item.id} underline="none">
              <Card
                elevation={2}
                sx={{
                  "&:hover": {
                    boxShadow: 3,
                    transform: "scale(1.01)",
                    transition: "all 0.3s",
                  },
                }}
                // onClick={() => navigate("details")}
              >
                <CardMedia
                  component="img"
                  src={item.image || DEFAULT_IMG}
                  sx={{
                    height: 150,
                    backgroundColor: "#ddd",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.type}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListDispatch;
