import { ObjectIdColumn, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Lyric {
  @PrimaryColumn()
  @ObjectIdColumn()
  _id: string;

  @Column()
  likes: number;

  @Column()
  content: string;
}
