import axios from "axios";
import {HttpRequest, HttpResponse, NetLayer} from 'netlayer';
import {optional, RequestContext, service} from "coreact";

@service
export class Net extends NetLayer {
  constructor(context: RequestContext) {
    super(null);
  }
  async serviceWillLoad(context: RequestContext) {
    const configuration = this.configuration;
    configuration.timeout = 12000;
    configuration.baseUrl = context.environment === 'client' ? `${context.baseUrl}${context.apiPrefix}` : context.apiAddress;
    this.driver = async (request: HttpRequest): Promise<HttpResponse> => {

      const logger = configuration.logger;

      function log(...args: any[]) {
        logger && logger(...args);
      }

      try {
        log('request', request);
        const response = await axios({
          url: request.url,
          method: request.method || configuration.method,
          data: ['PUT', 'POST'].includes(request.method) ? request.payload : {},
          params: ['DELETE', 'GET'].includes(request.method) ? request.payload : {},
          timeout: request.timeout || configuration.timeout,
          withCredentials: request.withCredentials || configuration.withCredentials,
          responseType: request.responseType || 'json',
          baseURL: request.baseHref || configuration.baseUrl,
          headers: {
            'Content-Type': 'application/json',
            ...request.headers,
          }
        });
        const result = {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          payload: response.data,
        };
        log('response', result);
        return result;

      } catch (e) {
        const error = e as any;
        const result = {
          status: optional(() => error.response.status),
          statusText: optional(() => error.response.statusText),
          errorCode: optional(() => error.code),
          headers: optional(() => error.response.headers),
          payload: optional(() => error.response.data),
        };
        log('error', result);
        throw result as HttpResponse;
      }
    }
  }
}
