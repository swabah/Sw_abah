import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const selectOptions = [
	'Web Design',
	'Web Development',
	'UI/UX Design',
	'Content Writing',
];

const HireMeModal = ({ onClose, onRequest }) => {

	const [formData, setFormData] = useState({
		name:'',
		email:'',
		number:'',
		subject:'',
		message:''
		});
	  
	  const [Loading,setLoading]=useState(false)

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		const newValue = type === 'checkbox' ? checked : value;
		setFormData((prevData) => ({
		  ...prevData,
		  [name]: newValue
		}));
	  };
	
	  console.log(formData);

	 	const SERVICE_ID = "service_ixdv24r";
		const TEMPLATE_ID = "template_eglhu88";
		const ID = "qQiiYM7KIuDBrtTuy";

  const handleOnSubmit = (e) => {
    e.preventDefault();
	setLoading(true)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, ID)
      .then((result) => {
        console.log(result.text);
		setTimeout(() => {
			setLoading(false)
			Swal.fire({
			  icon: 'success',
			  title: 'Message Sent Successfully'
			})
			e.target.reset()
			onClose(true)
		}, 2000);
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
  };
  
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-30 transition-all duration-500 font-general-medium"
		>
			{/* Modal Backdrop */}
			<div className="fixed inset-0 z-20 w-full h-full bg-black bg-opacity-50 bg-filter"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center w-full h-full">
				<div className="z-30 flex items-center modal-wrapper">
					<div className="relative flex-row max-w-md max-h-screen mx-5 rounded-lg shadow-lg modal xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark">
						<div className="flex justify-between gap-10 p-5 border-b modal-header border-ternary-light dark:border-ternary-dark">
							<h5 className="text-xl text-primary-dark dark:text-primary-light">
								What project are you looking for ?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="w-full h-full p-5 modal-body">
							<form
								onSubmit={handleOnSubmit}
								className="max-w-xl m-4 text-left"
							>
								<div className="">
									<input
										className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required
										placeholder="Name"
										aria-label="Name"
										onChange={handleInputChange}
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="text"
										required
										placeholder="Email"
										aria-label="Email"
										onChange={handleInputChange}
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="number"
										name="number"
										type="number"
										required
										placeholder="Number"
										aria-label="Number"
										onChange={handleInputChange}
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										type="text"
										required
										aria-label="Project Category"
										onChange={handleInputChange}
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border rounded-md dark:border-secondary-dark text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Project description"
										onChange={handleInputChange}
									></textarea>
								</div>

								<div className="pb-4 mt-6 sm:pb-1">
									<button
										type="submit"
										className={`px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-600
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500`}
										aria-label="Submit Request"
									>
										<Button title={Loading ? 'Requesting...' : "Send Request"} />
									</button>
								</div>
							</form>
						</div>
						{/* <div className="px-8 py-5 mt-2 text-right modal-footer sm:mt-0 border0-t">
							<button
								onClick={onClose}
								type="button"
								className="px-4 py-2 duration-500 bg-gray-600 rounded-md sm:px-6 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light focus:ring-1 focus:ring-indigo-900"
								aria-label="Close Modal"
							>
								<Button title={Loading ? 'Submiting...' : "! Not Completed"} />
							</button>
						</div> */}
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
