import {observable, Service} from "coreact";

export interface FormState {
  status: 'none' | 'started' | 'succeed' | 'failed',
  pending: boolean,
  message: string,
  messages: { [key: string]: string },
}

export class FormHandler extends Service{
  @observable formData: FormState = {
    status: 'none',
    pending: false,
    message: '',
    messages: {},
  };

  protected start(){
    this.formData = {
      status: 'started',
      message: '',
      messages: {},
      pending: true,
    };
  }

  protected succeed(){
    this.formData = {
      status: 'succeed',
      message: '',
      messages: {},
      pending: false,
    };
  }

  protected failed(message: string, messages: any = {}){
    this.formData = {
      status: 'succeed',
      message: message,
      messages: messages,
      pending: false,
    };
  }
}
