export const  Descriptiion = [
    {
      desc: "Business cards provide a tangible and professional representation of your business.",
    },
    {
      desc: "Business cards make networking easier and more efficient.",
    },
    {
      desc: "A thoughtfully designed business card reinforces your brand identity.",
    },
    {
      desc: "Having your contact information on a business card means it's readily available even when digital devices fail or there's no internet connection.",
    },
    {
      desc: "Business cards can serve as a subtle marketing tool. You can include a QR code linking to your website or a special offer, turning your card into a mini marketing brochure that encourages further engagement with your business. ",
    },
];

// card images for ProductCatalog.tsx
import WCARD from "@/public/Cards/white.png";
import BCARD from "@/public/Cards/gray.png";
import PCARD from "@/public/Cards/pink.png";


export const CardsProducts = [
    {
      img: WCARD,
      name:"wcard",
      price: "800.00",
      type: "Standard Card",
      id: 1
    },
    {
      img: BCARD,
      price: "1000.00",
      name:"bcard",
      type: "Professional Card",
      id: 2
    },
    {
      img: PCARD,
      price: "1200.00",
      name:"pcard",
      type: "Premium Card",
      id: 3
    },
];

// images for ProductStandard.tsx
import SHIELD from "@/public/blue Icons/Shield.png";
import CLICK from "@/public/blue Icons/Click.png";
import LEAVES from "@/public/blue Icons/Leaves.png";

export const ProductStandards = [
    {
      img: SHIELD,
      title: "Advanced Encryption",
      description:
        "Our Avail Card employs state-of-the-art encryption to safeguard your sensitive data, ensuring your transactions are secure and confidential",
    },
    {
      img: CLICK,
      title: "Contactless Convenience",
      description:
        "Experience the ease of contactless payments and quick transactions with the Avail Card, making your daily purchases faster and hassle-free",
    },
    {
      img: LEAVES,
      title: "24/7 Fraud Monitoring",
      description:
        "Experience the ease of contactless payments and quick transactions with the Avail Card, making your daily purchases faster and hassle-free",
    },
];

export const ClientCardDesc = [
  {
    desc: "Our team of skilled designers brings creativity and innovation to every card design. "
  },
  {
    desc: "We believe in delivering not just business cards but works of art. That's why we invest in cutting-edge printing technology and premium quality cardstock."
  },
  {
    desc: "As pioneers in the transition from traditional paper business cards to digital alternatives, we offer the best of both worlds. "
  }
]

import ICON1 from "@/public/Testimonial Icons/Ellipse 3.png"
import ICON2 from "@/public/Testimonial Icons/Ellipse 4.png"
import ICON3 from "@/public/Testimonial Icons/Ellipse 5.png"

export const Testimonials =[
  {
    image: ICON1,
    name: "Emily Johnson",
    role: "CEO of Facebook",
    star: 5,
    desc: "I was blown away by  the quality and design of the business cards I received from Tap To Connect. They truly understand the importance of making a lasting impression."
  },
  {
    image: ICON2,
    name: "Emily Johnson",
    role: "CEO of Facebook",
    star: 5,
    desc: "Switching to Tap To Connect's digital business cards was a game-changer for my startup. The innovation they bring to the table is impressive. "
  },
  {
    image: ICON3,
    name: "Emily Johnson",
    role: "CEO of Facebook",
    star: 5,
    desc: "Our company decided to upgrade our business cards, and we turned to Tap To Connect. Their attention to detail and commitment to quality were evident from the start. "
  },
]


import BLOG1 from "@/public/Blogs picture/Rectangle 39.png"
import BLOG2 from "@/public/Blogs picture/Rectangle 40.png"
import BLOG3 from "@/public/Blogs picture/Rectangle 43.png"
import BLOG4 from "@/public/Blogs picture/Rectangle 46.png"

export const BlogsContent = [
  {
    image: BLOG1,
    title: "Exploring the World of Cards: Insights, Trends, and More",
    desc: "Embark on a Journey through the Evolving World of Cards, from Traditional to Cutting-Edge Solutions and Everything in Between."
  },
  {
    image: BLOG2,
    title: "Unveiling In-Depth Insights into the Card Business: Strategies, Tips, and Industry Trends",
    desc: "Unlock a Treasure Trove of Invaluable Strategies, Expert Tips, and In-Depth Industry Trends to Stay Ahead in the Dynamic World of Card-Based"
  },
  {
    image: BLOG3,
    title: "Exploring the World of Cards: Insights, Trends, and More",
    desc: "Embark on a Journey through the Evolving World of Cards, from Traditional to Cutting-Edge Solutions and Everything in Between."
  },
  {
    image: BLOG4,
    title: "Exploring the World of Cards: Insights, Trends, and More",
    desc: "Embark on a Journey through the Evolving World of Cards, from Traditional to Cutting-Edge Solutions and Everything in Between."
  },
]


import FB from "@/public/Social Media/fb.png"
import IG from "@/public/Social Media/ig.png"
import TIKTOK from "@/public/Social Media/tiktok.png"

// staticData.ts (or your preferred file name)

export const FooterContent = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/under-construction" },
      { label: "Services", href: "/serunder-construction" },
      { label: "Shop", href: "under-construction" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Service", href: "/under-construction" },
      { label: "Data Privacy", href: "/prunder-construction" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/counder-construction" },
      { label: "Return", href: "/runder-construction" },
    ],
  },
  {
    title: "Follow Us",
    socialMedia: [
      { label: FB },
      { label: IG },
      { label: TIKTOK },
    ],
  },
];




