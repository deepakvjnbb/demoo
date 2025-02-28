import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="p-4 ">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages/home">Home new</Link></li>
        <li><Link href="/pages/about">About us</Link></li>
        <li><Link href="/pages/products">Products</Link></li>
        <li><Link href="/pages/project">Projects</Link></li>
        <li><Link href="/pages/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;