FROM node
COPY . /server
# 不拷贝file目录，而是通过运行的时候挂载卷
WORKDIR /server
RUN npm install
EXPOSE 3000
CMD node index.js