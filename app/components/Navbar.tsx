import Image from "next/image";
import Link from "next/link";
// import DesktopLogo from "../../airbnb-desktop.png";
import MobileLogo from "@/public/logo.svg";
import DesktopLogo from "@/public/logo.svg"
import { UserNav } from "./useNav";
import { SearchModalCompnent } from "./SearchComponent";

export function Navbar () {

  //
    return (
        <nav className="w-full border-b">
        <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
          <Link href="/">
            <Image
              src={DesktopLogo}
              alt="Desktop Logo"
              className="w-12 hidden lg:block"
            />
  
            <Image
              src={MobileLogo}
              alt="Mobile Logo"
              className="block lg:hidden w-12"
            />
          </Link>
  
          <SearchModalCompnent />
  
          <UserNav />
        </div>
      </nav>
    )
}