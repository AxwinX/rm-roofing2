"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
	const { ref: statsRef, inView: statsVisible } = useInView({
		triggerOnce: true, // Ensures the animation triggers only once
		threshold: 0.2, // Triggers when 20% of the section is visible
	});

	return (
		<>
			<section
				className="title-banner flex justify-center items-center bg-center bg-cover bg-no-repeat"
				style={{ backgroundImage: "url(./about-img/about-banner.jpg)" }}
			>
				<div className="title w-screen p-10 bg-black/45">
					<h1 className="text-center text-white font-semibold text-5xl py-24">
						About Us
					</h1>
				</div>
			</section>

			{/* About 1 */}
			<section
				className="about1 p-10 lg:p-40 bg-cover align-middle"
				style={{ backgroundImage: "url(./about-img/services1.png)" }}
			>
				<div className="container flex flex-wrap md:justify-end lg:flex-nowrap">
					<div className="box border-b-8 border-yellow-400 m-4 w-full lg:hidden"></div>
					<div className="box border-r-8 border-yellow-400 m-4 w-full md:w-0 "></div>
					<div className="cont p-5 flex flex-col justify-center">
						<p
							style={{
								fontFamily:
									"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
							}}
							className=" relative px-6 after:bottom-[47%] after:bg-primary after:content-[''] after:absolute after:w-4 after:h-1 after:left-0 inter"
						>
							WHAT ARE WE
						</p>
						<h2 className="inter text-4xl font-bold my-4">A Little About Us</h2>
						<p className="mb-2 text-pretty">
							R&M Roofers LLC is not just a roofing company; we are a symbol of
							trust and excellence in Hempstead, NY. With 14 years of experience
							in the roofing industry, we have set new standards for quality,
							integrity, and customer satisfaction.{" "}
						</p>
					</div>
					<Image
						width={500}
						height={400}
						src="./about-img/about1.jpg"
						alt="image"
						className=" rounded-xl shadow-md"
					/>
				</div>
			</section>

			{/* About 2 */}
			<About2 />

			{/* About 3 */}
			<section
				className="about3 pb-8"
				style={{ backgroundImage: "url(./about-img/fun-facts-bg.jpg)" }}
			>
				<div className="row2">
					<div className="container4 flex flex-col md:flex-row md:p-20 justify-center items-center flex-wrap md:flex-nowrap">
						{/* Left Column */}
						<div className="context flex flex-col justify-center m-4 md:my-8 md:w-1/2">
							<h1 className="text-white text-3xl md:text-4xl font-bold mb-6 text-nowrap">
								<span className="text-yellow-400">Roofing</span> Solutions,{" "}
								<br />
								Roofing<span className="text-yellow-400"> Peace of Mind.</span>
							</h1>
							<p className="text-white text-md md:text-xl leading-relaxed font-sans">
								Our journey has been marked by a steadfast commitment to
								delivering roofing solutions that protect and enhance your
								property. Whether it&apos;s a residential roof that shields your
								loved ones or a commercial roof that safeguards your business,
								we take pride in our ability to provide roofing services that
								stand up to the challenges of time and weather.
							</p>
						</div>

						{/* Right Column */}
						<div className="flex justify-center items-center md:w-1/2">
							<div
								ref={statsRef}
								className="conte grid grid-cols-2 gap-6 md:gap-10 justify-evenly items-center"
							>
								{/* Grid Item 1 */}
								<div
									className={`conte-box bg-[#fafafa1a] w-32 h-32 p-4 rounded-sm pt-8 shadow-md transition-opacity duration-500 ${
										statsVisible ? "opacity-100" : "opacity-0"
									}`}
								>
									<h2 className="text-4xl text-white text-center font-bold">
										{statsVisible && <CountUp start={0} end={8} duration={2} />}
									</h2>
									<p className="text-center text-white text-sm">Year Of Exp.</p>
								</div>

								{/* Grid Item 2 */}
								<div
									className={`conte-box bg-[#fafafa1a] w-32 h-32 p-4 rounded-sm pt-8 shadow-md transition-opacity duration-500 ${
										statsVisible ? "opacity-100" : "opacity-0"
									}`}
								>
									<h2 className="text-4xl text-white text-center font-bold">
										{statsVisible && (
											<CountUp start={0} end={1080} duration={1.5} />
										)}
									</h2>
									<p className="text-center text-white text-sm">
										Great Reviews
									</p>
								</div>

								{/* Grid Item 3 */}
								<div
									className={`conte-box bg-[#fafafa1a] w-32 h-32 p-4 rounded-sm pt-8 shadow-md transition-opacity duration-500 ${
										statsVisible ? "opacity-100" : "opacity-0"
									}`}
								>
									<h2 className="text-4xl text-white text-center font-bold">
										{statsVisible && (
											<CountUp start={0} end={500} suffix="k" duration={1.5} />
										)}
									</h2>
									<p className="text-center text-white text-sm">
										Projects Done
									</p>
								</div>

								{/* Grid Item 4 */}
								<div
									className={`conte-box bg-[#fafafa1a] w-32 h-32 p-4 rounded-sm pt-8 shadow-md transition-opacity duration-500 ${
										statsVisible ? "opacity-100" : "opacity-0"
									}`}
								>
									<h2 className="text-4xl text-white text-center font-bold">
										{statsVisible && (
											<CountUp start={0} end={11} duration={1.8} />
										)}
									</h2>
									<p className="text-center text-white text-sm">Employees</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Google Map */}
				<>
					<h1 className="text-3xl font-bold w-screen text-center text-white py-10">
						Locate <span className="text-yellow-400">Us</span>
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772735.4125394421!2d-73.60846191071508!3d40.83899534411069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d62e4f9ddb1%3A0x4011d350bc4eb5b0!2sR%26M%20Roofers%20LLC!5e0!3m2!1sen!2sin!4v1734872222400!5m2!1sen!2sin"
						width="100%"
						height="500px"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen
					></iframe>
				</>
			</section>
		</>
	);
}
export function About2() {
	return (
		<section
			className="about2 py-5 flex flex-col justify-center items-center lg:flex-row lg:justify-center sm:p-40 bg-no-repeat bg-right-bottom"
			style={{ backgroundImage: "url(./about-img/about-shap-1.png)" }}
		>
			<div className="flex flex-col lg:flex-row gap-4 px-3 w-full lg:w-auto">
				<div className="container1 flex flex-col items-center">
					<div className="mission mb-4">
						<h2 className="text-center text-4xl">
							Our <span className="text-primary font-bold">Mission</span>
						</h2>
					</div>
					<div className="bout-box bg-primary max-w-[94%] text-white p-6 rounded-md shadow-md">
						<p className="text-white text-center leading-8">
							At R&M Roofers LLC, our mission is clear and resolute: to provide
							roofing solutions that protect, enhance, and endure. With 14 years
							of roofing expertise, we understand the critical role that your
							roof plays in safeguarding your home or business. Our mission is
							to deliver roofing services that go beyond mere functionality; we
							aim to create roofs that provide peace of mind. <br /> &nbsp;{" "}
						</p>
					</div>
				</div>
				<div className="container2 flex flex-col items-center md:pb-10 md:pt-16">
					<div className="vision mb-4">
						<h2 className="text-center text-4xl">
							Our <span className="text-primary font-bold">Vision</span>
						</h2>
					</div>
					<div className="bout-box bg-primary max-w-[94%] text-white p-6 rounded-md shadow-md">
						<p className="text-white text-center lg:text-left  leading-8">
							Our vision at R&M Roofers LLC is to continue being a leading force
							in the roofing industry, not only in Hempstead, NY but also in
							setting industry benchmarks nationwide. With a legacy of 14 years,
							we aspire to redefine what roofing excellence means. We envision a
							future where our name is synonymous with integrity, innovation,
							and customer satisfaction.
						</p>
					</div>
				</div>
				<div className="container3 flex flex-col items-center">
					<div className="whychooseus mb-4">
						<h2 className="text-center text-4xl">
							Why <span className="text-primary font-bold">Choose</span> Us
						</h2>
					</div>
					<div className="bout-box bg-primary max-w-[94%] text-white p-6 rounded-md shadow-md">
						<p className="text-white text-center lg:text-left leading-8">
							Why should you choose R&M Roofers LLC for your roofing needs?
							Because when you choose us, you&apos;re choosing 14 years of
							unwavering commitment to excellence. Our team is not just
							experienced; we are passionate about providing roofing solutions
							that protect your investment. We understand the significance of
							your roof, and we approach every project with meticulous care and
							expertise.{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
