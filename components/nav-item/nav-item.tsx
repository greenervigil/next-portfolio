import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ 
  text, 
  href, 
  active 
}) => {
  return (
    <Link href={href}>
      <a
        className={`font-mono text-lg transition ${
          active ? "active" : ""
        } hover:font-bold active:text-teal-600`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem