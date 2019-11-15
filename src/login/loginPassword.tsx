import React, {Component, Fragment} from 'react';
import {TextInput} from "components/inputs/textInput";
import {Link} from "react-router-dom";
import {Routes} from "lib/routes";
import {PasswordInput} from "components/inputs/passwordInput";
import {consumer, inject, observant, observe} from "coreact";
import {AuthService} from "services/authService";
import {Spinner} from "components/spinner";

@observant([AuthService])
export class LoginPassword extends Component {

  auth = inject(AuthService, this);
  state = {
    form: {
      mobileNumber: this.auth.mobileNumber,
      password: '',
    },
  };

  onChange = (key: string, value: any) => {
    const {form} = this.state;
    this.setState({
      form: {
        ...form,
        [key]: value,
      }
    })
  };

  submit = async () => {
    const {form} = this.state;
    this.auth.mobileNumber = form.mobileNumber;
    await this.auth.login(form.password, 'password')
  };


  render() {
    const {form} = this.state;
    return <>
      <div className="vs-3"/>
      <div className="container centered-container">
        <div className="bg-overlay"/>
        <div className="col-lg-5 col-md-7 col-sm-10 bg-white px-4 py-5 elevation-2">
          <TextInput
            name="mobileNumber"
            placeholder="شماره موبایل خود را وارد کنید"
            errors={this.auth.formData.messages}
            values={form}
            onChange={this.onChange}
            number
          />
          <div className="vs-3"/>
          <PasswordInput
            name="password"
            placeholder="رمز عبور خود را وارد کنید"
            errors={this.auth.formData.messages}
            values={form}
            onChange={this.onChange}
          />
          <div className="vs-3"/>
          {this.auth.formData.pending ? <div className="text-center"><Spinner/></div> : (this.auth.formData.message && <div className="form-feedback">
            {this.auth.formData.message}
          </div>)}
          <button className="button button-primary" onClick={this.submit}>
            ورود به حساب کاربری
          </button>
          <div className="vs-5 v-spacer"/>
          <div className="centered-container">
            <Link to={Routes.loginOtp()}>ورود با رمز پیامکی</Link>
          </div>
        </div>
      </div>
    </>;
  }
}
