import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configSchema } from './config.schema';
import { Lyric } from './lyric/lyric.entity';

import { LyricModule } from './lyric/lyric.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get('MONGO_URI'),
        synchronize: true,
        useUnifiedTopology: true,
        autoLoadEntities: true,
      }),
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LyricModule,
  ],
})
export class AppModule {}
