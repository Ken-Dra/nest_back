import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createRoleDto } from 'src/users/dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {

    }

    async createRole(dto: createRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}});
        return role;

    }

}
