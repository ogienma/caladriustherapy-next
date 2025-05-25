'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'
const TEXTS = ['Healthy', 'Fulfilling Life']
export default function Hero2() {
	const [index, setIndex] = useState(1)
	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000,
		)
		return () => clearTimeout(intervalId)
	}, [])
	return (
		<>


			<div className="page-title-homepage-2">
				<div className="content-inner">
					<div className="heading">
						<h2 className="title animationtext rotate-1 ">Take The First Step Towards A Balanced &amp;
							<span className="tf-text s1 cd-words-wrapper">
								<TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
							</span>
						</h2>
						<p className="description">
							We provide a safe space where you can find peace within yourself. Our expert therapists guide
							you
							through overcoming mental challenges with personalized care.
						</p>
					</div>
					<Link className="tf-btn style-default btn-color-secondary pd-28" href="/contact-us">
						<span>Book a Consultation <i className="icon-ArrowRight arr-1" /></span>
					</Link>
				</div>
				<div className="image-wrap">
					<img className="lazyload" data-src="/images/page-title/page-title-home-2.jpg" src="/images/page-title/page-title-home-2.jpg" alt="healingy" />
				</div>
			</div>

		</>

	)
}
