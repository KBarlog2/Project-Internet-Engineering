import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { BasicGuard } from './basic.guard';
import { UserId } from './user.decorator';
import { TokenService } from '../token/token.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly tokenSerivce: TokenService) {}

  @Post('login')
  @UseGuards(BasicGuard)
  @HttpCode(HttpStatus.OK)
  login(@UserId() userId: number, @Res({ passthrough: true }) res: Response) {
    const token = this.tokenSerivce.createToken(userId);
    res.cookie('access-token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });
    res.cookie('is-logged', true, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access-token');
    res.clearCookie('is-logged');
  }
}
