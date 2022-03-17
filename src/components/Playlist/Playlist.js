import './Playlist.css';

import TrackList from '../TrackList/TrackList';

const Playlist =({playlistName,playlistTrack,onRemove,onNameChange,onSave})=> {

  const handleNameChange=(e)=>{
    onNameChange(e.target.value)
  }

  return <div className="Playlist">
  <input value={'playlistName'} onChange={handleNameChange}/>
  <TrackList lists={playlistTrack} onRemove={onRemove} isRemoval={true}/>
  <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
</div>;
}

export default Playlist;
