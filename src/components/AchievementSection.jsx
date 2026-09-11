import React from "react";

const certificates = [
    {
        id: 1,
        title: "Getting Started with Artificial Intelligence",
        description:
            "IBM SkillsBuild certification covering the fundamentals and practical applications of Artificial Intelligence.",
        pdf: "/certificates/IBM.pdf",
        date: "September 2024",
    },

    {
        id: 2,
        title: "Python Programming for Beginners",
        description:
            "Certificate demonstrating foundational knowledge of Python programming, including syntax, variables, functions, and basic programming concepts.",
        pdf: "/certificates/Python.cursa.pdf",
        date: "May 2025",
    },

    {
        id: 3,
        title: "Web Development for Beginners",
        description:
            "Certificate covering the fundamentals of web development, including HTML, CSS, JavaScript, and essential web concepts.",
        pdf: "/certificates/WebDev.cursa.pdf",
        date: "May 2025",
    },

    {
        id: 4,
        title: "Data Science Virtual Internship",
        description:
            "Successfully completed a one-month virtual internship at ShadowFox, gaining hands-on experience with data science concepts and practical projects.",
        pdf: "/certificates/DataScience.pdf",
        date: "September 2025",
    },

    {
        id: 5,
        title: "SAP S/4HANA Development",
        description:
            "Certification in SAP S/4HANA development, covering next-generation ERP technologies through the SAP University Alliances program.",
        pdf: "/certificates/SAP.pdf",
        date: "January 2026",
    },
];

export default function AchievementSection() {
    return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Certificates</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent Achivements & Certificates
                </p>

                {/* Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:border-primary"
                        >

                            {/* Certificate Image */}
                            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                                <img
                                    src={certificate.pdf}
                                    alt={certificate.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Certificate Details */}
                            <div className="p-5">

                                <h3 className="font-semibold text-lg">
                                    {certificate.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mt-2">
                                    {certificate.description}
                                </p>

                                <p className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:border-primary">
                                    {certificate.date}
                                </p>

                                {/* View Certificate */}
                                <a
                                    href={certificate.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                                >
                                    View Certificate →
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}