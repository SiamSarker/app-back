// blog.model.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;

  @Column('varchar', { length: 255, name: 'post', nullable: false })
  readonly post?: string;

  @Column('integer', { name: 'user_id', nullable: false })
  readonly user_id?: number;

  @Column('varchar', { length: 320, name: 'status', nullable: false })
  readonly status?: string;
}
