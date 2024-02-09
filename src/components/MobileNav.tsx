import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignRight } from "lucide-react";

const menuItems = [
  { label: "home", url: "/" },
  { label: "about", url: "#about" },
  { label: "contact", url: "#contact" },
  { label: "blog", url: "/blog" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight size={40} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-darkColorPrimary border-l-2 border-yellowColor">
        <ul className="flex flex-col justify-center items-center gap-10 h-[100vh] text-3xl text-lightColor ">
          {menuItems.map(({ label, url }) => (
            <li
              className="hover:text-yellowColor transition-all duration-500 hover:scale-105"
              key={label}
            >
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
