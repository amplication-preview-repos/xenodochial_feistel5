import * as graphql from "@nestjs/graphql";
import { FormInputResolverBase } from "./base/formInput.resolver.base";
import { FormInput } from "./base/FormInput";
import { FormInputService } from "./formInput.service";

@graphql.Resolver(() => FormInput)
export class FormInputResolver extends FormInputResolverBase {
  constructor(protected readonly service: FormInputService) {
    super(service);
  }
}
