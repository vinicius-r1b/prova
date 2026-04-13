import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Filme } from '../filmes/filme';

@Table({ tableName: 'estilos' })
export class Estilo extends Model<Estilo> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.TINYINT })
  estilo!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @HasMany(() => Filme)
  filmes?: Filme[];
}
