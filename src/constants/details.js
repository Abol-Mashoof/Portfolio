import {
  Coffee,
  SchoolRounded,
  DataObjectRounded,
  DomainVerificationRounded,
  HeartBrokenRounded,
} from "@mui/icons-material";

import userAvatar from "../assets/user.png";

export const devWorkInfo = [
  {
    tooltipTitle: "تعداد قهوه های خورده شده",
    icon: <Coffee />,
    total: 4551,
    color: "lightcoral",
  },
  {
    tooltipTitle: "تعداد دوره های دیده شده",
    icon: <SchoolRounded />,
    total: 18,
    color: "lightskyblue",
  },
  {
    tooltipTitle: "تعداد پروژه های من",
    icon: <DataObjectRounded />,
    total: 4,
    color: "lightslategray",
  },
  {
    tooltipTitle: "تعداد پروژه های به پایان رسیده",
    icon: <DomainVerificationRounded />,
    total: 12,
    color: "lightseagreen",
  },
];

export const devEdu = [
  {
    year: "۱۴۰۰ - ۱۴۰۲",
    cert: "دیپلم",
    major: "رشته کامپیوتر گرایش نرم افزار",
    place: "فنی حرفه ایی دبیرستان ابن سینا",
  },
  {
    year: "۱۴۰۲ - ...",
    cert: "کاردانی",
    major: "رشته کامپیوتر گرایش نرم افزار",
    place: "دانشگاه آزاد اسلامی",
  },
];
export const devExp = [
  {
    year: "۱۴۰۰ - ۱۴۰۱ ",
    cert: "دوره ی چهار فصل",
    major: "فرانت اند - بک اند - شبکه - امنیت",
    place: "آکادمی MA Team زیر نظر مدرس کریمی",
  },
  {
    year: "۱۴۰۰ - ۱۴۰۱ ",
    cert: "تجربه ی کار تیمی",
    major: "فرانت اند - بک اند",
    place: "آکادمی MA Team",
  },
  {
    year: "۱۴۰۱ - ۱۴۰۲",
    cert: "تاپ لرن",
    major: "جاوا اسکریپت",
    place: "زیر نظر یکی از بهترین های حرفه ی خودش مداینی",
  },
  {
    year: "۱۴۰۱ - ۱۴۰۲",
    cert: "تاپ لرن",
    major: "دوره ی فوق الاده ی ری اکت",
    place: "زیر نظر استاد پر انرژی و خوبم یونس قربانی",
  },
];

export const userComments = [
  {
    fullname: "ابوالفضل مشعوف",
    jobTitle: "برنامه نویس و دانشجوی گرافیک و نرم افزار",
    avatar: userAvatar,
    comment: ` حضور ذهن ندارم نظر مثبتی دریافت کرده باشم بیشتر نظرات منفی و سنگ اندازی جلوی پام بوده و همین من و قوی تر و قوی تر کرده`,
    admin: `Designed with love`,
    icon: <HeartBrokenRounded />,
  },
];
