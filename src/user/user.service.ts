import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user';
import { UserDto } from './user.dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private user: typeof User,
    ){}

    create(userDto: UserDto) : Promise<User | undefined>
    {
        return this.user.create({
            nome: userDto.nome,
            cpf: userDto.cpf,
            telefone: userDto.telefone,
            matricula: userDto.matricula
        } as User);
    }

    findAll() : Promise< User[] | undefined >
    {
        return this.user.findAll();
    }

    findByName(nome: string)
    {
        return this.user.findOne({
            where:
            {
                nome
            }
        });
    }

    update(userDto: UserDto)
    {
        return this.user.update({
            nome: userDto.nome,
            cpf: userDto.cpf,
            telefone: userDto.telefone,
            matricula: userDto.matricula,
        }, {
            where:
            {
                id: userDto.id,
            }
        });
    }

    delete(id:number)
    {
        return this.user.destroy({
            where:
            {
                id
            }
        });
    }
}
