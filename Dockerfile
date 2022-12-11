FROM node:bullseye-slim

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/AshAritra/Marin-152 /root/AshAritra
WORKDIR /root/AshAritra/
COPY package.json .

RUN npm install

COPY . .
EXPOSE 8000

CMD ["npm", "npm start"]
