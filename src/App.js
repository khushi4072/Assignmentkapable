import React, { useState, useEffect, useRef } from 'react';
import './LeadershipWebsite.css';

const AdvancedLeadership = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    goals: '',
    preferredDate: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  const programs = [
    {
      id: 1,
      title: 'Fast, Fluent & Structured Thinking',
      description: 'Enhance cognitive abilities for efficient problem-solving',
      icon: '🧠',
      color: '#8B5CF6',
      duration: '4 weeks',
      sessions: '8 sessions',
      features: ['Critical Thinking', 'Decision Making', 'Strategic Planning', 'Cognitive Flexibility']
    },
    {
      id: 2,
      title: 'Leadership & Team Management',
      description: 'Develop leadership skills for team motivation and success',
      icon: '👨‍💼',
      color: '#10B981',
      duration: '6 weeks',
      sessions: '12 sessions',
      features: ['Team Building', 'Conflict Resolution', 'Performance Management', 'Strategic Leadership']
    },
    {
      id: 3,
      title: 'Influence & Charisma',
      description: 'Build charismatic presence and master influence',
      icon: '✨',
      color: '#F59E0B',
      duration: '5 weeks',
      sessions: '10 sessions',
      features: ['Personal Branding', 'Networking', 'Persuasion', 'Executive Presence']
    },
    {
      id: 4,
      title: 'Power Presentation & Storytelling',
      description: 'Master engaging storytelling and impactful presentations',
      icon: '🎤',
      color: '#EF4444',
      duration: '4 weeks',
      sessions: '8 sessions',
      features: ['Story Structure', 'Visual Design', 'Delivery Techniques', 'Audience Engagement']
    },
    {
      id: 5,
      title: 'Negotiation & Persuasion',
      description: 'Learn skillful negotiation and effective persuasion',
      icon: '🤝',
      color: '#3B82F6',
      duration: '5 weeks',
      sessions: '10 sessions',
      features: ['Win-Win Strategies', 'Communication Tactics', 'Deal Closing', 'Conflict Management']
    },
    {
      id: 6,
      title: 'Communication & Public Speaking',
      description: 'Boost confidence in public speaking and presentations',
      icon: '🗣️',
      color: '#EC4899',
      duration: '6 weeks',
      sessions: '12 sessions',
      features: ['Speech Writing', 'Voice Modulation', 'Stage Presence', 'Q&A Handling']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP Engineering, Google',
      text: 'This program transformed my leadership style completely. The 1-on-1 sessions were game-changing.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director, Microsoft',
      text: 'Best investment in my career. The personalized approach helped me overcome my public speaking fear.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, TechStart',
      text: 'The negotiation skills I learned helped me secure $2M in funding. Absolutely phenomenal program!',
      avatar: '👩‍💻',
      rating: 5
    }
  ];

  const metrics = [
    { value: '95%', label: 'Success Rate', icon: '🎯' },
    { value: '10K+', label: 'Professionals Trained', icon: '👥' },
    { value: '500+', label: 'Global Companies', icon: '🏢' },
    { value: '4.9/5', label: 'Average Rating', icon: '⭐' }
  ];

  const timeline = [
    { week: 1, title: 'Assessment & Goal Setting', description: 'Personalized skill gap analysis' },
    { week: 2, title: 'Core Skill Development', description: 'Focused training sessions' },
    { week: 3, title: 'Practical Application', description: 'Real-world scenarios' },
    { week: 4, title: 'Advanced Techniques', description: 'Masterclass sessions' },
    { week: 5, title: 'Integration & Practice', description: 'Simulation exercises' },
    { week: 6, title: 'Certification & Networking', description: 'Graduation and connections' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProgramSelect = (programId) => {
    setSelectedPrograms(prev =>
      prev.includes(programId)
        ? prev.filter(id => id !== programId)
        : [...prev, programId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    console.log('Form submitted:', { ...formData, selectedPrograms });
  };

  const CursorEffect = () => (
    <div className="cursor-dot" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
  );

  return (
    <div className="advanced-leadership">
      <CursorEffect />

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-background">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          {/* Fixed Navigation - All anchor tags replaced with buttons */}
          <nav className="glass-nav">
            <div className="nav-brand">
              <span className="brand-icon">🎯</span>
              <span className="brand-text">kapab<span className="gradient-text">le</span></span>
            </div>
            <div className="nav-menu">
              <button
                className="nav-link"
                onClick={() => scrollToSection('programs')}
              >
                Programs
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection('enroll')}
              >
                Contact
              </button>
              <button
                className="nav-button"
                onClick={() => scrollToSection('enroll')}
              >
                <span>Book Session</span>
                <span className="button-arrow">→</span>
              </button>
            </div>
          </nav>

          <div className="hero-main">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Cohort Starting December 13, 2025</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Think, <span className="gradient-text">Speak</span></span>
              <span className="title-line">and <span className="gradient-text">Lead</span> with</span>
              <span className="title-line">Absolute Confidence</span>
            </h1>

            <p className="hero-subtitle">
              Transform your leadership presence through personalized 1-on-1 coaching,
              cutting-edge curriculum, and measurable results.
            </p>

            <div className="hero-stats">
              {metrics.map((metric, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{metric.icon}</div>
                  <div className="stat-value">{metric.value}</div>
                  <div className="stat-label">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <button
                className="primary-cta"
                onClick={() => scrollToSection('enroll')}
              >
                <span className="cta-text">Book Session for ₹499</span>
                <span className="cta-badge">75% OFF</span>
                <span className="cta-sparkle">✨</span>
              </button>
              <button
                className="secondary-cta"
                onClick={() => scrollToSection('programs')}
              >
                <span>View Program Details</span>
                <span className="arrow-icon">↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="companies-section">
        <div className="section-header">
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Industry Leaders</span> Worldwide
          </h2>
        </div>

        <div className="companies-marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-group">
                {['Amazon', 'Google', 'Microsoft', 'Meta', 'Apple', 'Tesla', 'Netflix', 'Uber'].map((company, j) => (
                  <div key={j} className="company-logo">
                    <div className="logo-bg"></div>
                    <span className="logo-text">{company}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Customize Your <span className="gradient-text">Leadership Journey</span>
            </h2>
            <p className="section-subtitle">
              Select from our comprehensive modules to build your perfect learning path
            </p>
          </div>

          <div className="tabs-container">
            <div className="tabs">
              {['All Programs', 'Leadership', 'Communication', 'Strategy'].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`program-card ${selectedPrograms.includes(program.id) ? 'selected' : ''}`}
                onClick={() => handleProgramSelect(program.id)}
              >
                <div className="program-header">
                  <div className="program-icon" style={{ backgroundColor: `${program.color}20` }}>
                    <span style={{ color: program.color }}>{program.icon}</span>
                  </div>
                  <div className="program-select">
                    <input
                      type="checkbox"
                      checked={selectedPrograms.includes(program.id)}
                      onChange={() => handleProgramSelect(program.id)}
                    />
                    <span className="checkmark"></span>
                  </div>
                </div>

                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>

                <div className="program-features">
                  {program.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="program-footer">
                  <div className="program-meta">
                    <span className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      {program.duration}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">🎯</span>
                      {program.sessions}
                    </span>
                  </div>
                  <span className="program-price">Included</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Your <span className="gradient-text">6-Week Transformation</span> Journey
            </h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-circle"></div>
                  <div className="marker-week">Week {item.week}</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Success <span className="gradient-text">Stories</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <span className="program-tag">Leadership Program</span>
                  <span className="outcome-tag">+245% Impact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="enrollment-section">
        <div className="enrollment-container">
          <div className="enrollment-card">
            <div className="card-header">
              <div className="header-badge">
                <span className="badge-icon">🎯</span>
                <span>Limited Time Offer</span>
              </div>
              <h2 className="enrollment-title">
                Secure Your Spot in the <span className="gradient-text">December Cohort</span>
              </h2>
              <p className="enrollment-subtitle">
                Join 60 exceptional leaders in transforming their communication and leadership skills
              </p>
            </div>

            <div className="card-content">
              <form onSubmit={handleSubmit} className="enrollment-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-icon">👤</span>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-icon">✉️</span>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-icon">📱</span>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-icon">💼</span>
                      Current Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="e.g., Senior Manager, Founder"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">🎯</span>
                    Career Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="What do you hope to achieve through this program?"
                    className="form-textarea"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    <span className="button-text">Book Your Session Now</span>
                    <span className="button-price">₹499</span>
                    <span className="button-arrow">→</span>
                  </button>

                  <div className="form-security">
                    <span className="security-icon">🔒</span>
                    <span className="security-text">Secure enrollment • 7-day money-back guarantee</span>
                  </div>
                </div>
              </form>

              <div className="enrollment-features">
                <div className="feature">
                  <div className="feature-icon">✅</div>
                  <div className="feature-content">
                    <h4>Personalized 1-on-1 Coaching</h4>
                    <p>Dedicated mentor for your entire journey</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">✅</div>
                  <div className="feature-content">
                    <h4>Live Interactive Sessions</h4>
                    <p>Real-time feedback and practice</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">✅</div>
                  <div className="feature-content">
                    <h4>Global Network Access</h4>
                    <p>Connect with 10,000+ professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - All anchor tags fixed */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand">
                <span className="brand-icon">🎯</span>
                <span className="brand-text">kapab<span className="gradient-text">le</span></span>
              </div>
              <p className="footer-tagline">
                Empowering leaders to communicate with confidence and lead with impact.
              </p>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h4>Programs</h4>
                <button className="footer-link" onClick={() => scrollToSection('programs')}>
                  Leadership Development
                </button>
                <button className="footer-link" onClick={() => scrollToSection('programs')}>
                  Communication Mastery
                </button>
                <button className="footer-link" onClick={() => scrollToSection('programs')}>
                  Executive Presence
                </button>
                <button className="footer-link" onClick={() => scrollToSection('programs')}>
                  Strategic Thinking
                </button>
              </div>

              <div className="link-column">
                <h4>Company</h4>
                <button className="footer-link" onClick={() => window.open('/about', '_blank')}>
                  About Us
                </button>
                <button className="footer-link" onClick={() => scrollToSection('testimonials')}>
                  Success Stories
                </button>
                <button className="footer-link" onClick={() => window.open('/careers', '_blank')}>
                  Careers
                </button>
                <button className="footer-link" onClick={() => window.open('/press', '_blank')}>
                  Press
                </button>
              </div>

              <div className="link-column">
                <h4>Resources</h4>
                <button className="footer-link" onClick={() => window.open('/blog', '_blank')}>
                  Blog
                </button>
                <button className="footer-link" onClick={() => window.open('/research', '_blank')}>
                  Research
                </button>
                <button className="footer-link" onClick={() => window.open('/tools', '_blank')}>
                  Tools
                </button>
                <button className="footer-link" onClick={() => window.open('/webinars', '_blank')}>
                  Webinars
                </button>
              </div>

              <div className="link-column">
                <h4>Connect</h4>
                <button className="footer-link" onClick={() => scrollToSection('enroll')}>
                  Contact
                </button>
                <button className="footer-link" onClick={() => window.open('/support', '_blank')}>
                  Support
                </button>
                <button className="footer-link" onClick={() => window.open('/partnerships', '_blank')}>
                  Partnerships
                </button>
                <button className="footer-link" onClick={() => scrollToSection('enroll')}>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              © 2025 Kapable. All rights reserved.
            </div>

            <div className="footer-info">
              <span>Cohort starting on 13th December, 2025</span>
              <span className="divider">•</span>
              <span>1-on-1 personalized sessions</span>
              <span className="divider">•</span>
              <span>Live online format</span>
              <span className="divider">•</span>
              <span className="highlight">Only 60 seats available</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedLeadership;