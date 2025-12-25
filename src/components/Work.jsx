/**components */
import ProjectCard from "./ProjectCard";



const works = [
  {
    imgSrc: '/images/python-one.jpeg',
    title: 'Customer-Churn-Prediction',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn','XGBoost', 'Predictive Modeling'],
    projectLink: 'https://github.com/kluckysingh/Customer_Churn_Prediction.git'
  },
  {
    imgSrc: '/images/c++-one.jpeg',
    title: 'Bfs-Visualizer c++ code',
    tags: ['c++', 'Algorithms', 'Data Structures'],
    projectLink: 'https://github.com/kluckysingh/bfsVisualizer.git'
  },
  {
    imgSrc: '/images/pcos.png',
    title: 'PCOS-Detection-website',
    tags: ['Development', 'API','HTML','CSS', 'JavaScript', 'React.js'],
    projectLink: 'https://pcos-detection.netlify.app/'
  },
  {
    imgSrc: '/images/movie.png',
    title: 'Movie-Recommendation-system',
    tags: [ 'Machine Learning','Recommendation Systems','NLP', 'Data Analysis'],
    projectLink: 'https://github.com/kluckysingh/movie-recommendation-system.git'
  },
  {
    imgSrc: '/images/fruit-one.png',
    title: 'eCommerce website',
    tags: ['React.js', 'Development'],
    projectLink: 'https://fruity-ecommerce.netlify.app/'
  },
  {
    imgSrc: '/images/ship1.png',
    title: 'Alien Invansion Python game',
    tags: ['Python', 'Game'],
    projectLink: 'https://github.com/kluckysingh/Alien-Invasion.git'
  },
];


const Work = () => {
    return(
        <section
        id="work"
        className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8  reveal-up">
                    Projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, 
                    key) => (
                        <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        
                        />

                    ))}
                </div>

            </div>

        </section>
    )
}

export default Work
