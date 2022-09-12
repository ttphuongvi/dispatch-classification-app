import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const Title = (props) => {
  return (
    <Breadcrumbs
      sx={(theme) => ({ paddingBottom: theme.spacing(2) })}
      aria-label="breadcrumb"
    >
      <Link
        sx={{ textTransform: "uppercase" }}
        underline="hover"
        color="inherit"
        href="/"
      >
        Ứng dụng phân loại công văn
      </Link>

      <Typography
        sx={{ textTransform: "uppercase", cursor: "pointer" }}
        color="primary"
      >
        {props.title}
      </Typography>
    </Breadcrumbs>
  );
};

export default Title;
