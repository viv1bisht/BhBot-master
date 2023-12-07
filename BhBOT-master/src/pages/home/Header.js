
import Logo_bot from "../../assets/images/Logo_bot.png";
import GoogleSignIn from "../../components/auth/GoogleSignIn";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
        <img src={Logo_bot} alt="Bharat-Bot" />
        </div>
        <GoogleSignIn />
      </header>
    </div>
  );
};

export default Header;
