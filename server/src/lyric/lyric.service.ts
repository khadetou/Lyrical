import { CreateLyricsInput } from './create-lyric.input';
import { Lyric } from './lyric.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Injectable()
export class LyricService {
  constructor(
    @InjectRepository(Lyric)
    private readonly lyricRepository: Repository<Lyric>,
  ) {}

  //GET ALL LYRICS
  async getAllLyrics(): Promise<Lyric[]> {
    return await this.lyricRepository.find();
  }

  //GET LYRIC BY ID
  async getLyricById(id: string): Promise<Lyric> {
    return await this.lyricRepository.findOne(id);
  }

  //CREATE LYRIC
  async createLyric(createLyricsInput: CreateLyricsInput): Promise<Lyric> {
    const { likes, content } = createLyricsInput;
    const lyric = this.lyricRepository.create({ likes, content });
    return await this.lyricRepository.save(lyric);
  }

  //UPDATE LYRIC
  async updateLyric(
    id: string,
    createLyricsInput: CreateLyricsInput,
  ): Promise<Lyric> {
    const { likes, content } = createLyricsInput;
    const lyric = await this.lyricRepository.findOne(id);
    lyric.likes = likes;
    lyric.content = content;
    return await this.lyricRepository.save(lyric);
  }

  //DELETE LYRIC
  async deleteLyric(id: string): Promise<Lyric> {
    const lyric = await this.lyricRepository.findOne(id);
    return await this.lyricRepository.remove(lyric);
  }
}
