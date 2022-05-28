import { Autocomplete, Button, TextField } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import React, { useEffect, useState } from "react";
import "./ClientForm.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

function ClientForm() {
  const [style, setStyle] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [placement, setPlacement] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  }, [file]);

  const Input = styled("input")({
    display: "none",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStyle("");
    setName("");
    setFile(null);
    setPlacement("");
    setText("");
  };

  const tattooStyles = [
    { label: "Traditional" },
    { label: "Neo Traditional" },
    { label: "Traditional" },
    { label: "Fine Line" },
    { label: "Tribal" },
    { label: "Watercolor" },
    { label: "Blackwork" },
    { label: "Color Realism" },
    { label: "Japanese" },
    { label: "Trash Polka" },
    { label: "Geometric" },
    { label: "Black & Grey Realism" },
    { label: "Micro" },
    { label: "Cartoon" },
    { label: "Continuous Line Contour" },
    { label: "Portrait" },
    { label: "Pet and Animal" },
  ];

  return (
    <div className="client-form">
      <div className="form">
        <h1>Tattoo Inquiry</h1>
        <div className="name">
          <TextField
            sx={{ input: { color: " " } }}
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            color="primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="phonenumber">
          <TextField
            sx={{ input: { color: " " } }}
            helperText="Please your phone number"
            id="demo-helper-text-aligned"
            label="Phone Number"
            color="primary"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="style">
          <Autocomplete
            disablePortal
            defaultValue={style}
            inputValue={style}
            onInputChange={(_, style) => {
              setStyle(style);
            }}
            id="combo-box-demo"
            options={tattooStyles}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: " " } }}
                {...params}
                label="Tattoo Style"
              />
            )}
          />
        </div>

        <div className="reference">
          {imageUrl && file && (
            <Box mt={2} textAlign="center">
              <img src={imageUrl} alt={file.name} width="75%" />
            </Box>
          )}
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button variant="contained" component="span" color="primary">
              <p>Reference Photo</p>
              <PhotoCameraIcon />
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
        <div className="placement">
          <TextField
            sx={{ input: { color: " " } }}
            helperText="Where do you want it on your body?"
            id="demo-helper-text-aligned"
            label="Placement"
            color="primary"
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
          />
        </div>
        <div className="add-comments">
          <TextField
            sx={{ input: { color: " " } }}
            helperText="Add any additional comments?"
            id="demo-helper-text-aligned"
            label="Additional comments"
            color="primary"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="submit">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
