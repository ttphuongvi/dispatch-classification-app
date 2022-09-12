import {
  Button,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
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

  const handleClassify = () => {
    alert("Hình ảnh thuộc loại công văn", "chỗ này điền kết quả nè");
  };

  const imageData = getImage(12, "Công văn hướng dẫn");
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
                <Button onClick={handleClassify} variant="contained">
                  Phân loại
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
          <Title title="Tất cả công văn" />

          <ListDispatch data={imageData} />
        </>
      }
    />
  );
};

export default DispatchList;
