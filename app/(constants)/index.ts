import hero_1_sm from "../../public/hero/hero-1-sm.jpg";
import hero_1_md from "../../public/hero/hero-1-md.jpg";
import hero_1_lg from "../../public/hero/hero-1-lg.jpg";
import hero_2_sm from "../../public/hero/hero-2-sm.jpg";
import hero_2_md from "../../public/hero/hero-2-md.jpg";
import hero_2_lg from "../../public/hero/hero-2-lg.jpg";
import hero_3_sm from "../../public/hero/hero-3-sm.png";
import hero_3_md from "../../public/hero/hero-3-md.png";
import hero_3_lg from "../../public/hero/hero-3-lg.png";
import hero_4_sm from "../../public/hero/hero-4-sm.png";
import hero_4_md from "../../public/hero/hero-4-md.png";
import hero_4_lg from "../../public/hero/hero-4-lg.png";
import connectivity_1_sm from "../../public/connectivity/1sm.jpg";
import connectivity_1_md from "../../public/connectivity/1md.jpg";
import connectivity_1_lg from "../../public/connectivity/1lg.jpg";
import connectivity_2_sm from "../../public/connectivity/2sm.jpg";
import connectivity_2_md from "../../public/connectivity/2md.jpg";
import connectivity_2_lg from "../../public/connectivity/2lg.jpg";
import connectivity_3_sm from "../../public/connectivity/3sm.jpg";
import connectivity_3_md from "../../public/connectivity/3md.jpg";
import connectivity_3_lg from "../../public/connectivity/3lg.jpg";
import connectivity_4_sm from "../../public/connectivity/4sm.jpg";
import connectivity_4_md from "../../public/connectivity/4md.jpg";
import connectivity_4_lg from "../../public/connectivity/4lg.jpg";
import connectivity_5_sm from "../../public/connectivity/5sm.jpg";
import connectivity_5_md from "../../public/connectivity/5md.jpg";
import connectivity_5_lg from "../../public/connectivity/5lg.jpg";
import connectivity_6_sm from "../../public/connectivity/6sm.jpg";
import connectivity_6_md from "../../public/connectivity/6md.jpg";
import connectivity_6_lg from "../../public/connectivity/6lg.jpg";
import airpods_2_compare from "../../public/compare/airpods_2nd_gen.png";
import airpods_3_compare from "../../public/compare/airpods_3rd_gen.png";
import airpods_pro_compare from "../../public/compare/airpods_pro.png";
import airpods_max_compare from "../../public/compare/airpods_max.png";
import airpods_2_case from "../../public/compare/icon_airpods_2nd_gen.png";
import airpods_3_case from "../../public/compare/icon_airpods_3rd_gen.png";
import airpods_pro_case from "../../public/compare/icon_airpods_3rd_gen.png";
import airpods_max_case from "../../public/compare/icon_airpods_max.png";

import delivery from "../../public/purchaseinfo/delivery.svg";
import engrave from "../../public/purchaseinfo/engrave.svg";
import get_help from "../../public/purchaseinfo/get_help.svg";
import save from "../../public/purchaseinfo/save.svg";
import {
  Airpods2Icon,
  Airpods3Icon,
  AirpodsMaxIcon,
  AirpodsProIcon,
  CompareAirpodsIcon,
  MusicIcon,
} from "app/(components)/Icons";
export const chapterNav = [
  {
    title: "AirPods",
    subtitle: "2nd Generation",
    icon: Airpods2Icon,
  },
  {
    title: "AirPods",
    subtitle: "3rd Generation",
    icon: Airpods3Icon,
  },
  {
    title: "AirPods Pro",
    subtitle: "2nd Generation",
    icon: AirpodsProIcon,
  },
  {
    title: "AirPods Max",
    subtitle: "",
    icon: AirpodsMaxIcon,
  },
  {
    title: "Compare",
    subtitle: "",
    icon: CompareAirpodsIcon,
  },
  {
    title: "Apple Music",
    subtitle: "",
    icon: MusicIcon,
  },
];

