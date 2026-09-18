import { useRef, useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import NavBar from "../../componants/NavBar/NavBar";
import Hero from "../../componants/Hero/Hero";
import About from "../../componants/About/About";
import Educations from "../../componants/Educations/Educations";
import TrustSection from "../../componants/TrustSection/TrustSection";
import Projects from "../../componants/Projects/Projects";
import Contact from "../../componants/Contact/Contact";
const HomePage = () => {
    const contactRef = useRef(null);
return (
    <div>
        <Hero
            title="HEY! "
            completTitle="I’m Mohammad, Frontend Developer"
            subTitle="Agency-quality Webflow websites with the personal touch of a freelancer."
            btnContent="Download Cv"
            linkImages="/images/profile-user.png"
        />
        <div className="px-20 max-sm:p-7">
            <About
            image="/images/developer-icons.png"
            title="About Me "
            description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
            />
            <Educations 
            icon={<FaArrowUp className="text-white" />}
            />
            <TrustSection
            contactRef={contactRef}
                title="Try me out, risk free!"
                subTitle="If you’re not happy with the design after the first draft,
                I’ll refund your deposit,"
                complet=" no questions asked"
                btnContent="Contact"
                btnIcon={<FaArrowRight />}
            />
            <Projects/>
            <Contact
            contactRef={contactRef}
            />
        </div>
    </div>
);
};

export default HomePage;
