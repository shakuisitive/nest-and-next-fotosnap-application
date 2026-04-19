import { Public } from "@mguay/nestjs-better-auth";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Public()
  @Get()
  health() {
    return true
  }
}