export const navLinks = [
  {
    title: "Store",
    id: "store",
    delayOpen: "delay-[330ms]",
    delayClose: "delay-[60ms]",
  },
  {
    title: "Mac",
    id: "mac",
    delayOpen: "delay-[300ms]",
    delayClose: "delay-[90ms]",
  },
  {
    title: "iPad",
    id: "ipad",
    delayOpen: "delay-[270ms]",
    delayClose: "delay-[120ms]",
  },
  {
    title: "iPhone",
    id: "iphone",
    delayOpen: "delay-[240ms]",
    delayClose: "delay-[150ms]",
  },
  {
    title: "Watch",
    id: "watch",
    delayOpen: "delay-[210ms]",
    delayClose: "delay-[180ms]",
  },
  {
    title: "AirPods",
    id: "airpods",
    delayOpen: "delay-[180ms]",
    delayClose: "delay-[210ms]",
  },
  {
    title: "TV & Home",
    id: "tv",
    delayOpen: "delay-[150ms]",
    delayClose: "delay-[240ms]",
  },
  {
    title: "Only on Apple",
    id: "only-on-apple",
    delayOpen: "delay-[120ms]",
    delayClose: "delay-[270ms]",
  },
  {
    title: "Accessories",
    id: "accessories",
    delayOpen: "delay-[90ms]",
    delayClose: "delay-[300ms]",
  },
  {
    title: "Support",
    id: "support",
    delayOpen: "delay-[60ms]",
    delayClose: "delay-[330ms]",
  },
];

export const HeroData = [
  {
    id: 1,
    title: "AirPods Pro",
    subtitle: "Share the joy",
    price: "$249",
    img: [hero_1_sm, hero_1_md, hero_1_lg],
  },
  {
    id: 2,
    title: "AirPods",
    subtitle: "3rd generation",
    price: "From $169",
    img: [hero_2_sm, hero_2_md, hero_2_lg],
  },
  {
    id: 3,
    title: "AirPods",
    subtitle: "2nd generation",
    price: "$129",
    img: [hero_3_sm, hero_3_md, hero_3_lg],
  },
  {
    id: 4,
    title: "AirPods Max",
    subtitle: "",
    price: "$549",
    img: [hero_4_sm, hero_4_md, hero_4_lg],
  },
];

export const ConnectivityData = [
  {
    id: 1,
    title: "One-tap setup",
    img: [connectivity_1_sm, connectivity_1_md, connectivity_1_lg],
    description: "Connect immediately to your iPhone or iPad.",
  },
  {
    id: 2,
    title: "Personalized Spatial Audio",
    img: [connectivity_2_sm, connectivity_2_md, connectivity_2_lg],
    description:
      "Personalized Spatial Audio plays three-dimensional sound tuned for your specific ear shape — across all your devices.",
  },
  {
    id: 3,
    title: "Audio Sharing",
    img: [connectivity_3_sm, connectivity_3_md, connectivity_3_lg],
    description:
      "Share a song, podcast, or other audio between two sets of AirPods with Audio Sharing.",
  },
  {
    id: 4,
    title: "Automatic switching",
    img: [connectivity_4_sm, connectivity_4_md, connectivity_4_lg],
    description:
      "Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV.",
  },
  {
    id: 5,
    title: "Siri",
    img: [connectivity_5_sm, connectivity_5_md, connectivity_5_lg],
    description:
      "A simple “Hey Siri” summons your favorite personal assistant. Control your music, calls, volume, directions, and more — without lifting a finger.",
  },
  {
    id: 6,
    title: "Accessiblity",
    img: [connectivity_6_sm, connectivity_6_md, connectivity_6_lg],
    description:
      "AirPods are loaded with features to assist with select hearing needs, from focusing on the voice in front of you in noisy surroundings to amplifying the frequencies you may need to hear more clearly.",
  },
];

