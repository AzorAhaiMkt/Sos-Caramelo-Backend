import { ApiProperty  } from "@nestjs/swagger";

export class CreateChamadoDto {
    @ApiProperty()
    id_solicitacao: string
    @ApiProperty({required: true})
    tipo_solicitacao: string
    @ApiProperty()
    descricao_solicitacao: string
    @ApiProperty()
    image_solicitacao: string
}

