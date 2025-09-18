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
              Passionate Software Developer , Tech enthusiastic and Speed Cuber
            </h3>

            <p className="text-muted-foreground">
              Proficient in designing and developing responsive, modern, and visually appealing websites using the MEAN stack, ensuring seamless user experience across all devices.
            </p>

            <p className="text-muted-foreground">
              Skilled in Data Structures to solve problems using C++. With over 250+ questions on LeetCode and GFG
            </p>

            <p className="text-muted-foreground">
              Using CFOF and Advanced CFOF to solve Rubik's Cube with the fastest 3x3 solve time of 14.11 seconds.
            </p>


            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get in Touch</a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary bg-white/10 backdrop-blur-lg hover:bg-primary hover:text-white transition duration-300"
              >
                Download CV
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
              <p className="text-muted-foreground">Tehatta High School</p>
              <p className="text-muted-foreground">2021 - 2023</p>
              <p className="text-muted-foreground mt-2">
                Completed Higher Secondary examination with strong performance in PCMB with 83.6%
              </p>
            </div>

            {/* Secondary */}
            <div className="gradient-border p-6 rounded-lg bg-background/10 backdrop-blur-sm card-hover text-left hover:border-primary">
              <h4 className="text-xl font-semibold mb-1">Secondary (10th Grade)</h4>
              <p className="text-muted-foreground">Tehatta High School</p>
              <p className="text-muted-foreground">2015 - 2021</p>
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
