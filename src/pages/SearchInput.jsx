import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";

import SearchInputList from "../components/SearchInputList";
import SearchbarSearchAll from "../components/SearchbarSearchAll";
import "./SearchInput.css";
import { useContext, useEffect } from "react";
import { NavBtnColorContext } from "../context/Context";

const SearchInput = () => {
  const { btnClicked, setBtnClicked } = useContext(NavBtnColorContext);

  useEffect(() => {
    setBtnClicked("search");
  }, []);
  return (
    <section className="search-input-page">
      <BackBtn />
      <SearchbarSearchAll />
      <SearchInputList />
      <Nav />
    </section>
  );
};

export default SearchInput;
