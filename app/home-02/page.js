import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Benefits2 from "@/components/sections/Benefits2"
import Contact2 from "@/components/sections/Contact2"
import Counter1 from "@/components/sections/Counter1"
import News2 from "@/components/sections/News2"
import Process2 from "@/components/sections/Process2"
import Service2 from "@/components/sections/Service2"
import Testimonials2 from "@/components/sections/Testimonials2"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2} hero={2} mainContentCls="main-content home-page-2">
				<About2 />
				<Benefits2 />
				<Service2 />
				<Testimonials2 />
				<Counter1 />
				<Process2 />
				<News2 />
				<Contact2 />
			</Layout>
		</>
	)
}