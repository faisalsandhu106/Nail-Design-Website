import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";


const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [isError, setError] = useState(false);

    //* Contact-Us API 
    //* ==============
    const API = `https://naildesign-website-backend.vercel.app/send-email`;


    //* React Hook Form
    //* ===============
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();


    //* Form submission handler
    //* ======================
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(API, data);
            const result = response.data;

            if (result.success) {
                setSubmitted(true);
                setError(false);
                reset();

                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } else {
                setSubmitted(false);
                setError(true);

                setTimeout(() => {
                    setError(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitted(false);
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    };


    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 xl:gap-x-24 gap-y-12 items-center mt-16 lg:mt-20 xl:mt-24">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <h2 className="mb-12 text-cente">
                        Contact Us
                    </h2> */}
                    <div className="flex flex-col gap-7 sm:gap-12">
                        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                            <div>
                                <label htmlFor="name" className="font-medium">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder='John'
                                    id='name'
                                    {...register("name", {
                                        required: "Please enter your name", minLength: { value: 2, message: "Name must be at least 2 characters" }, maxLength: { value: 80, message: "Name must be 80 characters or fewer" }
                                    })}
                                    className='py-2 mt-1 w-full border-b bg-transparent focus-visible:outline-none focus:border-darkColor' />
                                {errors.name && <span className='text-[0.9em] text-red-500'>{errors.name?.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="font-medium">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    placeholder='+923XX XXXXXXX'
                                    id='phone'
                                    {...register("phone", {
                                        required: "Please enter your phone number", minLength: { value: 6, message: "Please enter a valid phone number" }, maxLength: { value: 30, message: "Phone number is too long" }
                                    })}
                                    className='py-2 mt-1 w-full border-b bg-transparent focus-visible:outline-none focus:border-darkColor' />
                                {errors.phone && <span className='text-[0.9em] text-red-500'>{errors.phone?.message}</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder='john@example.com'
                                id='email'
                                {...register("email", {
                                    required: "Please enter your email address", maxLength: { value: 254, message: "Email address is too long" },
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'invalid email address'
                                    }
                                })}
                                className='py-2 mt-1 w-full border-b bg-transparent focus-visible:outline-none focus:border-darkColor' />
                            {errors.email && <span className='text-[0.9em] text-red-500'>{errors.email?.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="message" className="font-medium">
                                Message *
                            </label>
                            <textarea
                                placeholder='Write your message here...'
                                id='message'
                                {...register("message", {
                                    required: "Please enter a message", minLength: { value: 10, message: "Message must be at least 10 characters" }, maxLength: { value: 3000, message: "Message must be 3000 characters or fewer" }
                                })}
                                className='py-2 mt-1 w-full min-h-[180px] border-b bg-transparent focus-visible:outline-none focus:border-darkColor' />
                            {errors.message && <span className='text-[0.9em] text-red-500'>{errors.message?.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 gap-y-8">
                        <AnimatePresence>
                            {submitted && (
                                <motion.p
                                    role="status"
                                    aria-live="polite"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center px-3 py-4 text-base text-muted-foreground bg-[#FFF1F6]"
                                >
                                    Thank you! Your message has been sent successfully. ✅
                                    We’ll get back to you as soon as possible.
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {isError && (
                                <motion.p
                                    role="alert"
                                    aria-live="assertive"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center px-3 py-4 text-base text-red-800 bg-red-100"
                                >
                                    Sorry, something went wrong. Your message could not be sent.
                                    Please try again. ❌
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary flex items-center gap-x-3 w-fit h-full"
                        >

                            <span className='text-base font-medium'>
                                {isSubmitting ?
                                    "Sending...."
                                    :
                                    <div className="flex items-center gap-x-2">
                                        <span>Send Now</span>
                                        <IoIosSend className="text-xl" />
                                    </div>

                                }
                            </span>
                            {isSubmitting &&
                                <div className="flex justify-center items-center">
                                    <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            }
                        </button>
                    </div>
                </form>
                <div>
                    <iframe title="Map showing Faisalabad, Pakistan" src="https://www.google.com/maps?q=Faisalabad%2C%20Pakistan&output=embed" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 min-h-[320px] sm:min-h-[450px]"></iframe>
                </div>
            </section>
        </>
    )
}

export default ContactForm
