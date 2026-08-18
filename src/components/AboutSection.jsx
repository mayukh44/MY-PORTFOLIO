import React from "react";
import resume from "@/assets/MayukhBiswas.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h3 className="size-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div className="space-y-6">
  <h3 className="text-2xl font-semibold">
    Passionate Software Developer & Tech Enthusiast
  </h3>

  <p className="text-muted-foreground">
    I enjoy designing and developing responsive, modern, and user-friendly
    web applications using technologies like React.js, Next.js, Node.js,
    Express.js, MongoDB, and Redux.
  </p>

  <p className="text-muted-foreground">
    I have a strong interest in Data Structures and Problem Solving, using
    C++ to improve my logical thinking and programming skills. I have solved
    250+ problems across LeetCode and GeeksforGeeks.
  </p>

          <div className="pt-2">
            <h4 className="text-xl font-semibold text-primary">
              Hobbies & Interests
            </h4>

            <div className="space-y-4 mt-4">
              <div>
                <h5 className="font-semibold">
                  Speed Cubing
                </h5>
                <p className="text-muted-foreground">
                  I enjoy solving Rubik's Cubes using CFOP and Advanced CFOP,
                  which challenges my problem-solving skills and patience.
                </p>
              </div>

              <div>
                <h5 className="font-semibold">
                  Video Editing
                </h5>
                <p className="text-muted-foreground">
                  I also enjoy video editing and creating engaging visual content,
                  exploring different editing techniques and creative ideas.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Stay In Touch
              </a>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Education
            </h3>

            {/* Bachelor */}
            <div className="gradient-border p-6 rounded-lg bg-background/10 backdrop-blur-sm card-hover text-left hover:border-primary">
              <h4 className="text-xl font-semibold mb-1">Bachelor of Technology in CSE</h4>
              <p className="text-muted-foreground">Techno Bengal Institute of Technology</p>
              <p className="text-muted-foreground">2023 - 2027*</p>
              <p className="text-muted-foreground mt-2">
                Currently in 3rd year, pursuing B.Tech with focus on software development, algorithms and core subjects. 
              </p>
            </div>

            {/* Higher Secondary */}
            <div className="gradient-border p-6 rounded-lg bg-background/10 backdrop-blur-sm card-hover text-left hover:border-primary">
              <h4 className="text-xl font-semibold mb-1">Higher Secondary (12th Grade)</h4>
              <p className="text-muted-foreground">Tehatta High School (WBCHSE)</p>
              <p className="text-muted-foreground">2023</p>
              <p className="text-muted-foreground mt-2">
                Completed Higher Secondary examination with strong performance in PCMB with 83.6%
              </p>
            </div>

            {/* Secondary */}
            <div className="gradient-border p-6 rounded-lg bg-background/10 backdrop-blur-sm card-hover text-left hover:border-primary">
              <h4 className="text-xl font-semibold mb-1">Secondary (10th Grade)</h4>
              <p className="text-muted-foreground">Tehatta High School (WBBSE)</p>
              <p className="text-muted-foreground">2021</p>
              <p className="text-muted-foreground mt-2">
                Completed Madhyamik examination with 88.4%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
