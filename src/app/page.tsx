// import Image from "next/image";
// import { pages } from "next/dist/build/templates/app-page";
import Homepage from "@/app/pages/home";
import Aboutpage from "@/app/pages/about";
import Productpage from "@/app/pages/products";
import Projectpage from "@/app/pages/projects";
import Contactpage from "@/app/pages/contact";

export default function Home() {
  return (
    <div>
    <Homepage/>
    <Aboutpage/>
    <Productpage/>
    <Projectpage/>
    <Contactpage/>
    </div>
  );
}
