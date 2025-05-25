import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Benefits3 from "@/components/sections/Benefits3"
import Contact4 from "@/components/sections/Contact4"
import Counter2 from "@/components/sections/Counter2"
import News5 from "@/components/sections/News5"
import Process5 from "@/components/sections/Process5"
import Service5 from "@/components/sections/Service5"
import Testimonials5 from "@/components/sections/Testimonials5"
export default function Home5() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2} hero={5} mainContentCls="main-content home-page-2">
				<About5 />
				<Benefits3 />
				<Service5 />
				<Testimonials5 />
				<Counter2 />
				<Process5 />
				<News5 />
				<Contact4 />
			</Layout>
		</>
	)
}