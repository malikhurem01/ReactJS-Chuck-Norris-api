import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className="image">
        <img src="chuck.png" alt="chuck" />
      </div>
      <div className="title">
        <h1>Wanna hear about Chuck Norris?</h1>
      </div>
    </header>
  );
};

export default Header;
