"use client"
import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
	const [scrollInfo, setScrollInfo] = useState({ hasScrolled: false, progress: 0 })

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			setScrollInfo({
				hasScrolled: scrollTop > 100,
				progress: Math.min((scrollTop / docHeight) * 100, 100),
			})
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const circumference = 307.919
	const strokeDashoffset = circumference - (scrollInfo.progress / 100) * circumference

	return (
		scrollInfo.hasScrolled && (
			<div onClick={() => window.scrollTo({ top: document.querySelector(target).offsetTop, behavior: "smooth" })}>
				<div className="progress-wrap active-progress">
					<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
						<path
							d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
							style={{
								transition: "stroke-dashoffset 10ms linear",
								strokeDasharray: `${circumference}, ${circumference}`,
								strokeDashoffset,
							}}
						/>
					</svg>
				</div>
			</div>
		)
	)
}

