import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import Loading from '../Loading';
import MusicCard from '../MusicCard/musicCard';
import './album.css';

function Album() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [songs, setSongs] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchAlbumAndSongs() {
      setLoading(true);
      if (id) {
        try {
          const response = await getMusics(id);
          const [albumData, ...albumSongs] = response;
          setAlbum(albumData);
          setSongs(albumSongs);
        } catch (error) {
          console.error('Error fetching album and songs:', error);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchAlbumAndSongs();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="album-container">
      <img className="album-image" src={ album?.artworkUrl100 } alt="" />
      <p className="artist-name" data-testid="artist-name">
        {album?.artistName}
      </p>
      <p className="album-name" data-testid="album-name">
        {album?.collectionName}
      </p>
      {songs.map((song) => (
        <MusicCard
          key={ song.trackId }
          trackName={ song.trackName }
          previewUrl={ song.previewUrl }
        />
      ))}
    </div>
  );
}

export default Album;
