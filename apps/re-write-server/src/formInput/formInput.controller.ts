import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormInputService } from "./formInput.service";
import { FormInputControllerBase } from "./base/formInput.controller.base";

@swagger.ApiTags("formInputs")
@common.Controller("formInputs")
export class FormInputController extends FormInputControllerBase {
  constructor(protected readonly service: FormInputService) {
    super(service);
  }
}
