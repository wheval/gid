import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RegistrationInfo from "@/components/RegistrationInfo";
import Testimonials from "@/components/Testimonials";
import Throwback from "@/components/Throwback";
import Hero from "./(homepage)/Hero";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <FAQ/>
        <Footer/>
    </div>
  );
}
