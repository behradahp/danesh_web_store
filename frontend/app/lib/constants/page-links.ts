import homeIcon from "@/app/assets/icons/pages-links-icons/home-icon.svg";
import productsIcon from "@/app/assets/icons/pages-links-icons/products-icon.svg";
import userPanelIcon from "@/app/assets/icons/pages-links-icons/user-panel-icon.svg";
import adminPanelIcon from "@/app/assets/icons/pages-links-icons/admin-panel-icon.svg";
import aboutIcon from "@/app/assets/icons/pages-links-icons/about-icon.svg";
import contactIcon from "@/app/assets/icons/pages-links-icons/contact-icon.svg";

interface IPagesLink {
  title: string;
  href: string;
  icon: string;
}

export const pagesLinks: IPagesLink[] = [
  {
    title: "خانه",
    href: "/",
    icon: homeIcon,
  },
  {
    title: "محصولات",
    href: "/products",
    icon: productsIcon,
  },
  {
    title: "پنل کاربری",
    href: "/user-panel",
    icon: userPanelIcon,
  },
  {
    title: "پنل ادمین",
    href: "/admin-panel",
    icon: adminPanelIcon,
  },
  {
    title: "درباره ما",
    href: "/about",
    icon: aboutIcon,
  },
  {
    title: "تماس با ما",
    href: "/contact",
    icon: contactIcon,
  },
];
