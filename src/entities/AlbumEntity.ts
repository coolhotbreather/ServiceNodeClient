// src/entities/albumEntity.ts
import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { SongEntity } from './SongEntity';  // Импортируем сущность для песни

@Entity()
export class AlbumEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  artist!: string;

  @Property()
  releaseDate!: Date;

  // Связь с песнями (один ко многим)
  @OneToMany(() => SongEntity, (song) => song.album)
  songs = new Collection<SongEntity>(this);

  constructor(name: string, artist: string, releaseDate: Date) {
    this.name = name;
    this.artist = artist;
    this.releaseDate = releaseDate;
  }
}
