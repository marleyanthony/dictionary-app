import { ReactComponent as SearchIcon } from "../assets/images/search-icon.svg";

const WelcomeMessage = (): React.ReactElement => {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-3 h-96">
      <SearchIcon width="50px" height="50px" />
      <h1 className="text-5xl my-6">Enter a term to search!</h1>
      <p className="text-xl">
        Welcome to my Dictionary App, your one-stop shop for all things wordy!
        Whether you're a word nerd or just trying to impress friends, we've got
        you covered. Expect definitions, pronunciations (audio included), parts
        of speech, and images because sometimes a picture is worth a thousand
        words. Dive in and let the word fun begin!
      </p>
    </div>
  );
};

export default WelcomeMessage;
