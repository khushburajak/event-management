import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";



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

  // checkbox style
  "& .MuiCheckbox-root": {
    color: theme.palette.success.light,
  },
  "& .Mui-checked": {
    color: theme.palette.success.main,
  },

  // forgot link style
  "& a": {
    color: theme.palette.success.main,
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.success.light,
    },
  },

  // button style
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

const FormLogin = () => {
  const [showPassword, setShowPassord] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  const handleTogglePassword = () => setShowPassord(!showPassword);

  // hook form
  const {
    
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      rememberUser: true,
    },
  });


  // form submit

  const LoginUser = async (e) => {
    try {
e.preventDefault(); 
// stop the form from reloading the page
      const data = {
        username: username,
        password: password,
      };
      await axios
        .post("http://localhost:5000/users/api/authenticate", data)
        .then((res) => {
          if (res.data.token) {
          console.log(res);

            var token = res.data.token; 
            console.log(token);
            localStorage.setItem("token", token);
            window.location.replace("/dashboard");
          }
          useFormState.reset();
          setUsername("");
          setPassword("");
          res.data.success === true
            ? alert("User logged in successfully")
            : alert("User login failed");
          // setSuccess(true);
        });
    } catch (err) {
      if(err === "  Request failed with status code 401"){
        alert("Verify your Account With Email in Your Email Account");
      }
      }
    }
  

 

  return (
    <FormStyle component="form">
      {/* UserName */}
      <TextField
        variant="outlined"
        fullWidth
        type="username"
        label="Username"
        error={errors.username ? true : false}
        helperText={errors.username && "Enter a valid username"}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Password */}
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
        error={errors.password ? true : false}
        helperText={
          errors.password && "Enter a valid password (5-15 characters)"
        }
        onChange={(e) => setPassword(e.target.value)}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox className="ckbox" />}
          label="Remember me"
        />

        <Link to="/reset-password" component={RouterLink}  underline="always">
          Forgot password?
        </Link>
        
      </Box>

      <Button
        type="submit"
        variant="contained"
        disableElevation
        onClick={LoginUser}
      >
        Login
      </Button>
    </FormStyle>
  );
};

export default FormLogin;
  