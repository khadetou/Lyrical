import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLyricsInput {
  @Field()
  likes: number;
  @Field()
  content: string;
}
