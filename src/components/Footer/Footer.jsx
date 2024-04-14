import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div className="footer"></div>
      {year} &copy; byvk
    </footer>
  );
}

export default Footer;
