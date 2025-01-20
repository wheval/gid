import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "./(homepage)/Hero";
import Supporters from "./(homepage)/Supporters";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <Supporters />
        <FAQ/>
        <Footer/>
    </div>
  );
}
