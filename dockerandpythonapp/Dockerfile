FROM python:3-alpine3.15
# work directory
WORKDIR /app 
# copy all the things from . to /app directory
COPY . /app
# run python
RUN pip install -r requirements.txt
EXPOSE 3000
CMD python ./index.py

