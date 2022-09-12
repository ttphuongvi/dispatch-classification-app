import {
  Button,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
  Link,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import TemplatePage from "../component/template/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

export const DEFAULT_IMG = "https://www.chanchao.com.tw/VTG/images/default.jpg";

const DispatchList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getImage(12);
  return (
    <TemplatePage
      content={
        <>
          <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleClickOpen}>
              Thêm công văn
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Phân loại công văn</DialogTitle>
              <DialogContent>
                <TextField
                  variant="outlined"
                  name="documentary"
                  autoFocus
                  margin="dense"
                  id="name"
                  type="file"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" color="error" onClick={handleClose}>
                  Hủy
                </Button>
                <Button variant="contained">Phân loại</Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
          <Title title="Tất cả công văn" />
          <Grid container spacing={3}>
            {imageData.map((item, idx) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={idx}>
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
                        sx={{ height: 150, backgroundColor: "#ddd" }}
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
        </>
      }
    />
  );
};

export default DispatchList;
