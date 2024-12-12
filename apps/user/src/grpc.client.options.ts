import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "project", "keywordentry", "searchresult", "edithistory"],
    protoPath: [
      "src/user/user.proto",
      "src/project/project.proto",
      "src/keywordentry/keywordentry.proto",
      "src/searchresult/searchresult.proto",
      "src/edithistory/edithistory.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
