# 
FROM meedan/nodejs

MAINTAINER sysops@meedan.com
ENV IMAGE=meedan/meedan-ui-guide \
    DEPLOYDIR=/app

RUN mkdir -p ${DEPLOYDIR}
WORKDIR ${DEPLOYDIR}
COPY package.json ${DEPLOYDIR}/package.json 
RUN npm install
COPY ./ ${DEPLOYDIR}
RUN gulp build

# serve static content from 8080
EXPOSE 8080
CMD static www -a 0.0.0.0