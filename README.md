§§# crud-starter
§
This starter project a full stack web application using a React fronend, Node.js backend and MongoDB database. It provides Create, Read, Update and Delete functionality to enable quick development of new ideas.

## Usage - Development

```bash
cd backends/node-js-express
npm run start
cd ../..
cd frontends/react-ts-mantine
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
.env files can be created in 'backends/node-js-express' and 'frontends/react-ts-mantine' with the format as shown.


./backends/node-js-express/.env:
```bash
PORT=8081
MONGO_URI=mongodb://localhost:27017/
```

./frontends/react-ts-mantine/.env:
```bash
VITE_BACKEND_URL=http://localhost:8081
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
