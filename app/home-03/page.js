import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Contact3 from "@/components/sections/Contact3"
import Faq1 from "@/components/sections/Faq1"
import News3 from "@/components/sections/News3"
import Process3 from "@/components/sections/Process3"
import Service3 from "@/components/sections/Service3"
import Testimonials3 from "@/components/sections/Testimonials3"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={2} hero={3} mainContentCls="main-content home-page-3">
				<About3 />
				<Service3 />
				<Process3 />
				<Testimonials3 />
				<News3 />
				<Contact3 />
				<Faq1 />
			</Layout>
		</>
	)
}