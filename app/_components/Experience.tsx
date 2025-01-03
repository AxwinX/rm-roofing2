"use client";

import Script from "next/script";

export default function Experience() {
	return (
		<section className="pl-2 md:px-16 pt-16 pb-44">
			<div className="sec-expc flex flex-col px-4 lg:pl-20 lg:flex-row justify-center items-center lg:items-start start-20">
				{/* Left Column */}
				<div className="main-menu-text flex flex-col max-w-full lg:max-w-[50%] mt-10 md:mt-36 text-center lg:text-left">
					<h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
						We have 14 Years of Experience
					</h2>
					<p className="text-lg md:text-xl mb-4">
						{`
							Welcome to R&M Roofers LLC, your trusted partner for top-quality
							roofing solutions in Hempstead, NY, and nearby areas. With 14 years
							of solid experience in the roofing industry, we’ve built a
							reputation for exceptional craftsmanship, reliability, and
							outstanding service.
						`}
					</p>
					<a
						href="#contact-form"
						className="text-primary font-semibold border-2 border-[#ffc000] px-6 py-2 rounded-lg inline-block hover:bg-[#ffc000] hover:text-black transition-all duration-300"
					>
						Free Estimate
					</a>
				</div>

				{/* Right Column (Form) */}
				<ContactForm />
			</div>
		</section>
	);
}

function ContactForm() {
	return (
		<div className="w-screen lg:w-3/5 mt-52 h-44 flex justify-center items-center pt-40 pb-20 lg:pt-6 py-16">
			<div
				className="w-dvw md:w-[70%] lg:w-[60%] rounded-lg overflow-hidden"
				id="contact-form"
			>
				<iframe
					src="https://api.leadconnectorhq.com/widget/form/qdSOxp9NXk8Ozs8j8z9e"
					className="w-full h-[550px] md:h-[650px] border-0"
					id="inline-qdSOxp9NXk8Ozs8j8z9e"
					data-layout='{"id":"INLINE"}'
					data-trigger-type="alwaysShow"
					data-trigger-value=""
					data-activation-type="alwaysActivated"
					data-activation-value=""
					data-deactivation-type="neverDeactivate"
					data-deactivation-value=""
					data-form-name="LP Form"
					data-height="548"
					data-layout-iframe-id="inline-qdSOxp9NXk8Ozs8j8z9e"
					data-form-id="qdSOxp9NXk8Ozs8j8z9e"
					title="LP Form"
					loading="lazy"
				></iframe>
				<Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
			</div>
		</div>
	);
}
