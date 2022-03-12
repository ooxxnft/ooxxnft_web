import React, { ReactElement, useState } from 'react';
import { MobileNav } from "./MobileNav"
import { Header } from "./Header"
import { Head } from "./Head"
import { Footer } from "./Footer"
import { headerLinks } from "../utils/headerLinks"
import { TopAlert } from "components/TopAlert"
import { LoadingBar } from "components/LoadingBar"
export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {

  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {/* Meta */}
      <TopAlert />
      <LoadingBar />
      <Head />
      {/* End Google Tag Manager (noscript) */}
      {/* Top header */}
      <Header links={headerLinks} hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />

      {/* Mobile Nav */}
      <MobileNav links={headerLinks} hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />

      {/* Page content */}
      <div>{children}</div>

      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

