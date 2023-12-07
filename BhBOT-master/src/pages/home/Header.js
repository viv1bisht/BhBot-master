
import bhbbot_logo from "../../assets/images/bhbbot_logo.png";
import GoogleSignIn from "../../components/auth/GoogleSignIn";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
        <img src={bhbbot_logo} alt="Bharat-Bot" />
        </div>
        <GoogleSignIn />
      </header>
    </div>
  );
};

export default Header;
