import Image from "next/image";

const RegistrationInfo = () => {
  return (
    <section>
      <div className="bg-[#BD1522] w-full flex justify-evenly items-center py-16">
        <div className="font-bold text-center text-white">
          <div className="text-5xl">000</div>
          <div className="text-lg">Registrants</div>
        </div>
        <button className="bg-white rounded-full px-28 py-3 text-[#BD1522] font-bold text-lg">
          Register
        </button>
      </div>
      <div className="bg-white text-black flex justify-between p-8 md:p-12 gap-4 md:gap-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bootcamp Overview</h1>
          <p>
            Lörem ipsum ologi ontogram i onde plus for. Covid-19 hödide bevis
            kovaprera exore. Homonat trir, i homosk. Vuxenvälling
            bröllopsklänning kaning. Sogt beligt när ponde en barar. Bedåst
            nesat och Maudeffekten nätvandra. Global hektar. Kjolprotest dän
            plask oras multiska. Sess tebelt trivera polygt antesode. Folig
            e-demokrati heteroheledes kroktigt. Preska hin av trädmord. Didägt
            desm när belogi elökätt. Hembränd hemimäsamma: trenegt. Kande
            vaheten. Rössa monode sespebel. Viligt antiform till pronde.
            Fodoligt mimusm egor medan nipynat. Jinar vuhöska. Makronat
            selfiepinne koscheria. Panas ped dens, pevinde.
          </p>
        </div>
        <div className="flex-shrink-0 flex-1">
          <Image
            src="/assets/cairo.png"
            width={2000}
            height={2000}
            alt="hero"
            className="w-full rotate-12"
          />
        </div>
      </div>
    </section>
  );
};
export default RegistrationInfo;
