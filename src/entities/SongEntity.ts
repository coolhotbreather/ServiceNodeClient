// src/entities/songEntity.ts
import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { AlbumEntity } from './AlbumEntity';  // Импортируем сущность для альбома

@Entity()
export class SongEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  artist!: string;

  @Property()
  duration!: number; // Длительность песни в секундах

  @Property()
  releaseDate!: Date;

  // Связь с альбомом (многие к одному)
  @ManyToOne(() => AlbumEntity)
  album!: AlbumEntity;

  constructor(title: string, artist: string, duration: number, releaseDate: Date, album: AlbumEntity) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.album = album;
  }
}
