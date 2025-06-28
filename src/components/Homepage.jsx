import { useState, useEffect, useRef } from "react";
import img1 from "../assets/pexels-goumbik-669619.jpg";
import img2 from "../assets/pexels-pixabay-247791.jpg";

function Homepage() {
    const [text, setText] = useState("Financial Analysis");
    const [image, setImage] = useState(img1);
    const [isVisible, setIsVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const scRef = useRef(null);

    const texts = ["Financial Analysis", "Coding"];
    const images = [img1, img2];

    useEffect(() => {
        let currentTextIndex = 0;
        let currentImageIndex = 0;

        const textInterval = setInterval(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setText(texts[currentTextIndex]);
        }, 2000);

        const imageInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            setImage(images[currentImageIndex]);
        }, 2000);

        return () => {
            clearInterval(textInterval);
            clearInterval(imageInterval);
        };
    }, []);

    // ✅ Fix: Set text visible after initial render without window.onload
    useEffect(() => {
        setIsTextVisible(true);
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.25
        };
        const target = scRef.current;

        const cb = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(cb, options);
        if (target) observer.observe(target);
        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <>
            <div className="slide-container flex justify-center">
                <img
                    src={image}
                    alt={text}
                    className="w-full h-72 object-cover shadow-md transition-all duration-700"
                />
            </div>
            <h1 className="text-3xl text-center mt-5">
                A CA who loves <span className="text-orange-600">{text}</span>
            </h1>

            <div className="grid-container grid md:grid-cols-3 gap-2 m-2">
                <div className="grid-boxes min-h-96 border-gray-400 rounded-2xl md:col-span-2 p-5">
                    <h2 className={`text-orange-600 text-3xl abt transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                        About me
                    </h2>
                    <p className={`mt-10 transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                        I am a Qualified Chartered Accountant having experience with working at BDO India in the statutory audit of BFSI sector and KPMG in the audit of Private Equity Funds, Mutual Funds and Hedge Funds. Currently, working as finance professional at 
                        VNR Seeds Pvt. Ltd. looking after the internal audit function as well as cost analysis. My passion for researching stocks helped me stay consistent with market updates and find investment opportunities that could further enhance my knowledge as well as help me in building the wealth goals I have set. On the other hand, I have also been passionate about learning to code. It is not just a passion but more than that. I want to cultivate the ability to develop anything I want. It also helps me calm my mind. I love coding!
                    </p>
                </div>

                <div className={`grid-boxes min-h-96 border-gray-400 rounded-2xl p-5 transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-orange-600 text-3xl">Skills</h2>
                    <ul className="mt-8 list-disc ml-6">
                        <li>Financial Analysis</li>
                        <li>Financial Modelling</li>
                        <li>Costing</li>
                        <li>Researching Stocks</li>
                        <li>Coding: JavaScript, HTML, CSS, React JS, and Node JS</li>
                        <li>Database: MySQL, PostgreSQL, and MongoDB (NoSQL)</li>
                    </ul>
                </div>

                {/* Scroll-triggered sections */}
                <div ref={scRef} className={`p-5 grid-boxes min-h-96 border-gray-400 rounded-2xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-orange-600 text-3xl">Tangible improvements in automation</h2>
                    <p className="mt-10">
                        Working in the internal audit assignments I came across many challenging volumnous data which required a lot of manually performance and consumed unnecessary hours of my time. I wanted the time for analysis rather than spending on manually going through excel and getting the information I need. With this curiosity I started exploring how can I use my skills in coding to get things done in my work resulting into saving my precious time that I could use to perform analysis and provide the management with useful information.
                    </p>
                </div>

                <div ref={scRef} className={`p-5 grid-boxes min-h-96 border-gray-400 rounded-2xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-orange-600 text-3xl">The Hobby of Reading</h2>
                    <p className="mt-5">
                        I am always excited to learn things by myself rather than depending on any companion. I will instantly think of learning a new thing and set my mind immediately to start with it. With this mindset, I have been able to learn how to perform equity research of the companies, I was able to learn how to code and still learning, I have been able to learn how to prepare a financial model of a company to take investment decisions, I have even learned to cook really good food. The continous hunger for knowledge is what keeps me energised to learn and implement things. My skills that I have honed for years to be able to perform research of anything I want have made it possible to reach beyond what I was at yesterday.
                    </p>
                </div>

                <div ref={scRef} className={`p-5 grid-boxes min-h-96 border-gray-400 rounded-2xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-orange-600 text-3xl">The long love for coding</h2>
                    <p className="mt-10">
                        Ever since I was a kid, I have always been drawn towards computers. Growing up it has been always fascinating for me to see those beautiful yet useful softwares. I always wondered how do they even make it happen? Turning an idea into a reality! Coding is something that gives me the feeling of being able to develop something by myself. It gives me the power to build something of my own. This satisfaction is what makes me a lot happier when I code. I enjoy coding like it is a therapy for me to be at peace.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Homepage;
