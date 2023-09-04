/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[12px] shadow-card">
        <div options={{max:45, scale:1,speed:450}} className="bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>
        Ad aliquam alias reprehenderit recusandae iusto cumque dolor <br/>
        repellat culpa saepe rerum sit, distinctio mollitia asperiores <br/>
        tenetur accusamus dicta itaque debitis beatae!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
      </>
  )
}

export default SectionWrapper( About,'about')