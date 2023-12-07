import "./survey.css";

const Survey = () => {
  return (
    <div className="container">
      <section className="survey-section">
        <h3 className="heading desktop-heading">Tell us your opinion</h3>
        <img src="/survey.png" alt="" className="desktop-survey" />
        <img src="/survey-mobile.png" alt="" className="mobile-survey" />
        <h3 className="heading mobile-heading">Tell us your opinion</h3>
        <p className="description">
          We developed a quick survay for you to share your toughs and
          partecipate in the develoment of our solution to help the australian
          health System
        </p>
        <button className="button-primary">
          <span>Partecipate</span>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </section>
    </div>
  );
};

export default Survey;
