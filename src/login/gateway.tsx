import React, {PureComponent, ReactNode} from 'react';
import {consumer, inject, observe} from "coreact";
import {AuthService} from "services/authService";


export interface GatewayProps {
  children: ReactNode,
  fallback?: ReactNode,
  callback?: () => any;
}

@consumer
export class Gateway extends PureComponent<GatewayProps> {
  auth = inject(AuthService, this);

  @observe(AuthService, 'token')
  observe = (key: string, value: any) => {
    this.setState({[key]: value}, () => {
      if (value) {
        if (this.props.callback)
          this.props.callback();
      }
    });
  };

  componentDidMount(): void {
    if (this.auth.token) {
      if (this.props.callback)
        this.props.callback();
    }
  }

  render() {
    const {children, fallback} = this.props;
    if (!!this.auth.token)
      return children;
    return fallback ? fallback : null;
  }
}
