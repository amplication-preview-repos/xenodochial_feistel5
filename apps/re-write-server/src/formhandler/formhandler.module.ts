import { Module } from "@nestjs/common";
import { FormHandlerService } from "./formhandler.service";
import { FormHandlerController } from "./formhandler.controller";
import { FormHandlerResolver } from "./formhandler.resolver";

@Module({
  controllers: [FormHandlerController],
  providers: [FormHandlerService, FormHandlerResolver],
  exports: [FormHandlerService],
})
export class FormHandlerModule {}
