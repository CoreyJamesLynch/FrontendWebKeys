import React from 'react';
import PlaylistCard from './PlaylistCard';

const ProfilePage = () => {
  let playlistCards = playlists.map((playlist) => (
    <PlaylistCard key={playlist.id} playlist={playlist} />
  ));
  return { playlistCards };
};

export default ProfilePage;