export const CompareData = [
  {
    id: 1,
    title: "AirPods",
    subtitle: "2nd generation",
    price: "$129",
    charge: 5,
    features: {
      spatialAudio: false,
      noiseCancelling: false,
      waterProof: false,
      case: true,
    },
    img: airpods_2_compare,
    case: airpods_2_case,
    caseDescription: "Lightning Charging Case",
  },
  {
    id: 2,
    title: "AirPods",
    subtitle: "3nd generation",
    price: "$169",
    charge: 6,
    features: {
      spatialAudio: true,
      noiseCancelling: false,
      waterProof: true,
      case: true,
    },
    img: airpods_3_compare,
    case: airpods_3_case,
    caseDescription: "Lightning Charging Case or MagSafe Charging Case",
  },
  {
    id: 3,
    title: "AirPods Pro",
    subtitle: "2nd generation",
    price: "$249",
    charge: 6,
    features: {
      spatialAudio: true,
      noiseCancelling: true,
      waterProof: true,
      case: true,
    },
    img: airpods_pro_compare,
    case: airpods_pro_case,
    caseDescription: "MagSafe Charging Case with speaker and lanyard loop",
  },
  {
    id: 4,
    title: "AirPods Max",
    subtitle: `\u00A0`,
    price: "$549",
    charge: 20,
    features: {
      spatialAudio: true,
      noiseCancelling: true,
      waterProof: false,
      case: true,
    },
    img: airpods_max_compare,
    case: airpods_max_case,
    caseDescription: "Smart Case",
  },
];

export const PurchaseInfo = [
  {
    id: 1,
    title: "Fast, free delivery",
    subtitle: "Or pick up available items at an Apple Store",
    img: delivery,
  },
  {
    id: 2,
    title: "Save 5% with a new Apple Card",
    subtitle:
      "Shop for Apple products in store or online now through 12/25. Exclusions and terms apply",
    img: save,
  },
  {
    id: 3,
    title: "Get help buying",
    subtitle:
      "Have a quesiton? Call a Specialist or chat online. Call 1-800-MY-APPLE",
    img: get_help,
  },
  {
    id: 4,
    title: "Make the yours",
    subtitle:
      "Engrave your airpods with your initials or favourite emoji - free. Only at Apple",
    img: engrave,
  },
];

export const BreadCrumbsData = [
  [
    {
      title: "Shop and Learn",
      subtitles: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
  ],
  [
    {
      title: "Services",
      subtitles: [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "Apple News+",
        "Apple Arcade",
        "iCloud",
        "Apple One",
        "Apple Card",
        "Apple Books",
        "Apple Podcasts",
        "App Stores",
      ],
    },
    {
      title: "Account",
      subtitles: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    },
  ],
  [
    {
      title: "Apple Store",
      subtitles: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Refurbished and Clearance",
        "Financing",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
      ],
    },
  ],
  [
    {
      title: "For Business",
      subtitles: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      subtitles: ["Apple and Education", "Shop for K-12", "Shop for College"],
    },
    {
      title: "For Healthcare",
      subtitles: [
        "Apple in Healthcare",
        "Health on Apple Watch",
        "Health Records on iPhone",
      ],
    },
    {
      title: "For Government",
      subtitles: ["Shop for Government", "Shop for Veterans and Military"],
    },
  ],
  [
    {
      title: "Apple Values",
      subtitles: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supplier Responsibility",
      ],
    },
    {
      title: "About Apple",
      subtitles: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ],
];

export const FooterLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "Site Map",
];

export const QuickLinks = [
  {
    title: "Holiday Gifts",
    delayOpen: "delay-[420ms]",
    delayClose: "delay-[500ms]",
  },
  {
    title: "Visit an Apple Store FAQ",
    delayOpen: "delay-[440ms]",
    delayClose: "delay-[480ms]",
  },
  {
    title: "Apple Gift Card",
    delayOpen: "delay-[460ms]",
    delayClose: "delay-[460ms]",
  },
  {
    title: "AirPods",
    delayOpen: "delay-[480ms]",
    delayClose: "delay-[440ms]",
  },
  {
    title: "AirTag",
    delayOpen: "delay-[500ms]",
    delayClose: "delay-[420ms]",
  },
];
