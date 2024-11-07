import { UUIDV4 } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class UsersModel extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ allowNull: false, defaultValue: UUIDV4 })
  id_user: string;

  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false })
  password: string;
}
