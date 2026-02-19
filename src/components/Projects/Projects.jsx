import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, deleteProject, clearSuccess } from "../../redux/slices/projectsSlice";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { 
  ProjectsSection, 
  ProjectsContainer, 
  ProjectsHeader, 
  AllProjects, 
  ProjectItem, 
  ProjectInfo, 
  ProjectHeader, 
  ProjectDescription, 
  ProjectFooter, 
  ProjectLinks, 
  ReadMoreBtn, 
  Cta1, 
  ProjectImg 
} from "./Projects.styles";
import { SectionTitle } from "../../styles/GlobalStyles";
import Loader from "../common/Loader";
import ErrorDisplay from "../common/ErrorDisplay";
import Modal from "../common/Modal";
import Toast from "../common/Toast";
import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";
import { IconButton } from "../common/Button.styles";

const Projects = () => {
  const dispatch = useDispatch();
  const { list: projects, loading, error, success } = useSelector((state) => state.projects);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (success) {
      setToastMessage(selectedProject ? 'Project updated successfully!' : 'Project created successfully!');
      setShowToast(true);
      setIsModalOpen(false);
      setIsEditModalOpen(false);
      setSelectedProject(null);
      dispatch(fetchProjects({ status: 'active' }));
      dispatch(clearSuccess());
    }
  }, [success, dispatch, selectedProject]);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (project) => {
    if (window.confirm(`Are you sure you want to delete "${project.title}"? This action cannot be undone.`)) {
      await dispatch(deleteProject(project._id));
      setToastMessage('Project deleted successfully!');
      setShowToast(true);
    }
  };

  if (loading && (!projects || projects.length === 0)) {
    return (
      <ProjectsSection id="projects">
        <ProjectsContainer className="projects">
          <ProjectsHeader className="projects-header">
            <SectionTitle className="section-title">
              Recent <span>Projects</span>
            </SectionTitle>
          </ProjectsHeader>
          <Loader minHeight="400px" />
        </ProjectsContainer>
      </ProjectsSection>
    );
  }

  if (error && (!projects || projects.length === 0)) {
    return (
      <ProjectsSection id="projects">
        <ProjectsContainer className="projects">
          <ProjectsHeader className="projects-header">
            <SectionTitle className="section-title">
              Recent <span>Projects</span>
            </SectionTitle>
          </ProjectsHeader>
          <ErrorDisplay 
            message={error} 
            onRetry={() => dispatch(fetchProjects({ status: 'active' }))} 
            minHeight="400px"
          />
        </ProjectsContainer>
      </ProjectsSection>
    );
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer className="projects">
        <ProjectsHeader className="projects-header">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
            <SectionTitle className="section-title">
              Recent <span>Projects</span>
            </SectionTitle>
            <IconButton onClick={() => setIsModalOpen(true)} title="Add Project"><FaPlus /></IconButton>
          </div>
        </ProjectsHeader>

        {!projects || projects.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '1.6rem', color: '#666', marginTop: '30px' }}>
            No projects available. Click + to add one.
          </p>
        ) : (
          <AllProjects className="all-projects">
            {projects.map((project) => {
              const isExpanded = expandedProjects[project._id];
              const shouldTruncate = project.description.length > 200;
              const displayDescription = shouldTruncate && !isExpanded 
                ? project.description.substring(0, 200) + "..." 
                : project.description;

              return (
                <ProjectItem className="project-item" key={project._id}>
                  <ProjectInfo className="project-info">
                    <ProjectHeader className="project-header">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h1>{project.title}</h1>
                          <h2>{project.subtitle}</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button
                            onClick={() => handleEdit(project)}
                            style={{
                              background: '#667eea',
                              color: 'white',
                              border: 'none',
                              borderRadius: '5px',
                              padding: '8px 12px',
                              cursor: 'pointer',
                              fontSize: '1.4rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#5568d3'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#667eea'}
                            title="Edit Project"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(project)}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '5px',
                              padding: '8px 12px',
                              cursor: 'pointer',
                              fontSize: '1.4rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#c82333'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#dc3545'}
                            title="Delete Project"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </ProjectHeader>
                    <ProjectDescription className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                      <p>{displayDescription}</p>
                      {shouldTruncate && (
                        <ReadMoreBtn 
                          className="read-more-btn"
                          onClick={() => setExpandedProjects(prev => ({
                            ...prev,
                            [project._id]: !prev[project._id]
                          }))}
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                        </ReadMoreBtn>
                      )}
                    </ProjectDescription>
                    <ProjectFooter className="project-footer">
                      <p>
                        <b>Tech Used:</b> {project.technologies}
                      </p>
                      <ProjectLinks className="project-links">
                        {project.links?.androidLink && (
                          <Cta1 href={project.links.androidLink} target="_blank" rel="noopener noreferrer" className="cta1">
                            Play Store
                          </Cta1>
                        )}
                        {project.links?.iosLink && (
                          <Cta1 href={project.links.iosLink} target="_blank" rel="noopener noreferrer" className="cta1">
                            App Store
                          </Cta1>
                        )}
                        {project.links?.projectLink && (
                          <Cta1 href={project.links.projectLink} target="_blank" rel="noopener noreferrer" className="cta1">
                            Live Demo
                          </Cta1>
                        )}
                        {project.links?.sourceLink && (
                          <Cta1 href={project.links.sourceLink} target="_blank" rel="noopener noreferrer" className="cta1">
                            Source Code
                          </Cta1>
                        )}
                      </ProjectLinks>
                    </ProjectFooter>
                  </ProjectInfo>
                  <ProjectImg className="project-img">
                    <img src={project.image} alt={project.title} />
                  </ProjectImg>
                </ProjectItem>
              );
            })}
          </AllProjects>
        )}
      </ProjectsContainer>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Add New Project"
      >
        <ProjectForm onClose={() => setIsModalOpen(false)} />
      </Modal>

      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProject(null);
        }}
        title="Edit Project"
      >
        {selectedProject && (
          <ProjectEditForm 
            onClose={() => {
              setIsEditModalOpen(false);
              setSelectedProject(null);
            }} 
            project={selectedProject} 
          />
        )}
      </Modal>

      {showToast && (
        <Toast 
          message={toastMessage} 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </ProjectsSection>
  );
};

export default Projects;
