import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Icon,
  Stack,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import TemplatePage from "../component/TemplatePage";
import dataRoutes from "../router/dataRoutes";

const DispatchCategory = () => {
  const navigate = useNavigate();
  return (
    <TemplatePage
      content={
        <>
          <Grid container spacing={2}>
            {dataRoutes[1].children?.map((value, index) => (
              <Grid key={index} item xs={6}>
                <Card
                  elevation={2}
                  sx={(theme) => ({
                    height: "256px",
                    "&:hover": {
                      boxShadow: 3,
                      transform: "scale(1.01)",
                      transition: "all 0.3s",
                      cursor: "pointer",
                      backgroundColor: alpha(theme.palette.primary.main, 0.04),
                      "& .MuiCardHeader-root": {
                        color: theme.palette.primary.main,
                        fontWeight: theme.typography.fontWeightBold,
                      },
                    },
                  })}
                  onClick={() => navigate(value.path)}
                >
                  <Stack
                    padding={2}
                    spacing={2}
                    direction={"row"}
                    alignItems="center"
                  >
                    <CardMedia sx={{ height: "100%" }} component={Icon}>
                      {value.icon}
                    </CardMedia>
                    <Stack>
                      <CardHeader title={value.name}></CardHeader>
                      <CardContent sx={{ textAlign: "justify" }}>
                        {value.desc}
                      </CardContent>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      }
    ></TemplatePage>
  );
};

export default DispatchCategory;
