FROM nginx:1.11.5

COPY /dist /usr/share/nginx/html
COPY /vhosts.conf /etc/nginx/conf.d/default.conf
