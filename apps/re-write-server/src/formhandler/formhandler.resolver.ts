import * as graphql from "@nestjs/graphql";
import { FormInputDto } from "../formHandler/FormInputDto";
import { WebPageDto } from "../formHandler/WebPageDto";
import { FormHandlerService } from "./formhandler.service";

export class FormHandlerResolver {
  constructor(protected readonly service: FormHandlerService) {}

  @graphql.Mutation(() => String)
  async SubmitForm(
    @graphql.Args()
    args: FormInputDto
  ): Promise<string> {
    return this.service.SubmitForm(args);
  }

  @graphql.Mutation(() => String)
  async UpdateWebPage(
    @graphql.Args()
    args: WebPageDto
  ): Promise<string> {
    return this.service.UpdateWebPage(args);
  }
}
