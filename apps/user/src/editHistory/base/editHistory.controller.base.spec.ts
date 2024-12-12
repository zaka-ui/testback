import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EditHistoryController } from "../editHistory.controller";
import { EditHistoryService } from "../editHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  changeDescription: "exampleChangeDescription",
  createdAt: new Date(),
  editTimestamp: new Date(),
  id: "exampleId",
  relatedProject: "exampleRelatedProject",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  changeDescription: "exampleChangeDescription",
  createdAt: new Date(),
  editTimestamp: new Date(),
  id: "exampleId",
  relatedProject: "exampleRelatedProject",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    changeDescription: "exampleChangeDescription",
    createdAt: new Date(),
    editTimestamp: new Date(),
    id: "exampleId",
    relatedProject: "exampleRelatedProject",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  changeDescription: "exampleChangeDescription",
  createdAt: new Date(),
  editTimestamp: new Date(),
  id: "exampleId",
  relatedProject: "exampleRelatedProject",
  updatedAt: new Date(),
};

const service = {
  createEditHistory() {
    return CREATE_RESULT;
  },
  editHistories: () => FIND_MANY_RESULT,
  editHistory: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("EditHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EditHistoryService,
          useValue: service,
        },
      ],
      controllers: [EditHistoryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /editHistories", async () => {
    await request(app.getHttpServer())
      .post("/editHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        editTimestamp: CREATE_RESULT.editTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /editHistories", async () => {
    await request(app.getHttpServer())
      .get("/editHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          editTimestamp: FIND_MANY_RESULT[0].editTimestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /editHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/editHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /editHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/editHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        editTimestamp: FIND_ONE_RESULT.editTimestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /editHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/editHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        editTimestamp: CREATE_RESULT.editTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/editHistories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
