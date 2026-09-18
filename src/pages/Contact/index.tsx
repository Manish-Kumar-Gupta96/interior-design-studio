import { useState, FormEvent } from "react";
import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";
import StudioButton from "../../components/common/StudioButton";

interface FormFields {
  name: string;
  email: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

function Contact() {
  const breadcrumbs = [{ label: "Contact", href: "/contact" }];

  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    category: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user typse
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fields.name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (fields.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
    }

    if (!fields.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!emailRegex.test(fields.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!fields.category) {
      tempErrors.category = "Please select a project category.";
    }

    if (!fields.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (fields.message.trim().length < 15) {
      tempErrors.message = "Message must be at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful API submission
      setSuccess(true);
      setFields({
        name: "",
        email: "",
        category: "",
        message: ""
      });
    }
  };

  return (
    <div className="contact-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Contact Us"
        eyebrow="Connect with our studio"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         CONTACT GRID
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          
          <div className="grid grid-2 gap-16">
            
            {/* Left Column: Details & Office info */}
            <div data-aos="fade-right">
              <span className="section-number">DETAILS</span>
              <h2 className="display-title mt-4 mb-8" style={{ fontSize: "clamp(2rem, 4vw, var(--fs-3xl))" }}>
                Let's discuss your project.
              </h2>
              <p className="mb-8" style={{ maxWidth: "480px" }}>
                Whether you have a complete blueprint schedule or a raw residential shell, we would love to hear your ideas. Fill out our form or visit our studio district office.
              </p>

              <div className="flex flex-column gap-6">
                <div>
                  <span className="label text-muted d-block mb-1">Office Address</span>
                  <address style={{ fontSize: "var(--fs-md)", fontWeight: 500, color: "var(--color-primary)" }}>
                    14 Design District, Colaba, Mumbai, India - 400001
                  </address>
                </div>

                <div>
                  <span className="label text-muted d-block mb-1">Project Inquiries</span>
                  <a 
                    href="mailto:hello@atelierstudio.com" 
                    style={{ fontSize: "var(--fs-md)", fontWeight: 500, color: "var(--color-accent-dark)" }}
                  >
                    hello@atelierstudio.com
                  </a>
                </div>

                <div>
                  <span className="label text-muted d-block mb-1">Telephone</span>
                  <a 
                    href="tel:+912250000000" 
                    style={{ fontSize: "var(--fs-md)", fontWeight: 500, color: "var(--color-primary)" }}
                  >
                    +91 22 5000 0000
                  </a>
                </div>

                <div>
                  <span className="label text-muted d-block mb-1">Working Hours</span>
                  <span style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-soft)" }}>
                    Monday – Friday: 09:00 – 18:00 (IST)<br />
                    Saturday & Sunday: Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Validation Form */}
            <div data-aos="fade-left">
              <div 
                className="p-8 p-md-12" 
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <h3 className="mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", fontWeight: 500 }}>
                  Inquiry Form
                </h3>

                {success && (
                  <div 
                    className="p-4 mb-6" 
                    style={{
                      background: "rgba(181, 139, 90, 0.15)",
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent-dark)",
                      fontSize: "var(--fs-sm)"
                    }}
                  >
                    Thank you! Your inquiry has been submitted. A designer from our studio will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={fields.name}
                      onChange={handleInputChange}
                      className="form-control-studio"
                      placeholder="e.g. Siddharth Sen"
                    />
                    {errors.name && (
                      <div className="invalid-feedback-studio">{errors.name}</div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={fields.email}
                      onChange={handleInputChange}
                      className="form-control-studio"
                      placeholder="e.g. siddharth@example.com"
                    />
                    {errors.email && (
                      <div className="invalid-feedback-studio">{errors.email}</div>
                    )}
                  </div>

                  {/* Project Category */}
                  <div className="form-group">
                    <label htmlFor="category" className="form-label">Project Type</label>
                    <select
                      id="category"
                      name="category"
                      value={fields.category}
                      onChange={handleInputChange}
                      className="form-control-studio"
                      style={{ height: "46px" }}
                    >
                      <option value="">Select a category...</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="hospitality">Hospitality Design</option>
                      <option value="styling">Styling & Curation</option>
                    </select>
                    {errors.category && (
                      <div className="invalid-feedback-studio">{errors.category}</div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={fields.message}
                      onChange={handleInputChange}
                      className="form-control-studio"
                      rows={5}
                      placeholder="Briefly describe your spatial requirements and scope..."
                    />
                    {errors.message && (
                      <div className="invalid-feedback-studio">{errors.message}</div>
                    )}
                  </div>

                  <div className="mt-8">
                    <StudioButton type="submit" variant="dark" className="w-full">
                      Submit Inquiry
                    </StudioButton>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         MAP COORDINATE REPRESENTATION
      ========================================= */}
      <section className="section p-0">
        <div 
          className="w-full relative flex items-center justify-center section-dark"
          style={{ height: "350px", background: "var(--color-primary-soft)" }}
        >
          {/* Aesthetic grid drawing representation */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, var(--color-white) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />
          <div className="text-center relative" style={{ zIndex: 2 }} data-aos="fade-up">
            <span className="eyebrow mb-3" style={{ color: "var(--color-secondary-soft)" }}>Coordinates</span>
            <h3 className="text-serif italic text-white mb-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Atelier Location Map
            </h3>
            <p className="opacity-50 mb-0" style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase" }}>
              Latitude: 18.9219° N &middot; Longitude: 72.8325° E
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
