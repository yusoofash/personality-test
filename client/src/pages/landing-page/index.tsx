import { useNavigate } from 'react-router-dom';
import './index.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const onStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="container">
      <section className="mb-5">
        <div className="mb-4 row">
          <div className="col-md-6">
            <h1 className="heading display-3 mb-3">What&apos;s your personality trait?</h1>
            <p className="description mb-4 fs-5">
              Are you an introvert or extrovert? Take the psychology quiz to reveal your personality
              trait.
            </p>

            <button type="button" className="btn btn-success btn-lg mb-4" onClick={onStartQuiz}>
              Start personality test
            </button>
          </div>

          <div className="col-md-6">
            <img
              src="/personality-test.jpeg"
              alt="What's your personality trait?"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <img src="/introvert.jpg" alt="introvert" className="img-fluid types-img" />
            <h5 className="fs-5 fw-bold mt-2">Introvert</h5>
            <p>A typically reserved or quiet person</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src="/extrovert.jpg" alt="extrovert" className="img-fluid types-img" />
            <h5 className="fs-5 fw-bold mt-2">Extrovert</h5>
            <p>An outgoing, socially confident person</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src="/ambivert.jpg" alt="ambivert" className="img-fluid types-img" />
            <h5 className="fs-5 fw-bold mt-2">Ambivert</h5>
            <p>Balance of extrovert and introvert features</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
