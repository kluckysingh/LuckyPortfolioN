import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/c++.svg',
    label: 'c++',
    desc: 'DSA & System Programming'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'python',
    desc: 'AI, ML & Backend Logic'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'javascript',
    desc: 'Modern Web Architecture'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'react',
    desc: 'Frontend Engineering'
  },
  {
    imgSrc: '/images/tailwind-css.svg',
    label: 'tailwind-css',
    desc: 'Responsive UI Design'
  },
  {
    imgSrc: '/images/sql-database.svg',
    label: 'sql-database',
    desc: 'Data Management'
  },
  {
    imgSrc: '/images/ML-AI.png',
    label: 'ML & AI',
    desc: 'Predictive Modeling'
  },
  {
    imgSrc: '/images/LLM.png',
    label: 'LLM',
    desc: 'Generative AI Integration'
  },
];
 


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools & Technologies
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the robust stack of languages, frameworks, and intelligent tools I leverage to engineer scalable software and data-driven applications
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc},Key) => 
                        (
                            <SkillCard
                            Key={Key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill