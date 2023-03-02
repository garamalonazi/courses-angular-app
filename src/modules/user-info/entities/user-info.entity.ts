import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserInfo {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column()
  name: string;

  @Column({nullable: true })
  field: string;

  @Column({nullable: true })
  role: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default: 'Active'})
  status: string;
}
