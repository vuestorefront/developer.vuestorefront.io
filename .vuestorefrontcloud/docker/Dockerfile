FROM node:lts as builder

ARG ALGOLIA_TOKEN
ARG ALGOLIA_ID
ARG GITHUB_TOKEN
ARG DEV_TO_TOKEN

ENV ALGOLIA_TOKEN=$ALGOLIA_TOKEN
ENV ALGOLIA_ID=$ALGOLIA_ID
ENV GITHUB_TOKEN=$GITHUB_TOKEN
ENV DEV_TO_TOKEN=$DEV_TO_TOKEN

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

ARG ALGOLIA_TOKEN
ARG ALGOLIA_ID
ARG GITHUB_TOKEN
ARG DEV_TO_TOKEN

ENV ALGOLIA_TOKEN=$ALGOLIA_TOKEN
ENV ALGOLIA_ID=$ALGOLIA_ID
ENV GITHUB_TOKEN=$GITHUB_TOKEN
ENV DEV_TO_TOKEN=$DEV_TO_TOKEN

WORKDIR /app

COPY --from=builder /app  .

RUN env

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
