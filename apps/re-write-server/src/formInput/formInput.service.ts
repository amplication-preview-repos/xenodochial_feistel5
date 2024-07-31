import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormInputServiceBase } from "./base/formInput.service.base";

@Injectable()
export class FormInputService extends FormInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
