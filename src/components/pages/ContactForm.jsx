import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validation/contactValidation";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
const ContactForm = () => {
  const theme = useTheme();

  const contactInputName = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputName,
    onSubmit: (values) => {
      console.log("form values :", values);
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container spacing={2} sx={{ direction: "ltr" }}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              color="warning"
              focused
              label="اسمتو بده"
              name="fullName"
              variant="outlined"
              helperText={
                formik.touched.fullName ? formik.errors.fullName : null
              }
              error={Boolean(formik.touched.fullName && formik.errors.fullName)}
              value={formik.values?.fullName}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Face6Rounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} md={6} sx={{ direction: "ltr" }}>
            <TextField
              fullWidth
              size="small"
              color="warning"
              label="ادرس ایمیلتو بده"
              name="email"
              variant="outlined"
              helperText={formik.touched.email ? formik.errors.email : null}
              error={Boolean(formik.touched.email && formik.errors.email)}
              value={formik.values?.email}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} md={12} sx={{ direction: "ltr" }}>
            <TextField
              fullWidth={true}
              size="small"
              color="warning"
              label="عنوان"
              name="subject"
              variant="outlined"
              helperText={formik.touched.subject ? formik.errors.subject : null}
              error={Boolean(formik.touched.subject && formik.errors.subject)}
              value={formik.values?.subject}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SubjectRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} md={12} sx={{ direction: "ltr" }}>
            <TextField
              fullWidth
              size="small"
              color="warning"
              multiline
              rows={6}
              label="متن پیام"
              name="message"
              helperText={formik.touched.message ? formik.errors.message : null}
              error={Boolean(formik.touched.message && formik.errors.message)}
              value={formik.values?.message}
              onChange={formik.handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}>
          ارسال من
        </Button>
      </CardActions>
    </form>
  );
};
export default ContactForm;
