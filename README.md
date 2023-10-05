# crud-starter

This starter project a full stack web application using a React fronend, Node.js backend and MongoDB database. It provides Create, Read, Update and Delete functionality to enable quick development of new ideas.

## Usage - Development

```bash
cd backend
npm run start
cd ..
cd frontend
npm run dev
```

[//]: # (## Usage - Production)

[//]: # ()
[//]: # (```bash)

[//]: # (npm run build)

[//]: # (npm run start)

[//]: # (```)

## Environment
The following configuration can be overwritten using system environment variables. Alternatively 
.env files can be created in 'backend' and 'frontend' with the format as shown.


./backend/.env:
```bash
PORT=8081
MONGO_URI=mongodb://localhost:27017/
```

./frontend/.env:
```bash
VITE_BACKEND_URL=http://localhost:8081
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
