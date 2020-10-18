import React from 'react';
import PlaylistCard from './PlaylistCard';

const ProfilePage = () => {
  // Make API call here and set equal to playlists
  const playlistCards = playlists.map((playlist) => (
    <PlaylistCard key={playlist.id} playlist={playlist} />
  ));
  return { playlistCards };
};

export default ProfilePage;
