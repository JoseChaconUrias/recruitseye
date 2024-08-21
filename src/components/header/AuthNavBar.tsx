import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "RecruitsEye",
    className: "font-bold text-xl"
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const AuthNavBar = () => {
  return (
    <header className="flex h-[3.3rem] justify-between items-center p-3 px-10 border-b bg-dark-mode border-dark-grey">
      <nav>
        <ul className="flex gap-x-10 items-center text-sm md:text-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={link.className}>{link.label}</Link>
            </li>
          ))}
        </ul>        
      </nav>
      <nav>
        <ul>
          <li>
            <Link href="/login" className="text-sm md:text-md text-dark-red lg:bg-dark-red lg:text-light-grey rounded-full px-3 py-2">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthNavBar;
