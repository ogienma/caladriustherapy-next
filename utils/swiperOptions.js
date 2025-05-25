
import { Autoplay, Navigation, Pagination } from "swiper/modules"
export const sliderPageTitleHome = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	speed: 1000,
	navigation: {
		nextEl: ".page-title-next",
		prevEl: ".page-title-prev",
	},
	pagination: {
		el: ".pagination-page-title-home",
		clickable: true,
	},
}
export const sliderTestimonialThumbs = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 0,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
}
export const sliderTestimonial = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 0,
	slidesPerView: 1,
	pagination: {
		el: ".pagination-testimonial",
		clickable: true,
	},
	thumbs: {
		swiper: sliderTestimonialThumbs,
	},
}



export const sliderTestimonialCenter = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	slidesPerView: 1,
	centeredSlides: true,
	observer: true,
	observeParents: true,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1.1,
		},
		767: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 2.1,
		},
		1200: {
			slidesPerView: 3.5,
		},
	},
}

export const sliderTestimonial1 = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: ".pagination-testimonial-1",
		clickable: true,
	},
}

export const sliderLayout3 = {
	modules: [Autoplay],
	spaceBetween: 30,
	slidesPerView: 3,
	pagination: {
		el: ".pagination-layout",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.4,
		},
		991: {
			slidesPerView: 3,
		},
	},
}

export const sliderLayout4 = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	slidesPerView: 4,
	pagination: {
		el: ".pagination-layout",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 4,
		},
	},
}
