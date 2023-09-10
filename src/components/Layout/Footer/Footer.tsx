const Footer = () => {
  return (
    <footer className="bg-white/70 shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
        <span className="flex text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <div className="ml-2">Yair Sadan</div>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
