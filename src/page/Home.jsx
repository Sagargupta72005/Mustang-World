
import Hero from "../section/Hero";
import TextPressure from "../components/home/TextPressure";
import ModelSection from "../section/ModelSection";
import ReadMore from "../components/home/ReadMore";
import News from "../components/home/News";
import ConfiguratorPage from "../components/ConfiguratorPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <TextPressure
        text="Mustang world"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />

      <ModelSection />
      
      <ConfiguratorPage/>
      <ReadMore/>
      <News/>

      
    </div>
  );
};

export default Home;
