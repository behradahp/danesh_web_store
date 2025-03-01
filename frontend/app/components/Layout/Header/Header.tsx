// Components
import HeaderFirstRow from "./FirstRow/FirstRow";
import HeaderSecondRow from "./SecondRow/SecondRow";

function Header() {
  return (
    <header className='flex flex-col gap-4 p-7'>
      <HeaderFirstRow />
      <HeaderSecondRow />
    </header>
  );
}

export default Header;
