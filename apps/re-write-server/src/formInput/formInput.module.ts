import { Module } from "@nestjs/common";
import { FormInputModuleBase } from "./base/formInput.module.base";
import { FormInputService } from "./formInput.service";
import { FormInputController } from "./formInput.controller";
import { FormInputResolver } from "./formInput.resolver";

@Module({
  imports: [FormInputModuleBase],
  controllers: [FormInputController],
  providers: [FormInputService, FormInputResolver],
  exports: [FormInputService],
})
export class FormInputModule {}
