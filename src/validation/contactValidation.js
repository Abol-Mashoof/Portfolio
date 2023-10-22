import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  email: Yup.string()
    .email("ادرس ایمیل معتبر نیست")
    .required("ادرس ایمیل الزامی میباشد"),
  subject: Yup.string().required("قرار دادن عنوانی برای پیام الزامیست"),
  message: Yup.string().required("نوشتن پیام الزامیست"),
  recaptcha: Yup.string().required("کپتچا الزامیست"),
});
