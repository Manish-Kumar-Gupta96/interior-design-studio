import {
  useState,
  type ChangeEvent,
  type FormEvent
} from "react";

import {
  budgets,
  projectSizes,
  projectTypes,
  servicesRequired,
  timelines
} from "../../data/contact";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  projectSize: string;
  budget: string;
  timeline: string;
  services: string[];
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  projectSize: "",
  budget: "",
  timeline: "",
  services: [],
  message: ""
};

function ProjectInquiryForm() {

  const [form, setForm] =
    useState<FormState>(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    const {
      name,
      value
    } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const handleServiceChange = (
    value: string
  ) => {

    setForm((current) => {

      const exists =
        current.services.includes(value);

      return {
        ...current,
        services: exists
          ? current.services.filter(
              (item) => item !== value
            )
          : [
              ...current.services,
              value
            ]
      };

    });
  };

  const validate = () => {

    const nextErrors:
      Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name =
        "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email =
        "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(form.email)
    ) {
      nextErrors.email =
        "Please enter a valid email.";
    }

    if (!form.projectType) {
      nextErrors.projectType =
        "Please select a project type.";
    }

    if (!form.location.trim()) {
      nextErrors.location =
        "Please enter the project location.";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please tell us a little about your project.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);

    setForm(initialForm);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (submitted) {
    return (
      <section className="inquiry-form-section section">

        <div className="container-studio">

          <div className="inquiry-success">

            <span>
              Enquiry Received
            </span>

            <h2>
              Thank you.
              <br />
              <em>We'll be in touch.</em>
            </h2>

            <p>
              Your project details have been
              received. Our studio will review
              your enquiry and get back to you
              shortly.
            </p>

            <button
              type="button"
              onClick={() =>
                setSubmitted(false)
              }
            >
              Send another enquiry
              <strong>↗</strong>
            </button>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="inquiry-form-section section">

      <div className="container-studio">

        <div className="inquiry-form-header">

          <div>
            <span>
              Project Enquiry
            </span>

            <h2>
              Let's begin
              <br />
              <em>with the details.</em>
            </h2>
          </div>

          <p>
            The more you can tell us, the better
            we can understand your project.
          </p>

        </div>

        <form
          className="project-inquiry-form"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="form-section-title">
            <span>01</span>
            <h3>About you</h3>
          </div>

          <div className="form-grid form-grid-two">

            <div className="form-field">

              <label htmlFor="name">
                Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small>
                  {errors.name}
                </small>
              )}

            </div>

            <div className="form-field">

              <label htmlFor="email">
                Email *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small>
                  {errors.email}
                </small>
              )}

            </div>

            <div className="form-field">

              <label htmlFor="phone">
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                value={form.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-field">

              <label htmlFor="location">
                Project Location *
              </label>

              <input
                id="location"
                name="location"
                type="text"
                placeholder="City / Country"
                value={form.location}
                onChange={handleChange}
              />

              {errors.location && (
                <small>
                  {errors.location}
                </small>
              )}

            </div>

          </div>

          <div className="form-section-title">

            <span>02</span>

            <h3>
              About the project
            </h3>

          </div>

          <div className="form-grid form-grid-two">

            <div className="form-field">

              <label htmlFor="projectType">
                Project Type *
              </label>

              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
              >

                <option value="">
                  Select project type
                </option>

                {projectTypes.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}

              </select>

              {errors.projectType && (
                <small>
                  {errors.projectType}
                </small>
              )}

            </div>

            <div className="form-field">

              <label htmlFor="projectSize">
                Approximate Size
              </label>

              <select
                id="projectSize"
                name="projectSize"
                value={form.projectSize}
                onChange={handleChange}
              >

                <option value="">
                  Select size
                </option>

                {projectSizes.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}

              </select>

            </div>

            <div className="form-field">

              <label htmlFor="budget">
                Approximate Budget
              </label>

              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
              >

                <option value="">
                  Select budget
                </option>

                {budgets.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}

              </select>

            </div>

            <div className="form-field">

              <label htmlFor="timeline">
                Desired Timeline
              </label>

              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
              >

                <option value="">
                  Select timeline
                </option>

                {timelines.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}

              </select>

            </div>

          </div>

          <div className="form-section-title">

            <span>03</span>

            <h3>
              What can we help with?
            </h3>

          </div>

          <div className="service-checkboxes">

            {servicesRequired.map(
              (service) => (

                <label
                  key={service.value}
                  className={
                    form.services.includes(
                      service.value
                    )
                      ? "service-checkbox active"
                      : "service-checkbox"
                  }
                >

                  <input
                    type="checkbox"
                    checked={form.services.includes(
                      service.value
                    )}
                    onChange={() =>
                      handleServiceChange(
                        service.value
                      )
                    }
                  />

                  <span>
                    {service.label}
                  </span>

                  <strong>
                    {form.services.includes(
                      service.value
                    )
                      ? "✓"
                      : "+"
                    }
                  </strong>

                </label>

              )
            )}

          </div>

          <div className="form-section-title">

            <span>04</span>

            <h3>
              Tell us more
            </h3>

          </div>

          <div className="form-field form-message">

            <label htmlFor="message">
              Project Description *
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Tell us about your project, what you're looking for and anything else you think we should know."
              value={form.message}
              onChange={handleChange}
            />

            {errors.message && (
              <small>
                {errors.message}
              </small>
            )}

          </div>

          <div className="form-submit-row">

            <p>
              By submitting this form, you agree
              to be contacted regarding your enquiry.
            </p>

            <button type="submit">

              Submit enquiry

              <strong>
                ↗
              </strong>

            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default ProjectInquiryForm;
