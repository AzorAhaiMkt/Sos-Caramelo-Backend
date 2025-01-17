import { Injectable } from '@nestjs/common';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChamadoService {
  constructor(private prisma: PrismaService){}
  create(createChamadoDto: CreateChamadoDto) {
   return this.prisma.chamados.create({data: createChamadoDto});
  }

  findAll() {
    return this.prisma.chamados.findMany();
  }

  findOne(id: number) {
    return this.prisma.chamados.findUnique({where: {id}});
  }

  update(id: number, updateChamadoDto: UpdateChamadoDto) {
    return this.prisma.chamados.update({
      where: {id},
      data: updateChamadoDto,
    });
  }

  remove(id: number) {
    return this.prisma.chamados.delete({where: {id}});
  }
}
