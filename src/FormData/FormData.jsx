import React from 'react';

import s from './FormData.module.css';

class FormData extends React.Component {
  onChange = () => {
    console.log();
    const oldForm = document.forms.test;
    const formData = new FormData(oldForm);

    console.log(formData, formData === oldForm);
  };

  render() {
    return (
      <form name="test" className={s.form}>
        <input type="text" name="code" value="12345" onChange={this.onChange} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default FormData;

// class LoginForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
//     console.log(login, password);
//     this.props.onSumit({ login, password });
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="login" />
//         <input type="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }
