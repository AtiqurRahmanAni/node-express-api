# A simple node.js backend
The frontend of this project is available on this [link](https://github.com/AtiqurRahmanAni/crud-app-react)
### Features
- JWT token-based authentication
- User can perform CRUD operation

### How to run this project
- Clone the repository
- Go to the project directory
- create `.env` file
- Copy everything from the `.env.example` file
- Assign values.
- Run `npm i` and then `npm run dev`

There is a `ALLOWED_ORIGIN` variable in the `.env` file. The value of this variable will be the url of the frontend. For instant, if the frontend runs on `http://localhost:5173`, the value of the variable will be this url. 
Assign a large random string to the `JWT_SECRET` variable, which is used to generate token.
