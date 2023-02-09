import { GrProjects, GrSettingsOption } from "react-icons/gr";
import { BiBookContent, BiChat, BiHelpCircle, BiNotification, BiPhoneCall, BiUserPlus, BiVideo } from "react-icons/bi";
const sidebarData = [
  {
    id: 1,
    name: "Projects",
    icon: <GrProjects fontSize={18} />,
    link: "/projects",
  },
  {
    id: 3,
    name: "Contents",
    icon: <BiBookContent fontSize={18} />,
    link: "/contents",
  },
  {
    id: 4,
    name: "Chat",
    icon: <BiChat fontSize={18} />,
    link: "/chats",
  },
  {
    id: 5,
    name: "Call",
    icon: <BiPhoneCall fontSize={18} />,
    link: "/calls",
  },
  {
    id: 6,
    name: "Video",
    icon: <BiVideo fontSize={18} />,
    link: "/contents",
  },
  {
    id: 7,
    name: "Peoples",
    icon: <BiUserPlus fontSize={18} />,
    link: "/contents",
  },
  {
    id: 8,
    name: "Setting",
    icon: <GrSettingsOption fontSize={18} />,
    link: "/settings",
  },
  {
    id: 9,
    name: "Help",
    icon: <BiHelpCircle fontSize={18} />,
    link: "/contents",
  },
  {
    id: 10,
    name: "FAQ",
    icon: <BiNotification fontSize={18} />,
    link: "/contents",
  },
];

export default sidebarData;
