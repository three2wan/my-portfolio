import reactLogo from "../assets/react.svg";
import heartLogo from "../assets/heart.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-2 py-2">
      <div className="items-center justify-center text-center px-7 py-7 bg-gray-100 rounded-lg">
        <p>&copy; {currentYear} Syzwan Jamil</p>
        <p>
          Developed with
          <img src={reactLogo} className="w-5 h-5" alt="React logo" /> and
          <img src={heartLogo} className="w-5 h-5" alt="Heart logo" />
        </p>
      </div>
    </div>
  );
}

export default Footer;
