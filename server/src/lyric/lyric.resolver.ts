import { LyricType } from './lyric.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LyricService } from './lyric.service';
import { CreateLyricsInput } from './create-lyric.input';

@Resolver((of) => LyricType)
export class LyricResolver {
  constructor(private lyricService: LyricService) {}

  //GET ALL LYRICS
  @Query((returns) => [LyricType])
  async getAllLyrics() {
    return await this.lyricService.getAllLyrics();
  }

  //GET LYRIC BY ID
  @Query((returns) => LyricType)
  async getLyricById(@Args('id') id: string) {
    return await this.lyricService.getLyricById(id);
  }

  //CREATE LYRIC
  @Mutation((returns) => LyricType)
  createLyric(@Args('createLyricsInput') createLyricsInput: CreateLyricsInput) {
    return this.lyricService.createLyric(createLyricsInput);
  }

  //UPDATE LYRIC
  @Mutation((returns) => LyricType)
  async updateLyric(
    @Args('id') id: string,
    @Args('createLyricsInput') createLyricsInput: CreateLyricsInput,
  ) {
    return await this.lyricService.updateLyric(id, createLyricsInput);
  }

  //DELETE LYRIC
  @Mutation((returns) => LyricType)
  async deleteLyric(@Args('id') id: string) {
    return await this.lyricService.deleteLyric(id);
  }
}
