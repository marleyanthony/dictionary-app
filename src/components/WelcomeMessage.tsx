import { ReactComponent as SearchIcon } from "../assets/images/search-icon.svg";

const WelcomeMessage = (): React.ReactElement => {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-3 h-96">
      <SearchIcon width="50px" height="50px" />
      <h1 className="text-5xl my-6">Enter Your Search Term!</h1>
    </div>
  );
};

export default WelcomeMessage;
