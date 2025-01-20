import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "./(homepage)/Hero";
import Supporters from "./(homepage)/Supporters";
import WhoAreWe from "./(homepage)/WhoAreWe";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <Supporters />
        <WhoAreWe />
        <FAQ/>
        <Footer/>
    </div>
  );
}
