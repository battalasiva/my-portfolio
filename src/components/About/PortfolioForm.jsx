import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortfolio, updatePortfolio } from '../../redux/slices/portfolioSlice';
import { FaTrash } from 'react-icons/fa';
import { Form, FormGroup, Label, Input, TextArea } from '../common/Form.styles';
import { FormButton, ButtonGroup } from '../common/Button.styles';

const PortfolioForm = ({ onClose, existingData }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.portfolio);

  const [formData, setFormData] = useState({
    name: existingData?.name || '',
    title: existingData?.title || '',
    bio_one: existingData?.bio_one || '',
    bio_two: existingData?.bio_two || '',
    bio_three: existingData?.bio_three || '',
    resumeUrl: existingData?.resumeUrl || '',
    skills: existingData?.skills ? JSON.parse(JSON.stringify(existingData.skills)) : [{ category: '', technologies: [''] }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = JSON.parse(JSON.stringify(formData.skills));
    if (field === 'category') {
      newSkills[index].category = value;
    } else {
      newSkills[index].technologies = value.split(',').map(t => t.trim());
    }
    setFormData({ ...formData, skills: newSkills });
  };

  const removeSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { category: '', technologies: [''] }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (existingData) {
      await dispatch(updatePortfolio(formData));
    } else {
      await dispatch(createPortfolio(formData));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name *</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Title *</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Mobile App/Web Developer"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Bio Paragraph 1 *</Label>
        <TextArea
          name="bio_one"
          value={formData.bio_one}
          onChange={handleChange}
          placeholder="First paragraph of your bio"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Bio Paragraph 2 *</Label>
        <TextArea
          name="bio_two"
          value={formData.bio_two}
          onChange={handleChange}
          placeholder="Second paragraph of your bio"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Bio Paragraph 3 *</Label>
        <TextArea
          name="bio_three"
          value={formData.bio_three}
          onChange={handleChange}
          placeholder="Third paragraph of your bio"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Resume URL *</Label>
        <Input
          type="url"
          name="resumeUrl"
          value={formData.resumeUrl}
          onChange={handleChange}
          placeholder="https://example.com/resume.pdf"
          required
        />
      </FormGroup>

      {formData.skills.map((skill, index) => (
        <div key={index} style={{ position: 'relative', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '15px', background: '#f9f9f9' }}>
          {formData.skills.length > 1 && (
            <button
              type="button"
              onClick={() => removeSkill(index)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#c82333'}
              onMouseOut={(e) => e.currentTarget.style.background = '#dc3545'}
              title="Delete this skill category"
            >
              <FaTrash />
            </button>
          )}
          <FormGroup>
            <Label>Skill Category {index + 1}</Label>
            <Input
              type="text"
              value={skill.category}
              onChange={(e) => handleSkillChange(index, 'category', e.target.value)}
              placeholder="e.g., Mobile App Development"
            />
          </FormGroup>
          <FormGroup>
            <Label>Technologies (comma separated)</Label>
            <Input
              type="text"
              value={skill.technologies.join(', ')}
              onChange={(e) => handleSkillChange(index, 'technologies', e.target.value)}
              placeholder="e.g., Flutter, React Native"
            />
          </FormGroup>
        </div>
      ))}

      <FormButton type="button" onClick={addSkill}>
        + Add Skill Category
      </FormButton>

      <ButtonGroup>
        <FormButton type="button" onClick={onClose} disabled={loading}>
          Cancel
        </FormButton>
        <FormButton type="submit" primary disabled={loading}>
          {loading ? 'Saving...' : existingData ? 'Update' : 'Create'}
        </FormButton>
      </ButtonGroup>
    </Form>
  );
};

export default PortfolioForm;