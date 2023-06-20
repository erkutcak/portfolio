import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)

  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    email: yup.string().email("Invalid e-mail").required("e-mail is required"),
    message: yup.string().required("A message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, helpers) => {
      setLoading(true)
      emailjs.sendForm(
        'service_4yycnu6', 
        'template_2ghq3ll',
        formRef.current,
        "7af4hUupsiy7M09kK"
        )
        .then((result) => {
          setLoading(false)
          console.log(result.text);
          toast('📨 Thank you for your message!', {
            hideProgressBar: false,
            autoClose: 4600,
            theme: "dark",
          });
        }, (error) => {
          setLoading(false);
          console.log(error);
          toast('⛔ Oops! Something went wrong.', {
            hideProgressBar: false,
            autoClose: 4600,
            type: "error",
            theme: "dark",
          });
        })
        helpers.resetForm();
    },
  });

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <ToastContainer/>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>contact.</h3>

        <form ref={formRef} onSubmit={formik.handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' required value={formik.values.name} onChange={formik.handleChange} placeholder='Enter your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' required value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name='message' required value={formik.values.message} onChange={formik.handleChange} placeholder='What do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")