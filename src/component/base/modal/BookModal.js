import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../../containers/Book/actions";

export default function BookModal({ isOpen, setOpen }) {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: {
      value: "",
      isError: false,
    },
    author: {
      value: "",
      isError: false,
    },
    parts: {
      value: "",
      isError: false,
    },
    category: {
      value: "",
      isError: false,
    },
  });
  const handleClose = (value) => {
    setOpen(false);
  };

  const handlerSubmit = (value) => {
    const data = {
      title: bookData.title.value,
      author: bookData.author.value,
      parts: bookData.parts.value,
      category: bookData.category.value,
    };
    if (data.title !== '' && data.author !== '' && data.parts && data.author) {
      dispatch(createBook(data));
      setOpen(false);
    }
      
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newBookData = {
      ...bookData,
      [name]: {
        ...bookData[name],
        value: value,
      },
    };
    setBookData(newBookData);
  };

  const checkBookDataValid = (event) => {
    const { name, value } = event.target;
    if (value && value === "") {
      const newBookData = {
        ...bookData,
        [name]: {
          ...bookData[name],
          isError: true,
        },
      };
      setBookData(newBookData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newBookData = {
      ...bookData,
      [name]: {
        ...bookData[name],
        isError: false,
      },
    };
    setBookData(newBookData);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth={"md"} fullWidth>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h2>Tạo mới</h2>

        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Tiêu đề"
          name="title"
          autoComplete="title"
          autoFocus
          onBlur={checkBookDataValid}
          onFocus={onFocusHandler}
          value={bookData.title.value}
          error={bookData.title.isError}
          onChange={onChangeInputHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="author"
          label="Tác giả"
          name="author"
          autoComplete="author"
          autoFocus
          onBlur={checkBookDataValid}
          onFocus={onFocusHandler}
          value={bookData.author.value}
          error={bookData.author.isError}
          onChange={onChangeInputHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="parts"
          label="Số chương"
          name="parts"
          autoComplete="parts"
          autoFocus
          type="number"
          onBlur={checkBookDataValid}
          onFocus={onFocusHandler}
          value={bookData.parts.value}
          error={bookData.parts.isError}
          onChange={onChangeInputHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="category"
          label="Thể loại"
          name="category"
          autoComplete="category"
          autoFocus
          type="number"
          onBlur={checkBookDataValid}
          onFocus={onFocusHandler}
          value={bookData.category.value}
          error={bookData.category.isError}
          onChange={onChangeInputHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <Button variant="text" onClick={() => handleClose(true)}>
          Hủy
        </Button>
        <Button variant="text" onClick={() => handlerSubmit(true)}>
          Ok
        </Button>
      </div>
    </Dialog>
  );
}
