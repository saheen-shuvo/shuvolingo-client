/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div className="my-8 md:my-12 max-w-7xl mx-auto px-4 md:px-0">
        <h1 className="text-center text-xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        How do I sign up for a course?
        </div>
        <div className="collapse-content">
          <p>"Sign Up," create an account, and choose your desired course.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I learn multiple languages at once?
        </div>
        <div className="collapse-content">
          <p>Yes, you can enroll in multiple courses simultaneously.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Are the courses beginner-friendly?
        </div>
        <div className="collapse-content">
          <p>Absolutely! We offer courses for all levels, including beginners.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Do I get a certificate after completing a course?
        </div>
        <div className="collapse-content">
          <p>Yes, you'll receive a digital certificate upon completion.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I access lessons offline?
        </div>
        <div className="collapse-content">
          <p>Yes, download lessons for offline access via our app.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
