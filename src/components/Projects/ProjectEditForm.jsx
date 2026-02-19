import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../redux/slices/projectsSlice';
import imageCompression from 'browser-image-compression';
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import { Form, FormGroup, Label, Input, TextArea } from '../common/Form.styles';
import { FormButton, ButtonGroup } from '../common/Button.styles';

const ProjectEditForm = ({ onClose, project }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.projects);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(project.image);

  const [formData, setFormData] = useState({
    title: project.title || '',
    subtitle: project.subtitle || '',
    description: project.description || '',
    technologies: project.technologies || '',
    image: project.image || '',
    androidLink: project.links?.androidLink || '',
    iosLink: project.links?.iosLink || '',
    sourceLink: project.links?.sourceLink || '',
    projectLink: project.links?.projectLink || '',
    featured: project.featured || false,
    status: project.status || 'active',
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);

      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(compressedFile);

      const formDataToUpload = new FormData();
      formDataToUpload.append('image', compressedFile);

      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      const response = await axios.post(`${API_URL}/projects/upload`, formDataToUpload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        setFormData({ ...formData, image: response.data.imageUrl });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      links: {
        androidLink: formData.androidLink,
        iosLink: formData.iosLink,
        sourceLink: formData.sourceLink,
        projectLink: formData.projectLink,
      }
    };

    await dispatch(updateProject({ id: project._id, data: projectData }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Project Title *</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Wheelsmart"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Subtitle *</Label>
        <Input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="e.g., Bike Rental Application"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Description *</Label>
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Detailed project description"
          required
          rows="6"
        />
      </FormGroup>

      <FormGroup>
        <Label>Technologies *</Label>
        <Input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="e.g., Flutter, GetX, Firebase"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Project Image *</Label>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="image-upload-edit"
          />
          <label
            htmlFor="image-upload-edit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: uploading ? '#ccc' : '#667eea',
              color: 'white',
              borderRadius: '8px',
              cursor: uploading ? 'not-allowed' : 'pointer',
              fontSize: '1.4rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
            }}
          >
            {uploading ? 'Uploading...' : (
              <>
                <FaUpload /> Change Image
              </>
            )}
          </label>
        </div>
        {imagePreview && (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <img
              src={imagePreview.startsWith('/uploads') 
                ? `${process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000'}${imagePreview}`
                : imagePreview
              }
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
              }}
            />
          </div>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Android Link</Label>
        <Input
          type="url"
          name="androidLink"
          value={formData.androidLink}
          onChange={handleChange}
          placeholder="Google Play Store URL"
        />
      </FormGroup>

      <FormGroup>
        <Label>iOS Link</Label>
        <Input
          type="url"
          name="iosLink"
          value={formData.iosLink}
          onChange={handleChange}
          placeholder="Apple App Store URL"
        />
      </FormGroup>

      <FormGroup>
        <Label>Source Code Link</Label>
        <Input
          type="url"
          name="sourceLink"
          value={formData.sourceLink}
          onChange={handleChange}
          placeholder="GitHub URL"
        />
      </FormGroup>

      <FormGroup>
        <Label>Live Project Link</Label>
        <Input
          type="url"
          name="projectLink"
          value={formData.projectLink}
          onChange={handleChange}
          placeholder="Live demo URL"
        />
      </FormGroup>

      <FormGroup>
        <Label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            style={{ width: 'auto' }}
          />
          Featured Project
        </Label>
      </FormGroup>

      <FormGroup>
        <Label>Status</Label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '1.4rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="archived">Archived</option>
        </select>
      </FormGroup>

      <ButtonGroup>
        <FormButton type="button" onClick={onClose} disabled={loading || uploading}>
          Cancel
        </FormButton>
        <FormButton type="submit" primary disabled={loading || uploading || !formData.image}>
          {loading ? 'Updating...' : 'Update Project'}
        </FormButton>
      </ButtonGroup>
    </Form>
  );
};

export default ProjectEditForm;
