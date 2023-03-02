import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
@Entity()
export class Courses {

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
    startDate: string;

    @Column({nullable: true })
    descrption: string;


    @Column({nullable: true })
    img: string;

    @Column()
    hours: number;


}
