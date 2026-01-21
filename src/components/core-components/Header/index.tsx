import logoImage from "../../../assets/images/logo.png"

export function Header() {
  return (
    <header className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0">
      <img src={logoImage} alt="Logo" />
    </header>
  );
}
