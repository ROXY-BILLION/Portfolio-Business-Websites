
import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const statistics = [
    { value: 24, suffix: "+", label: "Project concepts" },
    { value: 12, suffix: "+", label: "Technology skills" },
    { value: 100, suffix: "%", label: "Commitment to quality" },
    { value: 4, suffix: "", label: "Core service areas" }
];

function Stats() {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" id="results" ref={sectionRef}>
            <div className="stats__heading">
                <span className="eyebrow">OUR APPROACH</span>
                <h2>Built with purpose. Measured by impact.</h2>
                <p>
                    We focus on useful solutions, thoughtful execution, and
                    technology that serves a clear objective.
                </p>
            </div>

            <div className="stats__grid">
                {statistics.map((statistic) => (
                    <article className="stats__item" key={statistic.label}>
                        <strong>
                            {started ? statistic.value : 0}
                            {statistic.suffix}
                        </strong>
                        <span>{statistic.label}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Stats;
