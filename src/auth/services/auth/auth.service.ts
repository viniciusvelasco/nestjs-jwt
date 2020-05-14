import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
  constructor(private jwtService: JwtService) {
    
  }
  
  async authenticate(email: string, password: string) {
    if(email === 'vinicius.velasco@live.com' && password === '123456789') {
      return {email, password};
    }

    return null;
  }

  async login(user: any) {
    const payload = {email: user.email, sub: 1};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
