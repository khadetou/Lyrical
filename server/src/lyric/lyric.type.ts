import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'typeorm/driver/mongodb/typings';

@ObjectType('Lyric')
export class LyricType {
  @Field(() => ID)
  _id: string;

  @Field()
  likes: number;
  @Field()
  content: string;
}
