import Header from "../../components/header";
import Hero from "../../components/hero";
import TopCard from "../../components/topcards";
import MiddleSec from "../../components/middle";
import AfterMiddle from "../../components/aftermiddle";
import Bottom from "../../components/bottom";
import AfterBottom from "../../components/afterbottom";
import Footer from "../../components/footer";
export default function Home() {
  return (
   <>
  <div className="">
     
   <Header/>
   <Hero/>
   <TopCard/>
   <MiddleSec/>
   <AfterMiddle/>
   <Bottom/>
   <AfterBottom/>
   <Footer/>
  </div>
   </>
  );
}
