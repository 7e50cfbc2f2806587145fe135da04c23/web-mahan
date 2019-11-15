import React, {Fragment, PureComponent} from 'react';
import {TextInput} from "components/inputs/textInput";
import {Link} from "react-router-dom";
import {Routes} from "lib/routes";
import {inject, observant, RoutingService} from "coreact";
import {AuthService} from "services/authService";
import {Spinner} from "components/spinner";

@observant([AuthService])
export class LoginOtp extends PureComponent {

  auth = inject(AuthService, this);
  routing = inject(RoutingService, this);
  state = {
    form: {
      mobileNumber: this.auth.mobileNumber,
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

  submit = async (e?: any) => {
    const {form} = this.state;
    this.auth.mobileNumber = form.mobileNumber;
    const result = await this.auth.sendOtp();
    if (result) {
      this.routing.goto(Routes.loginConfirm());
    }
  };

  render() {
    const {form} = this.state;
    return <>
      <div className="vs-3"/>
      <div className="container centered-container">
        <div className="bg-overlay"/>
        <div className="col-lg-5 col-md-7 col-sm-10 bg-white px-4 py-5 elevation-2">
          <div>لطفا شماره تلفن همراه خود را وارد کنید.</div>
          <div>رمز پیامکی (کد چهار رقمی) برای تایید شماره شما ارسال خواهد شد.</div>
          <div className="vs-3"/>
          <TextInput
            name="mobileNumber"
            placeholder="شماره موبایل خود را وارد کنید"
            values={form}
            maxLength={11}
            errors={this.auth.formData.messages}
            onChange={this.onChange}
            number
          />
          <div className="vs-3"/>
          {this.auth.formData.pending ? <div className="text-center"><Spinner/></div> : (this.auth.formData.message && <div className="form-feedback">
            {this.auth.formData.message}
          </div>)}
          <button className="button button-primary" onClick={this.submit}>
            ارسال کد
          </button>
          <div className="vs-3"/>
          <div>اگر قبلا برای حساب خود رمز عبور را وارد کرده‌اید، می‌توانید با شماره موبایل و رمز عبور نیز وارد شوید.</div>
          <div className="vs-5 v-spacer"/>
          <div className="centered-container">
            <Link to={Routes.loginPassword()}>ورود با رمز عبور</Link>
          </div>

        </div>
      </div>
    </>;
  }
}
