import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Estilo } from '../estilos/estilo';

@Table({ tableName: 'filmes' })
export class Filme extends Model<Filme> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  filme!: number;

  @ForeignKey(() => Estilo)
  @Column({ type: DataType.INTEGER, allowNull: false })
  estilo!: number;

  @BelongsTo(() => Estilo)
  estiloDados?: Estilo;

  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ano!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  duracao!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  foto!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  sinopse?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  video?: string;
}
