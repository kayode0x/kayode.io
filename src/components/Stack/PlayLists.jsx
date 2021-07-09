import './PlayList.scss';

const PlayList = () => {

    return (
		<div className="playlists">
			<div className="playlist">
				<p>UK HipHop</p>
				<iframe
					title="UK HipHop Playlist"
					allow="autoplay *; encrypted-media *; fullscreen *"
					frameBorder="0"
					src="https://embed.music.apple.com/us/playlist/hiphop/pl.u-6mo4ayvF8zyB5el"
				></iframe>
			</div>
			<div className="playlist">
				<p>Afro Beats</p>
				<iframe
					title="AfroBeats Playlist"
					allow="autoplay *; encrypted-media *; fullscreen *"
					frameBorder="0"
					src="https://embed.music.apple.com/us/playlist/afro-beats-x-pop/pl.u-PDb4zXEte0lLx1P"
				></iframe>
			</div>
			<div className="playlist">
				<p>Afro HipHop</p>
				<iframe
					title="Afro - HipHop Playlist"
					allow="autoplay *; encrypted-media *; fullscreen *"
					frameBorder="0"
					src="https://embed.music.apple.com/us/playlist/afro-hiphop/pl.u-Ldbqe04F27Xxl3j"
				></iframe>
			</div>
			<div className="playlist">
				<p>French HipHop x Pop</p>
				<iframe
					title="French HipHop x Pop Playlist"
					allow="autoplay *; encrypted-media *; fullscreen *"
					frameBorder="0"
					src="https://embed.music.apple.com/us/playlist/hiphop-pop/pl.u-Zmblx9rUVrN048R"
				></iframe>
                
                <a href="/" className="goBack">Go Back</a>
			</div>
		</div>
	);
}

export default PlayList;