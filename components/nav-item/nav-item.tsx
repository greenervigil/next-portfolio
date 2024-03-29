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
    <Link href={href} className={`font-mono text-lg transition ${
      active ? "text-teal-600" : ""
    } hover:font-bold`}>
      {text}
    </Link>
  );
};

export default NavItem