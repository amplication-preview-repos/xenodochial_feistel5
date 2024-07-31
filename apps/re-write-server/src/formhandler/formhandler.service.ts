import { Injectable } from "@nestjs/common";
import { FormInputDto } from "../formHandler/FormInputDto";
import { WebPageDto } from "../formHandler/WebPageDto";

@Injectable()
export class FormHandlerService {
  constructor() {}
  async SubmitForm(args: FormInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateWebPage(args: WebPageDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
