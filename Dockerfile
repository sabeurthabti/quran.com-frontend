FROM ubuntu

ENV NODE_ENV production

RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get -y install nodejs npm nginx supervisor
RUN apt-get -y install nodejs-legacy

COPY docker/next.quran.com /etc/nginx/sites-available/
COPY docker/supervisord.conf /etc/supervisor/supervisord.conf
RUN ln -s /etc/nginx/sites-available/next.quran.com /etc/nginx/sites-enabled/
RUN mkdir -p /var/log/nginx/next.quran.com/
RUN rm /etc/nginx/sites-enabled/default

ADD . /quran/
WORKDIR /quran
RUN npm install
RUN npm install -g pm2
RUN npm run build

EXPOSE 80
CMD ["supervisord", "--nodaemon", "-c", "/etc/supervisor/supervisord.conf"]
