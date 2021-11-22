import { Link } from "react-router-dom";

function Form(props) {
  return (
    <main className="form">
      <div className="form__head">
        <Link to="/">
          <div className="form__logo background-color"></div>
        </Link>
        <h1 className="form__title">{props.header}</h1>
      </div>
      <div className="form__container">
        <form className="form__box" onSubmit={props.onSubmit}>
          {props.children}
          <button
            onClick={props.cleanErrors}
            type="submit"
            className={`${props.componentName} form__button form__button-text ${
              props.errors ? "form__button_disabled" : null
            }`}
            disabled={props.disabled}
          >
            {props.btn}
          </button>
        </form>
        <div className="form__route-container">
          <h2 className="form__question">
            {props.text}
            <Link to={props.link} className="form__link">
              {props.linkTitle}
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Form;
