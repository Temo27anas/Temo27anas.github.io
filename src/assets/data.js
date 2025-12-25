const data_studies = [
    {
    start_date: "2025",
    end_date: "Present",
    location: "Helsinki, Finland",
    main: "MSc. Computer Science",
    sub: "Aalto University",
    description_list: ["Aalto’s Full Excellence Scholarship", "Relevant Coursework: Ambient Intelligence • Wireless Systems • Mobile Communication • Networked Systems"],
    logo: "/logo_aalto.png"
    
},
  
  {
    start_date: "2024",
    end_date: "2025",
    location: "Helsinki, Finland",
    main: "BSc. Computer Science",
    sub: "University of Helsinki",
    description_list: ["Relevant Coursework: Data Science for IoT, Networked AI, Data Warehouse, Advanced Machine Learning, ect..."],
    logo: "/logo_uh.jpg"
},
  {
      start_date: "2021",
      end_date: "2025",
      location: "Ifrane, Morocco",
      main: "BSc. Computer Science - Minor: Data Science",
      sub: "Al Akhawayn University In Ifrane",
      description_list: ["ABET - NECHE Accredited Institution", "Awarded Full-Merit Scholarship • 3x President’s List Award • 2x Dean’s List Award", "Relevant Coursework: DS • Algos • OOP • Software Engineering • Competitive Programming • DBMS • AI • Computing Paradigms "],
      logo: "/logo_AUI.jpg"
  },
  {
    start_date: "2019",
    end_date: "2021",
    location: "Casablanca, Morocco",
    main: "Ibn Mandour High School",
    sub: "Baccalaureate - French Option , Mathematical Sciences B ",
    description_list: ["Grade: Very Good / Très Bien", "French-oriented curriculum. Major concentrated in Mathematics and Engineering studies."]
},

]

const data_work = [
  {
    start_date: "2025",
    end_date: "Present",
    location: "Espoo, Finland",
    main: "AI/ML Research Assistant",
    sub: "Aalto University (R2B Program)",
    description_list: ["Working on computer vision applications for Structural Health Monitoring within the civil engineering department, focusing on developing an agentic AI–based end-to-end pipeline for automated detection and extraction of structural damages. ", "Trained and used ML engineering tools on vision models in the CSC (Finland) cloud environment."],
    logo: "/logo_aalto.png"
},
{
    start_date: "2025",
    end_date: "2025",
    location: "Helsinki, Finland",
    main: "AI/ML Thesis Worker",
    sub: "University of Helsinki",
    description_list: ["Developed a system for Dr. Martha’s research group to estimate vehicle crowd densities, utilizing real-time edge object detection and tracking with YOLOv11",
       "Incorporated OCR methods for license plate recognition and optimized the deployment through model compression techniques using NCNN and TensorRT for Edge devices, enabling efficient real-time inference at 25–60 FPS"],
    logo: "/logo_uh.jpg"
},
{
      start_date: "2024",
      end_date: "2024",
      location: "Espoo, Finland",
      main: "AI/ML Research Assistant",
      sub: "The Finnish Geospatial Research Institute",
      description_list: ["Conducted research under the supervision of Dr. Eetu Puttonen on a novel approach for classifying segmented trees in 3D point cloud data from LiDAR scanners, utilizing the attention mechanism, and proposed future directions for improvement",
         "Implemented Python scripts for cleaning and processing point cloud data and trained Vision-Transformers-based video models using Transformers and Pytorch-based video libraries.  "],
      logo: "/logo_fgi.jpg"
  },
  {
      start_date: "2023",
      end_date: "2023",
      location: "Casablanca, Morocco",
      main: "AI/ML Intern",
      sub: "Leyton",
      description_list: ["Developed an internal NLP tool to allow R&D consultants to identify potential client companies by crawling website content and using Semantic Search and Few-Shot Learning to classify clients automatically, eliminating the manual review time. ", 
                        "Prepared the training data using Argilla, trained the model with PyTorch and Docker, and developed a Streamlit web app with a RESTful API for deployment"
                        ],
      logo: "/logo_leyton.jfif"
  }

]

export {data_studies, data_work};