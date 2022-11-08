FROM node:16-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY --chown=node package.json package-lock.json ./
RUN npm ci

COPY --chown=node . .
RUN npm run build && npm prune --production

FROM node:16-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/

EXPOSE 3000

CMD ["node", "dist/main.js"]