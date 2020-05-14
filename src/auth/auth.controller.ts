import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './services/auth/auth.service';


@Controller('auth')
export class AuthController {
  /**
   *
   */
  constructor(private authService: AuthService) {
    
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
