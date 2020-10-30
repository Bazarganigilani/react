# build environment
FROM node:lts-alpine as build
USER root
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN chown -R root:root /app/node_modules
RUN chmod -R 755 /app/node_modules
RUN npm run build
RUN react-scripts build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
RUN REACT_APP_BCD_API_HOST=0.0.0.0
RUN REACT_APP_BCD_API_PORT=9000
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
