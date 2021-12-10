import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen font-inter px-[16px] text-center dark:bg-[#202124] dark:text-text_dark">
      <h1 className="text-xl font-semibold">Uhh... This is awkward</h1>
      <span className="font-black text-5xl my-[10px] dark:text-white">404</span>
      <p>
        This page is probably moved, or still being created, or doesn&apos;t
        exist.
      </p>
      <div className="flex space-x-5 mt-[20px]">
        <Link href="/">
          <a className="text-primary_light">Return to Home</a>
        </Link>
        <a className="text-primary_light" href="https://blog.abhinavrajesh.com">
          Visit Blog
        </a>
      </div>
    </div>
  );
};

export default Custom404;
