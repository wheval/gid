import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegistrationInfo from "@/components/RegistrationInfo";
import Throwback from "@/components/Throwback";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Header/>
        <Hero/>
        <RegistrationInfo/>
        <Throwback/>
    </div>
  );
}
