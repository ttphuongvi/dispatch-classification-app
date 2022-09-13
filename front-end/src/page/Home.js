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
import axios from "axios";

export const DEFAULT_IMG = "https://www.chanchao.com.tw/VTG/images/default.jpg";

const DispatchList = () => {
  const [open, setOpen] = React.useState(false);
  const [imageFile, setImageFile] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("documentary", imageFile);
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/documentary`, formData).then(res => {
      // eslint-disable-next-line default-case
      switch (res.data.category_id) {
        case 1: 
                alert('Phân loại thành công! Công văn thuộc loại công văn hướng dẫn')
                break;
        case 2: 
                alert('Phân loại thành công! Công văn thuộc loại công văn giải thích')
                break;
        case 3: 
                alert('Phân loại thành công! Công văn thuộc loại công văn chỉ đạo')
                break;
        case 4: 
                alert('Phân loại thành công! Công văn thuộc loại công văn đôn đốc, nhắc nhở')
                break;
        case 5: 
                alert('Phân loại thành công! Công văn thuộc loại công văn đề nghị, yêu cầu')
                break;
        case 6: 
                alert('Phân loại thành công! Công văn thuộc loại Công văn phúc đáp')
                break;
        case 7: 
                alert('Phân loại thành công! Công văn thuộc loại công văn xin ý kiến')
                break;
      }
    })
    handleClose();
  };

  const dataList = JSON.parse(localStorage.getItem("list_all_dispatch"));

  const imageData = getImage(dataList, "Công văn");
  return (
    <TemplatePage
      content={
        <>
          <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleClickOpen}>
              Phân loại công văn
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <form
                id="myForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <DialogTitle>Phân loại công văn</DialogTitle>
                <DialogContent>
                  <TextField
                    variant="outlined"
                    name="documentary"
                    autoFocus
                    margin="dense"
                    onChange={onImageChange}
                    type="file"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClose}
                  >
                    Hủy
                  </Button>
                  <Button
                    type="submit"
                    // onClick={handleClassify}
                    variant="contained"
                  >
                    Phân loại
                  </Button>
                </DialogActions>
              </form>
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
