import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AnimaisModule } from './animais/animais.module';
import { ChamadosModule } from './chamados/chamados.module';

@Module({
  imports: [PrismaModule, UsuariosModule, AnimaisModule, ChamadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
