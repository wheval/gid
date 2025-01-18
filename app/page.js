import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegistrationInfo from "@/components/RegistrationInfo";
import Testimonials from "@/components/Testimonials";
import Throwback from "@/components/Throwback";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Header/>
        <Hero/>
        <RegistrationInfo/>
        <Throwback/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
    </div>
  );
}
