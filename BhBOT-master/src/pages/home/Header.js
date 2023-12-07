
import Logo_bot from "../../assets/images/Logo_bot.png";
import GoogleSignIn from "../../components/auth/GoogleSignIn";
import LoginSignup from "../../components/auth/LoginSignup";
// import{
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
        <img src={Logo_bot} alt="Bharat-Bot" />
        </div>
        <GoogleSignIn />
        <LoginSignup />
      </header>
    </div>
  );
};

export default Header;
