import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Benefits1 from "@/components/sections/Benefits1"
import Contact1 from "@/components/sections/Contact1"
import News1 from "@/components/sections/News1"
import Process1 from "@/components/sections/Process1"
import Service1 from "@/components/sections/Service1"
import Testimonials1 from "@/components/sections/Testimonials1"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} hero={1} mainContentCls="main-content">
				<About1 />
				<Benefits1 />
				<Service1 />
				<Process1 />
				<Testimonials1 />
				<News1 />
				<Contact1 />
			</Layout>
		</>
	)
}