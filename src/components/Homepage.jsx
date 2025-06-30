import { useState, useEffect, useRef } from "react";
import img1 from "../assets/pexels-goumbik-669619.jpg";
import img2 from "../assets/pexels-pixabay-247791.jpg";

function Homepage() {
    const [text, setText] = useState("Financial Analysis");
    const [image, setImage] = useState(img1);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState([]);

    const sectionRefs = useRef([]);
    sectionRefs.current = [];

    const texts = ["Financial Analysis", "Coding"];
    const images = [img1, img2];

    const sections = [
        {
            title: "Tangible improvements in automation",
            content: `Working in internal audit assignments, I came across voluminous data requiring a lot of manual work, consuming unnecessary hours. I started using coding to automate processes, saving time for meaningful analysis.`
        },
        {
            title: "The Hobby of Reading",
            content: `I love learning new things independently. This mindset helped me teach myself equity research, coding, financial modeling, and even cooking. My hunger for knowledge drives my growth.`
        },
        {
            title: "The long love for coding",
            content: `Since childhood, computers have fascinated me. Coding gives me the power to turn ideas into reality. It brings satisfaction and peace — it's like therapy for me.`
        }
    ];

    // Image & text switcher
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

    // Fade in "About Me" and "Skills" on mount
    useEffect(() => {
        setIsTextVisible(true);
    }, []);

    // Scroll-trigger visibility tracking
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const newVisibility = [...visibleSections];
                entries.forEach((entry) => {
                    const index = sectionRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting && !newVisibility[index]) {
                        newVisibility[index] = true;
                    }
                });
                setVisibleSections(newVisibility);
            },
            { root: null, threshold: 0.25 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [visibleSections]);

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
                {/* About Me */}
                <div className="grid-boxes min-h-96 border-gray-400 rounded-2xl md:col-span-2 p-5">
                    <h2 className={`text-orange-600 text-3xl transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                        About me
                    </h2>
                    <p className={`mt-10 transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                        I am a Qualified Chartered Accountant with experience at BDO India (BFSI audits) and KPMG (auditing Private Equity, Mutual Funds & Hedge Funds). Now at VNR Seeds Pvt. Ltd., I handle internal audit and cost analysis. I’m passionate about equity research and coding — both deeply empower and energize me.
                    </p>
                </div>

                {/* Skills */}
                <div className={`grid-boxes min-h-96 border-gray-400 rounded-2xl p-5 transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-orange-600 text-3xl">Skills</h2>
                    <ul className="mt-8 list-disc ml-6">
                        <li>Financial Analysis</li>
                        <li>Financial Modelling</li>
                        <li>Costing</li>
                        <li>Researching Stocks</li>
                        <li>Coding: JavaScript, HTML, CSS, React JS, Node JS</li>
                        <li>Database: MySQL, PostgreSQL, MongoDB (NoSQL)</li>
                    </ul>
                </div>

                {/* Scroll-triggered sections */}
                {sections.map((section, index) => (
                    <div
                        key={index}
                        ref={(el) => sectionRefs.current[index] = el}
                        className={`p-5 grid-boxes min-h-96 border-gray-400 rounded-2xl transition-opacity duration-1000 ${visibleSections[index] ? "opacity-100" : "opacity-0"}`}
                    >
                        <h2 className="text-orange-600 text-3xl">{section.title}</h2>
                        <p className="mt-10">{section.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Homepage;
