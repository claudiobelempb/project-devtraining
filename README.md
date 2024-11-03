### Start project-devtraining
```
nest new project-devtraining
npm i --save class-validator class-transformer
npm i @nestjs/mapped-types
npm i @nestjs/typeorm typeorm pg
npm i uuid
npm i @types/uuid -D
npm i bcryptjs
npm i @types/bcryptjs -D
```

### Migrations

```
npx typeorm migration:create src/migrations/CreateCourseTable
npx typeorm migration:create src/migrations/CreateTagTable
npx typeorm migration:create src/migrations/CreateCourseTagTable
npx typeorm migration:create src/migrations/AddCourseIdToCourseTagTable
npx typeorm migration:create src/migrations/AddTagIdToCourseTagTable

npx typeorm migration:run -d dist/modules/database/orm-cli-config.js
npx typeorm migration:revert -d dist/modules/database/orm-cli-config.js
```

### JSON

```
{
   "name":"Fundamentos do Framework NestJS",
   "description":"Curso sobre fundamento do framework NestJS",
   "tags":[
      {
         "id":"b51d552d-f814-49ba-b870-2858a0f3580d"
      },
      {
         "id":"f3aa8dac-4290-41c6-b0dc-a2c8f2459889"
      },
      {
         "id":"73d7f779-d436-4125-bdde-56f70527f91c"
      },
      {
         "id":"a0148d06-fc32-43ca-9999-b5a3b7e33242"
      }
   ]
}
```
