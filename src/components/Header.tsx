import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <div className="w-full border">
      <div className="flex justify-between">
        <Logo />
        <div className="flex">
          <select name="font style" id="font-style">
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
          <div className="flex items-center pl-8">
            <label className="inline-flex items-center cursor-pointer pr-2">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
            <MoonIcon />
          </div>
        </div>
      </div>
      <div>
        <input
          type="text"
          name="search bar"
          id="search-bar"
          className="border w-full"
        />
      </div>
    </div>
  );
};

export default Header;
