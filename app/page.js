import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Supporters from "./(homepage)/Supporters";
import WhoAreWe from "./(homepage)/WhoAreWe";
import WhyWeDifferent from "./(homepage)/WhyWeDifferent";
import JoinCommunity from "./(homepage)/JoinCommunity";
import HeroSection from "./(homepage)/HeroSection";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <Supporters />
        <WhoAreWe />
        <WhyWeDifferent/>
        <JoinCommunity />
        <FAQ/>
        <Footer/>
    </div>
  );
}
