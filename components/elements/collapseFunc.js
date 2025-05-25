"use client"

import { Collapse } from "bootstrap"
import { useEffect } from "react"

function Accordion() {
	useEffect(() => {
		// Remove specific inline styles from body
		document.body.style.removeProperty("overflow")
		document.body.style.removeProperty("padding-right")

		const accordionHeaders = document.querySelectorAll('[data-bs-toggle="collapse"]')

		accordionHeaders.forEach((header) => {
			const handleClick = () => {
				const target = header.getAttribute("data-bs-target")
				const collapseElement = document.querySelector(target)
				if (collapseElement) {
					const collapseInstance = Collapse.getOrCreateInstance(collapseElement)
					collapseInstance.toggle()
				}
			}

			header.addEventListener("click", handleClick)

			// Cleanup event listeners on unmount
			return () => {
				header.removeEventListener("click", handleClick)
			}
		})
	}, []) 

	return null // No rendering is needed
}

export default Accordion