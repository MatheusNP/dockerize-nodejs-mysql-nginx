FROM nginx:1.15-alpine

RUN rm -rf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/conf.d/nginx.conf
# RUN cat /etc/nginx/conf.d/nginx.conf >> /etc/nginx/conf.d/default.conf