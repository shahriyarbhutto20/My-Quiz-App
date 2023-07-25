import React, { useState } from "react";

function QuestionSection({ mcqQuestions }) {
  const [questNo, setQuestNo] = useState(0);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [checkval, setCheckval] = useState(null);
  const [disabilityofNext, setDisabilityofNext] = useState(true);

  //   funtion to increment questions

  const questionIncrement = () => {
    if (questNo === mcqQuestions.length - 1) {
      setEnd(true);
    } else {
      const increment = questNo + 1;
      setQuestNo(increment);
    }
  };

  //  index getter.

  const IndexGeter = (id) => {
    questionIncrement();

    if (checkval === mcqQuestions[questNo].answer) {
      const correct = score + 1;
      setScore(correct);
      setDisabilityofNext(true);
    } else {
      setDisabilityofNext(true);
    }
  };

  // Retake the test

  const handleRetake = () => {
    setQuestNo(0);
    setEnd(false);
    setScore(0);
    setCheckval(null);
  };

  console.log(checkval);

  return (
    <div className="container-flow row Mycontainer min-vh-100 min-vw-100 vw-100 vh-100">
      <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
        <div className="heading">
          <h1 style={{ fontSize: "5rem" }}>My Quiz App</h1>
        </div>
        {end ? (
          <div className="center resultCard">
            <div>
              <h1 className="resultHead">RESULT</h1>

              <h1 className="scoreHead">
                Your score is : {score} out of {mcqQuestions.length}
              </h1>

              <button
                onClick={handleRetake}
                type="button"
                className="btn btn-secondary btn-lg mybtn"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="mainDiv">
            <div className="underMain">
              <div className="questionStyle" style={{}}>
                <h2>
                  {questNo + 1}: &nbsp;&nbsp; {mcqQuestions[questNo].question}
                </h2>
              </div>

              <div className=" ">
                {mcqQuestions[questNo].options.map((option, index) => {
                  return (
                    <div className="optionsStyle" key={index}>
                      <input
                        className="form-check-input  "
                        type="checkbox"
                        value={option}
                        id="flexCheckDefault"
                        onChange={() => {
                          setCheckval(option);
                          setDisabilityofNext(false);
                        }}
                        checked={checkval === option}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
                <div className=" lastBtn">
                  <div>
                    <p style={{ fontSize: "2rem" }}>
                      {questNo + 1}/{mcqQuestions.length}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={IndexGeter}
                      className="btn btn-lg btn-success"
                      disabled={disabilityofNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionSection;
