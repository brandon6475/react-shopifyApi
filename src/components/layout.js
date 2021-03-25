import React from 'react'

import DesktopHeader from "./headers/desktopHeader"
import MobileHeader from "./headers/mobileHeader"
import Vtrack from "./vtrack"
import Footer from "./footer"

export default function Layout({ children }) {
	return (
		<>
			<DesktopHeader
				logoWidth="350px"
				logoHeight="350px"
			/>
			<MobileHeader />
			<main>
				{children}
				<Vtrack />
			</main>
			<Footer />
		</>
	)
}
