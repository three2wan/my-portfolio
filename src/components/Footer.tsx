import reactLogo from "../assets/react.svg";
import heartLogo from "../assets/heart.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="px-2 py-2">
        <div className="items-center justify-center text-center px-7 py-7 bg-gray-100 rounded-lg">
          <div className="">&copy; {currentYear} Syzwan Jamil</div>
          <div>
            <span>Developed with</span>
            <img
              src={reactLogo}
              className="w-5 h-5 mx-1 inline"
              alt="React logo"
            />
            <span>and</span>
            <img
              src={heartLogo}
              className="w-5 h-5 mx-1 inline"
              alt="Heart logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
