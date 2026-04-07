import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto/user.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService : UserService,
    ){}

    @Post('create_user')
    create(@Body() userDto: UserDto)
    {
        return this.userService.create(userDto);
    }

    @Get('find_all')
    findAll()
    {
        return this.userService.findAll();
    }

    @Get('find_by_name')
    findByName(@Query('name') name: string)
    {
        return this.userService.findByName(name);
    }

    @Put('update_user')
    update(@Body() userDto: UserDto)
    {
        return this.userService.update(userDto);
    }

    @Delete('delete_user')
    delete(@Query('id') id: number)
    {
        return this.userService.delete(id);
    }

}
