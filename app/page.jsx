import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RegistrationInfo from "@/components/RegistrationInfo";
import Testimonials from "@/components/Testimonials";
import Throwback from "@/components/Throwback";
import WhyWeDifferent from '../(homepage)/WhyWeDifferent'

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Hero/>
        <WhyWeDifferent/>
        <Footer/>
    </div>
  );
}
