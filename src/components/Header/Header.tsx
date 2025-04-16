import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/Header/ui/sheet";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/Header/ui/navigation-menu";
import { SearchBox } from "@/components/SearchBox/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBusinessTime,
  faCircleUser,
  faHouse,
  faMessage,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <span className="font-bold"> Hiro </span>
          </Link>
          <div className="grid gap-2 py-6">
            <div className="w-full">
              <SearchBox />
            </div>
            <Link href="#" prefetch={false}>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </span>
            </Link>
            <Link href="#" prefetch={false}>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faBusinessTime} />
                Jobs
              </span>
            </Link>
            <Link href="#" prefetch={false}>
              <span className=" flex gap-2 items-center">
                <FontAwesomeIcon icon={faPeopleGroup} />
                Employers
              </span>
            </Link>
            <Link href="#" prefetch={false}>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faBell} />
                Notifications
              </span>
            </Link>
            <Link href="#" prefetch={false}>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faMessage} />
                Messaging
              </span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <span className="font-bold"> Hiro </span>
      </Link>
      <SearchBox className="!w-72 hidden lg:block" />
      <div className="ml-auto flex gap-2 !bg-black">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link className="me-3" href="#" prefetch={false}>
                <span className="flex flex-col">
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="me-3" href="#" prefetch={false}>
                <span className="flex flex-col">
                  <FontAwesomeIcon icon={faBusinessTime} />
                  Jobs
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="me-3 border-r-1 border-black"
                href="#"
                prefetch={false}
              >
                <span className=" flex flex-col border-r pe-4 border-white">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  Employers
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="me-3" href="#" prefetch={false}>
                <span className="flex flex-col">
                  <FontAwesomeIcon icon={faBell} />
                  Notifications
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="me-3" href="#" prefetch={false}>
                <span className="flex flex-col">
                  <FontAwesomeIcon icon={faMessage} />
                  Messaging
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="me-3" href="#" prefetch={false}>
                <span className="flex flex-col">
                  <FontAwesomeIcon icon={faCircleUser} />
                  Profile
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

function MenuIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
