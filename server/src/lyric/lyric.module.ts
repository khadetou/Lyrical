import { LyricResolver } from './lyric.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LyricService } from './lyric.service';
import { Lyric } from './lyric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lyric])],

  providers: [LyricService, LyricResolver],
})
export class LyricModule {}
