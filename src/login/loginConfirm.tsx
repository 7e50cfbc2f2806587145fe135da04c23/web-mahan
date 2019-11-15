import React, {Component, Fragment} from 'react';
import {CodeInput} from "components/inputs/codeInput";
import {consumer, inject, observant, observe} from "coreact";
import {AuthService} from "services/authService";
import {Routes} from "lib/routes";
import {Link} from "react-router-dom";
import {Spinner} from "components/spinner";

@observant([AuthService])
export class LoginConfirm extends Component {
  auth = inject(AuthService, this);
  timer: any = null;
  state = {
    form: {
      code: '',
    },
    remaining: Math.floor((this.auth.remaining - Date.now()) / 1000),
  };

  submit = async (value: string) => {
    await this.auth.login(value, 'otp')
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

  send = async () => {
    const result = await this.auth.sendOtp();
    if (result) {
      this.auth.remaining = Date.now() + (result.resendAt * 1000);
      this.auth.codeSent = true;
      this.setState({
        remaining: result.resendAt,
      }, this.startTimer);
    }
  };

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  startTimer = () => {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.setState({
        remaining: this.state.remaining - 1,
      });
      if (this.state.remaining > 0) {
        this.startTimer()
      }
    }, 1000);
  };

  componentDidMount(): void {
    if (!this.auth.codeSent) {
      this.send();
    } else {
      this.startTimer();
    }
  }

  componentWillUnmount(): void {
    this.clearTimer();
  }

  render() {
    const {form, remaining} = this.state;
    return <>
      <div className="vs-3"/>
      <div className="container centered-container">
        <div className="bg-overlay"/>
        <div className="col-lg-5 col-md-7 col-sm-10 bg-white px-4 py-5 elevation-2">
          <b className="mb-2">رمز پیامکی ارسال شده را وارد کنید.</b>
          <div className="vs-1"/>
          <div>
            <span>برای شماره تلفن</span>
            <b className="px-1">{this.auth.mobileNumber}</b>
            <span>یک کد چهار رقمی از طریق پیامک ارسال شد. لطفا کد را وارد کنید.</span>
          </div>
          <div className="vs-3"/>
          <CodeInput
            name="code"
            length={4}
            values={form}
            errors={this.auth.formData.messages}
            onChange={this.onChange}
            onFill={this.submit}
          />
          <div className="vs-3"/>
          <small>برای دریافت مجدد کد یکی از روشهای زیر را انتخاب کنید.</small>
          <div className="vs-3"/>
          {this.auth.formData.pending ? <div className="text-center"><Spinner/></div> : (this.auth.formData.message && <div className="form-feedback">
            {this.auth.formData.message}
          </div>)}
          <button className={`button button-primary ${remaining > 0 ? 'disabled' : ''}`} onClick={this.send}>
            <span>ارسال پیام</span>
            {remaining > 0 && <small className="px-1">(ارسال مجدد {remaining})</small>}
          </button>
          <div className="vs-5 v-spacer"/>
          <div className="centered-container">
            <Link to={Routes.loginOtp()}>تغییر شماره موبایل</Link>
          </div>
        </div>
      </div>
    </>;
  }
}
