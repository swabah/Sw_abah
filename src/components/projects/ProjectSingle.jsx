import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to="/projects/single-project" aria-label="Single Project">
				<div className="w-full mt-5 shadow-lg cursor-pointer h-full rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					{/* <div className='w-full h-full'> */}
						<img
							src={image}
							className="object-cover w-full border-none h-32 rounded-t-xl"
							alt="Single Project"
						/>
					{/* </div> */}
					<div className="w-full px-4 py-6 text-center h-auto">
						<p className="mb-2 text-lg font-general-medium md:text-xl text-ternary-dark dark:text-ternary-light">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
