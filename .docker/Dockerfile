# Build Environment
FROM node:10-alpine as build-env
RUN apk add jq curl
WORKDIR /root/

ADD package.json .
ADD package-lock.json .
RUN npm install
ADD . .
RUN npm run bundle
ENV ENV _env_
ENV ENVKEYS API_ADDR
RUN /root/builder.sh .value ${ENVKEYS}
# Production Image
FROM node:10-alpine
WORKDIR /root/

COPY --from=build-env /root/app.js .
COPY --from=build-env /root/package.json .
COPY --from=build-env /root/package-lock.json .
RUN npm install --production
COPY --from=build-env /root/assets ./assets
COPY --from=build-env /root/bundle ./bundle
COPY --from=build-env /root/dist ./dist
COPY --from=build-env /root/run.sh .
EXPOSE 5000
ENTRYPOINT [ "./run.sh", "node ./app.js" ]
