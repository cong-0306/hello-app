# 경량 Node 이미지
FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i
COPY . .

ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]

