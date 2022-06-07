
# Typescript api semantix

NodeJs REST API with typescript

---

## How to execute

### 0 - Prerequisites

Before executing the application, make sure that you have the following prerequisites:

- NodeJs
- Yarn
- Docker
- Go File Account 

### 1 - Configure environment variables

The following variables are **REQUIRED** to work.

```
GO_FILE_TOKEN= //go file account id
PARENT_FOLDER_ID= //parent go file folder
MONGO_URI = //mongo connection, default is mongodb://localhost:27017/test
PORT=PORT //default port is 3000
```

### 2 - Start the application

In your project base directory,run the command:
docker-compose up (if you want use local docker mongo)
 yarn
 yarn dev 

### 3 - Documentation

### Create a folder


`POST /folders`

        curl --location --request POST 'http://localhost:4000/folders' \
      --header 'Content-Type: application/json' \
      --data-raw '{"name":"charizard"}'

### Response

[![Generic badge](https://img.shields.io/badge/201-Created-<COLOR>.svg)](https://shields.io/)


    Sua pasta charizard foi criada com sucesso. 

### Create a file in folder

`POST /files`

	curl --location --request POST 'http://localhost:4000/files' \
	--form 'file=@"/home/fernandob/Videos/desafio-tech-pleno.pdf"' \
	--form 'folder="charizard" 

### Response

[![Generic badge](https://img.shields.io/badge/201-Created-<COLOR>.svg)](https://shields.io/)

	O arquivo desafio-tech-pleno.pdf foi criado com sucesso.

### Remove file in folder

`DELETE /files`

	curl --location --request DELETE 'http://localhost:4000/files' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	"folder": "charizard",
	"file":"desafio-tech-pleno.pdf"
	}'
	
### Response

 [![Generic badge](https://img.shields.io/badge/204-NoContent-<COLOR>.svg)](https://shields.io/)

## Author:

- **Fernando Luiz de Carvalho Barbosa**
