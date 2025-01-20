import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Supporters from "./(homepage)/Supporters";
import WhoAreWe from "./(homepage)/WhoAreWe";
import WhyWeDifferent from "./(homepage)/WhyWeDifferent";
import JoinCommunity from "./(homepage)/JoinCommunity";
import HeroSection from "./(homepage)/HeroSection";
import GidaDeveloperComSection from "./(homepage)/GidaDeveloperComSection";
import ReadyToLearn from "./(homepage)/ReadyToLearn";
import Newsletter from "./(homepage)/Newsletter";
import Partnership from "./(homepage)/Partnership";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <Supporters />
        <WhoAreWe />
        <WhyWeDifferent/>
        <JoinCommunity />
        <GidaDeveloperComSection />
        <Partnership />
        <Newsletter />
        <ReadyToLearn />
        <Footer/>
    </div>
  );
}
