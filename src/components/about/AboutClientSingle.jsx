const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="border relative w-full md:w-64 py-3 md:py-5 px-5 md:px-10 shadow-sm rounded-lg mb-8 cursor-pointer">
			<img
				src={image}
				className="  bg-secondary-light border-ternary-light dark:border-ternary-dark "
				alt={title}
			/>
			<div className='w-full h-full absolute inset-0 bg-black opacity-40 rounded-lg'></div>
			<h2 className="absolute z-20 text-white font-bold text-lg md:text-3xl inset-0 w-full h-full flex items-center justify-center">{title}</h2>
		</div>
	);
};

export default AboutClientSingle;
