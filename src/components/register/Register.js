import { withRouter } from "react-router";
import Form from "../form/Form";
import Preloader from "../preloader/Preloader";
import { useFormValidation } from "../../utils/hooks/useFormValidation";

function Register({
  userRegisterInput,
  setUserRegisterInput,
  onRegistered,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();

  function handleChangeInput(e) {
    handleChange(e);
    if (userRegisterInput.length > 0) {
      setUserRegisterInput("");
    }
  }

  function deleteErrors() {
    resetForm();
  }

  function handleSubmit(e) {
    e.preventDefault(); //Запрещаем браузеру переходить по адресу формы

    onRegistered({
      //Передаём значения управляемых компонентов во внешний обработчик
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form
      onSubmit={handleSubmit}
      header="Добро пожаловать!"
      componentName="form__signUp"
      errors={errors.name || errors.email || errors.password}
      disabled={!isValid || null}
      cleanErrors={deleteErrors}
      path="/sign-in"
      btn="Зарегистрироваться"
      text="Уже зарегистрированы?&nbsp;"
      link="/sign-in"
      linkTitle="Войти"
    >
      <label className="form__label">
        <h2 className="form__description">Имя</h2>
        <input
          required
          id="name"
          value={values.name || ""}
          title="Имя"
          name="name"
          type="text"
          autoComplete="on"
          className="form__input"
          onChange={handleChangeInput}
          minLength="3"
          maxLength="30"
        />
        <span className={`${errors.name ? "form__input-error" : null}`}>
          {errors.name}
        </span>
      </label>
      <label className="form__label">
        <h2 className="form__description">E-mail</h2>
        <input
          required
          value={values.email || ""}
          id="email"
          name="email"
          type="email"
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          autoComplete="on"
          className="form__email form__input"
          onChange={handleChangeInput}
        />
        <span className={`${errors.email ? "form__input-error" : null}`}>
          {errors.email}
        </span>
      </label>
      <label className="form__label">
        <h2 className="form__description">Пароль</h2>
        <input
          required
          value={values.password || ""}
          id="password"
          name="password"
          type="password"
          minLength="6"
          autoComplete="on"
          className="form__password form__input"
          onChange={handleChangeInput}
        />
        <span className={`${errors.password ? "form__input-error" : null}`}>
          {errors.password}
        </span>
      </label>
      {isLoading && <Preloader />}
      <p>{}</p>
    </Form>
  );
}

export default withRouter(Register);
