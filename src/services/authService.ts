import {inject, observable, optional, persist, RequestContext, save, service} from "coreact";
import cookie from "js-cookie";
import {Net} from "services/net";
import {FormHandler} from "services/formHandler";


@service
export class AuthService extends FormHandler {
  net = inject(Net, this);


  @save clientName: any = '';
  @observable @save token: string = '';
  @persist @save mobileNumber: string = '';
  @save fullName: string = '';
  @save id: number = 0;
  @persist codeSent: boolean = false;
  @persist remaining: number = 0;

  gateway = 'back-office';
  cookieName = 'token';
  middlewareName = 'auth';


  async serviceDidLoad(context: RequestContext) {
    if (context.environment == 'client'){
      this.registerMiddleware()
    }else {

      this.clientName = this.parseClientName(context.useragent);
      if (context.cookies[this.cookieName]) {
        try {
          const {id, mobileNumber, fullName} = await this.authorize(context.cookies[this.cookieName]);
          this.id = id;
          this.mobileNumber = mobileNumber;
          this.fullName = fullName;
          this.token = context.cookies[this.cookieName];
          this.registerMiddleware();
        } catch (e) {
        }
      }
    }
  }

  parseClientName(useragent: any) {
    return `${useragent.platform}/${useragent.isMobile ? 'mobile' : 'desktop'}/${useragent.browser}:${useragent.version}`
  }

  registerMiddleware = () => {
    this.net.requestMiddleware(this.middlewareName, (request) => ({
      ...request,
      headers: {
        'Client-Name': this.clientName,
        'App-Gateway': this.gateway,
        'Authorization': `Bearer ${this.token}`,
        ...request.headers,
      }
    }))
  };

  sendOtp = async () => {
    this.start();
    try {
      const response = await this.net.request<{ resendAt: number }>({
        url: `/identity/otp/${this.mobileNumber}/send`,
        headers: {
          'Client-Name': this.clientName,
          'App-Gateway': this.gateway,
        },
        method: 'GET'
      });

      this.remaining = Date.now() + (response.payload.resendAt * 1000);
      this.codeSent = response.payload.resendAt > 0;
      this.succeed();

      return response.payload
    } catch (e) {
      this.failed(
        optional(() => e.payload.message, ''),
        optional(() => e.payload.validationErrors, {})
      );
      return false
    }
  };

  login = async (password: string, type: 'otp' | 'password') => {
    this.start();
    try {
      const data = await this.net.request<{ id: number, fullName: string, token: string, mobileNumber: string }>({
        url: `/identity/login/${type}`,
        method: 'POST',
        headers: {
          'Client-Name': this.clientName,
          'App-Gateway': this.gateway,
        },
        payload: {
          username: this.mobileNumber,
          password: password,
        },
      });
      const {id, token, fullName, mobileNumber} = data.payload;
      this.id = id;
      this.fullName = fullName;
      this.mobileNumber = mobileNumber;
      cookie.set(this.cookieName, token);
      this.succeed();
      this.token = token;
      this.registerMiddleware();
      return token;
    } catch (e) {
      this.failed(
        optional(() => e.payload.message, ''),
        optional(() => e.payload.validationErrors, {})
      );
      return false
    }
  };

  logout = () => {
    this.mobileNumber = '';
    this.fullName = '';
    this.id = 0;
    cookie.remove(this.cookieName);
    this.net.requestMiddleware(this.middlewareName, null);
    this.token = '';
  };

  authorize = async (token: string) => {
    try {
      const res = await this.net.request<{ id: number, fullName: string, mobileNumber: string }>({
        url: `/identity/current`,
        headers: {
          'Client-Name': this.clientName,
          'App-Gateway': this.gateway,
          'Authorization': `Bearer ${token}`,
        },
        method: 'GET',
      });
      return res.payload;
    } catch (e) {
      throw e;
    }
  };
}
