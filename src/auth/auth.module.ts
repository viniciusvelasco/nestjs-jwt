import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './auth.controller';
import { LocalStategyService } from './services/local-stategy/local-stategy.service';
import { JwtStrategy } from './shared/jwt.startegy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';

@Module({
  providers: [AuthService, LocalStategyService, JwtStrategy],
  controllers: [AuthController],
  imports: [PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' }
  })]
})
export class AuthModule {}
