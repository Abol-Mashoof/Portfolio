import {
  BungalowRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
  MessageRounded,
} from "@mui/icons-material";

const TabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const dataSidebar = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <BungalowRounded />, ...TabProps },
    { label: "درباره من", icon: <FaceRounded />, ...TabProps },
    { label: "رزومه من", icon: <TextSnippetRounded />, ...TabProps },
    { label: "نمونه کارها", icon: <TerminalRounded />, ...TabProps },
    { label: "نظرات", icon: <MessageRounded />, ...TabProps },
    { label: "کانکشن", icon: <ConnectWithoutContactRounded />, ...TabProps },
  ];
  return tabs;
};
