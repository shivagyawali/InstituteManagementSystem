# How we build this application

- npm init -y
- npm i --save-dev prisma typescript ts-node @types/node nodemon
- npx prisma init --datasource-provider mysql

  `DATABASE_URL="mysql://root@127.0.0.1:3306/nodeprisma" on .env`

# Defining the model

- npx prisma migrate dev --name init : This will migrate the schema files into the database
