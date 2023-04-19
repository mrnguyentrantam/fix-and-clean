import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DialogTitle from "@mui/material/DialogTitle";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { MuiTelInput } from "mui-tel-input";
import { auth } from "utils/initAuth";
import { getAuth } from "@firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Menu from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import LoginForm from "@/components/Login";

export default function PageLogin() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [otpCode, setOtp] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const loginPhoneNumber = async () => {
    if (phone == "") {
      setErrorPhone("Vui lòng nhập SĐT");
      return;
    }

    setErrorPhone("");

    setOpen(true);
    // console.log(phone)
    // const appVerifier = (window as any).recaptchaVerifier;

    // const auth = getAuth();
    // const confirmationResult = await signInWithPhoneNumber(
    //   auth,
    //   phone,
    //   appVerifier
    // );
    // (window as any).confirmationResult = confirmationResult;
  };
  const confirmOtp = async () => {
    // (window as any).confirmationResult
    //   .confirm(otpCode)
    //   .then((result: { user: any; }) => {
    //     console.log(result);
    //     // User signed in successfully.
    //     const user = result.user;
    //     setOpen(false);
    //     // ...
    //   })
    //   .catch(() => {
    //     setErrorPhone('Mã OTP không chính xác');
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //   }); // ...
  };

  return (
    <>
      <style>{`
        #muitel fieldset {
          border: none;
        }
      `}</style>
      <Menu />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "warning.main",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <LoginForm />
                {/* <img src='https://oddjob.vn/assets/images/man_woman_fridge.svg' /> */}
                <div>
                  <Box sx={{ fontWeight: "bold", fontSize: 16 }} mt={3}>
                    <h3>Title 1</h3>
                  </Box>
                  <Box sx={{ fontSize: 14 }} mt={1}>
                    <p>Description 1</p>
                  </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "warning.main",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://oddjob.vn/assets/images/man_map.svg"
                  width={"80%"}
                />
                <div>
                  <Box sx={{ fontWeight: "bold", fontSize: 16 }} mt={3}>
                    <h3>Title 1</h3>
                  </Box>
                  <Box sx={{ fontSize: 14 }} mt={1}>
                    <p>Description 1</p>
                  </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "warning.main",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src="https://oddjob.vn/assets/images/chat-people-group.svg" />
                <div>
                  <Box sx={{ fontWeight: "bold", fontSize: 16 }} mt={3}>
                    <h3>Title 1</h3>
                  </Box>
                  <Box sx={{ fontSize: 14 }} mt={1}>
                    <p>Description 1</p>
                  </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "warning.main",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Đăng nhập
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Đăng nhập bằng số điện thoại
                  </Typography>
                  <Box id="muitel">
                    <MuiTelInput
                      onlyCountries={["VN"]}
                      value={phone}
                      onChange={(value) => {
                        setPhone(value);
                      }}
                      defaultCountry="VN"
                      style={{
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: "16px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    mt={1}
                    color={"#fff"}
                    gutterBottom
                  >
                    {errorPhone}
                  </Typography>
                  <Box mt={1} overflow={"hidden"} borderRadius={"5px"}>
                    <Button
                      id="sign-in-button"
                      variant="contained"
                      onClick={loginPhoneNumber}
                      fullWidth
                    >
                      Đăng nhập
                    </Button>
                  </Box>
                  <Divider style={{ marginTop: "1rem", color: "#fff" }}>
                    Hoặc
                  </Divider>
                  <Button
                    variant="contained"
                    fullWidth
                    color="error"
                    startIcon={<GoogleIcon />}
                    style={{
                      justifyContent: "flex-start",
                      backgroundColor: "black",
                      marginTop: "1rem",
                    }}
                  >
                    Đăng nhập bằng Google
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    color="error"
                    startIcon={<FacebookIcon />}
                    style={{
                      justifyContent: "flex-start",
                      backgroundColor: "black",
                      marginTop: "1rem",
                    }}
                  >
                    Đăng nhập bằng Facebook
                  </Button>
                </Box>
                <Box mt={3}>
                  <Typography variant="body2" textAlign={"center"} gutterBottom>
                    Tải app để tạo tài khoản
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <img
                        src="https://oddjob.vn/assets/images/appstore.svg"
                        alt="app store"
                        width={"100%"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <img
                        src="https://oddjob.vn/assets/images/googleplay.svg"
                        alt="app store"
                        width={"100%"}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Nhập mã xác minh"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Mã xác minh đã được nhắn tin đến số điện thoại của bạn.<br></br>
            Hãy nhập mã vào đây:
            <Box mt={2} mb={2}>
              <TextField
                type={"number"}
                id="standard-error-helper-text"
                label="Mã OTP"
                helperText=""
                variant="standard"
                onChange={(value: any) => {
                  setPhone(value);
                }}
              />
            </Box>
            <Button onClick={loginPhoneNumber}>Gửi lại</Button>
            <p>{errorPhone}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button variant="contained" onClick={confirmOtp}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
      <FooterComponent />
    </>
  );
}
