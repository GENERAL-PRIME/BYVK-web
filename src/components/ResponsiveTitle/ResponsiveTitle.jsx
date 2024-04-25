import React from "react";

function ResponsiveTitle({ websiteName, pageTitle }) {
  document.title = `${websiteName} - ${pageTitle}`;

  return null;
}

export default ResponsiveTitle;
