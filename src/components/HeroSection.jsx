import { useState, useEffect } from "react";
import profileImg from "../assets/IMG_9428.jpg";
import { ArrowDown } from "lucide-react";
import PixelTransition from "./PixelTransition";

export const HeroSection = () => {
    const roles = ["Software Developer", "MERN Developer", "Speed Cuber"];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let speed = isDeleting ? 120 : 180;

        const handleTyping = () => {
            setText(prev =>
                isDeleting
                    ? currentRole.substring(0, prev.length - 1)
                    : currentRole.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">

                    {/* Profile Image with PixelTransition */}
                    <div className="flex justify-center mt-25">
                        <PixelTransition
                            firstContent={
                                <img
                                    src={profileImg}
                                    alt="Mayukh Biswas"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "#111",
                                        borderRadius: "50%"
                                    }}
                                >
                                    <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff" }}>Hi ...🖐️</p>
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="w-32 md:w-40 md:h-40 rounded-full border-2 border-primary overflow-hidden"
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mayukh</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Biswas</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium mt-4">
                        I'm a <span className="text-primary">{text}</span>
                        <span className="blinking-cursor">|</span>
                    </h2>

                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                        I am a 3rd-year Computer Science Engineering student at Techno Bengal Institute of Technology, with a strong interest in MERN Stack, DSA, and Data Science. 
                        Beyond academics, I love solving Rubik’s Cubes, which reflects my curiosity and passion for problem-solving.
                        I aspire to pursue a career in Software Development where I can apply my skills, continue learning, and deliver impactful solutions.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View Work
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground opacity-70 mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}
