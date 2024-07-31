import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FormHandlerService } from "./formhandler.service";
import { WebPageDto } from "../formHandler/WebPageDto";

@swagger.ApiTags("formHandlers")
@common.Controller("formHandlers")
export class FormHandlerController {
  constructor(protected readonly service: FormHandlerService) {}

  @common.Post("/submit")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitForm(
    @common.Body()
    body: WebPageDto
  ): Promise<string> {
        return this.service.SubmitForm(body);
      }

  @common.Post("/updatePage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateWebPage(
    @common.Body()
    body: WebPageDto
  ): Promise<string> {
        return this.service.UpdateWebPage(body);
      }
}
