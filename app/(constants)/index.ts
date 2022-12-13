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
import connectivity1 from "../../public/connectivity/1.jpg";
import connectivity2 from "../../public/connectivity/2.jpg";
import connectivity3 from "../../public/connectivity/3.jpg";
import connectivity4 from "../../public/connectivity/4.jpg";
import connectivity5 from "../../public/connectivity/5.jpg";
import connectivity6 from "../../public/connectivity/6.jpg";
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

export const Connectivity = [
  {
    id: 1,
    title: "One-tap setup",
    img: connectivity1,
    description: "Connect immediately to your iPhone or iPad.",
  },
  {
    id: 2,
    title: "Personalized Spatial Audio",
    img: connectivity2,
    description:
      "Personalized Spatial Audio plays three-dimensional sound tuned for your specific ear shape — across all your devices.",
  },
  {
    id: 3,
    title: "Audio Sharing",
    img: connectivity3,
    description:
      "Share a song, podcast, or other audio between two sets of AirPods with Audio Sharing.",
  },
  {
    id: 4,
    title: "Automatic switching",
    img: connectivity4,
    description:
      "Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV.",
  },
  {
    id: 5,
    title: "Siri",
    img: connectivity5,
    description:
      "A simple “Hey Siri” summons your favorite personal assistant. Control your music, calls, volume, directions, and more — without lifting a finger.",
  },
  {
    id: 6,
    title: "Accessiblity",
    img: connectivity6,
    description:
      "AirPods are loaded with features to assist with select hearing needs, from focusing on the voice in front of you in noisy surroundings to amplifying the frequencies you may need to hear more clearly.",
  },
];

export const Compare = [
  {
    id: 1,
    title: "AirPods",
    subtitle: "2nd generation",
    price: "$129",
    new: false,
    charge: 5,
    features: {
      spatialAudio: false,
      noiseCancelling: false,
      waterProof: false,
      case: true,
    },
  },
  {
    id: 2,
    title: "AirPods",
    subtitle: "3nd generation",
    price: "$169",
    new: false,
    charge: 6,
    features: {
      spatialAudio: true,
      noiseCancelling: false,
      waterProof: true,
      case: true,
    },
  },
  {
    id: 3,
    title: "AirPods Pro",
    subtitle: "2nd generation",
    price: "$249",
    new: true,
    charge: 6,
    features: {
      spatialAudio: true,
      noiseCancelling: true,
      waterProof: true,
      case: true,
    },
  },
  {
    id: 4,
    title: "AirPods Max",
    subtitle: "",
    price: "$549",
    new: false,
    charge: 20,
    features: {
      spatialAudio: true,
      noiseCancelling: true,
      waterProof: false,
      case: true,
    },
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

export const FootNote = `* New subscribers only. $10.99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.
The following purchases with Apple Card are ineligible to earn 5% back: monthly financing through Apple Card Monthly Installments, Apple iPhone Payments, the iPhone Upgrade Program, and wireless carrier financing plans; Apple Media Services; AppleCare+ monthly payments. Subject to credit approval. Valid only on qualifying purchases in U.S. for new Apple Card customers who open an account and use it from 12/1/22 to 12/25/22 at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do not qualify. New Apple Card users added to an Apple Card Family account opened during offer period can earn 5% back on their own purchases. For Apple Card Family co-owners and participants, bonus Daily Cash will be disbursed within 7 days of your qualifying purchase. Not valid for existing Apple Card users who merge their Apple Card accounts to become Co-Owners. 5% is total amount of Daily Cash that can be earned for qualifying Apple purchases using Apple Card. Returning qualified items that were purchased during offer period may impact your cash back. 5% savings is earned as Daily Cash and transferred to your Apple Cash card when transactions post to your Apple Card account. If you do not have an Apple Cash card, Daily Cash can be applied by you as a credit on your statement balance. See the Apple Card Customer Agreement for more details on Daily Cash and qualifying transactions. Changes to your account status during offer period may delay the fulfillment of your Daily Cash bonus.
Requires an iCloud account and a compatible Apple device running the latest operating system software.
Compatible hardware and software required. Works with compatible content in supported apps. Not all content available in Dolby Atmos. iPhone with TrueDepth camera required to create a personal profile for Spatial Audio, which will sync across Apple devices running the latest operating system software, including iOS, iPadOS (coming later this fall), macOS (coming later this fall), and tvOS.
Works with iPhone 8 or later and iPod touch (7th generation) with the latest version of iOS; 12.9-inch iPad Pro (2nd generation or later), 11-inch iPad Pro, 10.5-inch iPad Pro, iPad (5th generation or later), iPad Air (3rd generation or later), and iPad mini (5th generation or later) with the latest version of iPadOS; and Apple TV 4K with the latest version of tvOS.
AirPods (3rd generation) and AirPods Pro (2nd generation) are sweat and water resistant for non-water sports and exercise, and they are IPX4 rated. Sweat and water resistance are not permanent conditions.
MagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi-certified wireless charger. AirPods Pro (2nd generation) charging case also works with the Apple Watch charger or Lightning connector.
Battery life depends on device settings, environment, usage, and many other factors.
To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.
Available for qualifying applicants in the United States.
Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
If you reside in the U.S. territories, please call Goldman Sachs at 877‑255‑5923 with questions about Apple Card.`;

export const BreadCrumbs = [
  [
    "Shop and Learn",
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
  [
    "Services",
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
  ["Account", "Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  [
    "Apple Store",
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
  ["For Business", "Apple and Business", "Shop for Business"],
  ["For Education", "Apple and Education", "Shop for K-12", "Shop for College"],
  [
    "For Healthcare",
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone",
  ],
  ["For Government", "Shop for Government", "Shop for Veterans and Military"],
  [
    "Apple Values",
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supplier Responsibility",
  ],
  [
    "About Apple",
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
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
