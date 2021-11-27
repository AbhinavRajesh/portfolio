import HeadMeta from "@components/partials/HeadMeta";
import About from "@components/parts/About";
import Education from "@components/parts/Education";
import Footer from "@components/parts/Footer";
import From from "@components/parts/From";
import Navbar from "@components/parts/Navbar";
import Skills from "@components/parts/Skills";
import Work from "@components/parts/Work";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-black h-[100vh] font-inter">
      <HeadMeta
        title="Abhinav Rajesh | Full Stack Developer Portfolio"
        description="This is a collection of websites and web apps that help demonstrate Abhinav's skills and abilities as a web developer."
        image=""
        keywords=""
        url=""
      />
      <Navbar />
      <div className="flex flex-col px-4 mt-[86px] text-dark">
        <About />
        <Education />
        <Work />
        <Skills />
        <From />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
