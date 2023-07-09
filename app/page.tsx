import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";

export default function Home() {
	return (
		<>
			<Navbar currentTitle="Home" />
			<Content as="main" className="py-8">Hello world</Content>
		</>
	);
}
