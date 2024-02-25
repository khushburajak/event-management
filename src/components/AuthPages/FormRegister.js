import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// style
const FormStyle = styled("form")(({ theme }) => ({
  // root style
  marginTop: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(3),

  // input style
  "& label.Mui-focused": {
    color: theme.palette.success.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.success.main,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.success.main,
    },
  },

  // error
  "& .Mui-error.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.error.light,
    },
  },
  "& label.Mui-error.Mui-focused": {
    color: theme.palette.error.light,
  },

  // Button style
  "& .MuiButton-contained": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    textTransform: "capitalize",
    padding: theme.spacing(1.25),
    boxShadow: `rgb(0 171 85 / 24%) 0px 8px 16px 0px`,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      boxShadow: "none",
    },
  },
}));

const FormRegister = () => {
  const [showPassword, setShowPassord] = useState(false);
  const handleTogglePassword = () => setShowPassord(!showPassword);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // submit
  const Register = async (e) => {
    // stop the form from reloading the page on submit
    e.preventDefault();

    const data = {
      username,
      name,
      email,
      password,
    };

    try {
      await axios
        .post("http://localhost:5000/users/api/register", data)
        .then((res) => {
          if (res.data.success === true) {
            console.log(res);
            alert("User Registered Successfully!\n Check your email for verification\n And then login");
          } else {
            alert("User Registration failed");
          }
        });
    } catch (err) {
        alert(err);
    }
  };

  return (
    <FormStyle component="form">
      {/* Names box */}

      <TextField
        variant="outlined"
        fullWidth
        type="text"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* Username Names box */}

      <TextField
        variant="outlined"
        fullWidth
        type="text"
        label="User Name"
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* email */}
      <TextField
        variant="outlined"
        fullWidth
        type="email"
        label="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* password */}
      <TextField
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleTogglePassword}>
                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* submit */}
      <Button
        type="submit"
        variant="contained"
        disableElevation
        onClick={Register}
      >
        Register
      </Button>
    </FormStyle>
  );
};

export default FormRegister;
