import CardProject from "./CardProject";

const Projects = () => {
    const project1 = {
        title: "E-Commerce Application",
        description: "Implemented functionalities including add to cart, payment integration, admin/user dashboards, product search/filtering, order tracking.",
        link: "https://khatu-shyam-traders.onrender.com",
        github: "https://github.com/surendragt19/khatu_shyam_traders",
        image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        technology: ["MERN Stack","Context API","JWT","Bcrypt", "Bootstrap"],
    };

    const project2 = {
        title: "REAL-TIME CHAT APPLICATION",
        description: "Implemented real-time messaging, user authentication, group chat features, notifications, and message history management.",
        link: "https://github.com/surendragt19/Real-Time-Chat-App/",
        github: "https://github.com/surendragt19/Real-Time-Chat-App/",
        image: "https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg",
        technology: ["MERN Stack","Socket.io,","Redux Toolkit", "Tailwind CSS"],
    };
    const project3 = {
        title: "Brain Tumor Detection",
        description: "Developed a brain tumor detection system using Flask, CNN for image analysis, and React for the user interface.",
        link: "https://github.com/surendragt19/brain-tumor-detection",
        github: "https://github.com/surendragt19/brain-tumor-detection",
        image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        technology: ["CNN","Flask","Python","ReactJS"],
    };
    const project4 = {
        title: "Institute Managenent System",
        description: "Created an Institute Management System using PHP and MySQL for managing student records, attendance, and faculty information.",
        link: "https://github.com/surendragt19/instituemgmtsystem",
        github: "https://github.com/surendragt19/instituemgmtsystem",
        image: "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        technology: ["PHP","MySQL","Javascript", "Bootstrap"],
    };
    const project5 = {
        title: "Online Food Order",
        description: "Implemented functionalities including add to cart, User dashboards, product search/filtering, order history tracking.",
        link: "https://online-food-dsz9.onrender.com/",
        github: "https://github.com/surendragt19/online-food",
        image: "https://images.pexels.com/photos/5077068/pexels-photo-5077068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        technology: ["MERN Stack","Redux Toolkit","JWT", "Bootstrap"],
    };
    const project6 = {
        title: "Attendance Mgmt System",
        description: "Developed a face recognition-based attendance system leveraging facial recognition technology to accurately track attendance in schools, offices, and events.",
        link: "https://github.com/surendragt19/Attendance-Mgmt-System-face-recognition-in-Flask",
        github: "https://github.com/surendragt19/Attendance-Mgmt-System-face-recognition-in-Flask",
        image: "https://images.pexels.com/photos/8423046/pexels-photo-8423046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        technology: ["Numpy","Flask","Python","Pandas"],
    };

    // Add more projects as needed...

    const projects = [project1, project2,project3,project4,project5,project6]; // Include all your project objects here

    return (
        <div id="projects" className="project-section w-full lg:px-32 px-7 py-10 space-y-8">
            <div className="flex items-center lg:w-1/2 w-full gap-5">
                <h1 className="lg:text-4xl text-2xl text-cyenH font-bold font-[SplineSans] uppercase tracking-wide">
                    Projects
                </h1>
                <div className="h-[2px] bg-zinc-600 flex-grow"></div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-y-auto">
                {projects.map((project, index) => (
                    <CardProject key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
