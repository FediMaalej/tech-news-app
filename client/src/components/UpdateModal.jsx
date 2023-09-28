import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="update_btn">
      <Button onClick={handleOpen}>Update Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
          <TextField id="outlined-basic" label="Content" variant="outlined" onChange={(e) => setContent(e.target.value)} />
          <TextField id="outlined-basic" label="ImageUrl" variant="outlined" onChange={(e) => setImage(e.target.value)}/>
          <Button variant="contained" onClick={() => {props.updateArticleData(props.article.id, {title, content, image}); setOpen(false)}}>UPDATE POST</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateModal;
