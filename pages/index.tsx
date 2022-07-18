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
    <div className="h-[100vh] font-inter">
      <HeadMeta
        title="Abhinav Rajesh | Full Stack Developer Portfolio"
        description="This is a collection of websites and web apps that help demonstrate Abhinav's skills and abilities as a web developer."
        image=""
        keywords=""
        url="https://abhinavrajesh.com"
      />
      <Navbar />
      {/* text-dark dark:text-text_dark */}
      <div className="flex px-4 flex-col pt-[86px] text-black dark:text-white dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black">
        <About />
        <Education />
        <Work />
        <Skills />
        <From />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
