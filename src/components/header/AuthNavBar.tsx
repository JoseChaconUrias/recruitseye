import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "RecruitsEye",
    className: "font-bold text-xl"
  },
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "News",
  },
  {
    href: "/",
    label: "Blog",
  },
];

const AuthNavBar = () => {
  return (
    <header className="flex h-[3.3rem] justify-between items-center p-3 px-10 border-b bg-dark-mode border-dark-grey">
      <nav>
        <ul className="flex gap-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={link.className}>{link.label}</Link>
            </li>
          ))}
        </ul>        
      </nav>

    </header>
  );
};

export default AuthNavBar;
