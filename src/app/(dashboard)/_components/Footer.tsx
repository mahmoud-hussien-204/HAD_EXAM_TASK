const Footer = () => {
  return (
    <footer className="flex items-center h-footer-height px-content mt-auto">
      <p className="text-14 text-gray-500">
        Copyright © {new Date().getFullYear()}{" "}
        <a href="#" className="link-primary font-bold">
          HAD
        </a>
        . All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
