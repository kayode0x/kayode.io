import './PlayList.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PlayList = () => {
    const matches = useMediaQuery('(max-width: 1023px)');

    return (
        <>
            {
                matches
                ? (
                    <div className="playlists">
                        <p>UK HipHop</p>
                        <iframe title="UK HipHop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/hiphop/pl.u-6mo4ayvF8zyB5el"></iframe>
                        <p>Afro Beats</p>
                        <iframe title="AfroBeats Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/afro-beats-x-pop/pl.u-PDb4zXEte0lLx1P"></iframe>
                        <p>Afro HipHop</p>
                        <iframe title="Afro - HipHop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/afro-hiphop/pl.u-Ldbqe04F27Xxl3j"></iframe>
                        <p>French HipHop x Pop</p>
                        <iframe className="lastIframe" title="French HipHop x Pop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/hiphop-pop/pl.u-Zmblx9rUVrN048R"></iframe>
                    </div>
                )
                : (
                    <div className="playlistsDesktop">
                       <div className="playlist">
                            <div id="one">
                                <div className="uk">
                                    <p>UK HipHop</p>
                                    <iframe title="UK HipHop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/hiphop/pl.u-6mo4ayvF8zyB5el"></iframe>
                                </div>
                                <div className="afrobeat">
                                    <p>Afro Beats</p>
                                    <iframe title="AfroBeats Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/afro-beats-x-pop/pl.u-PDb4zXEte0lLx1P"></iframe>
                                </div>
                            </div>

                            <div id="two">
                                <div className="afrohiphop">
                                    <p>Afro HipHop</p>
                                    <iframe title="Afro - HipHop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/afro-hiphop/pl.u-Ldbqe04F27Xxl3j"></iframe>                        
                                </div>
                                <div className="french">
                                    <p>French HipHop x Pop</p>
                                    <iframe className="lastIframe" title="French HipHop x Pop Playlist" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" src="https://embed.music.apple.com/us/playlist/hiphop-pop/pl.u-Zmblx9rUVrN048R"></iframe>
                                </div>
                            </div>
                       </div>
                    </div>
                )
            }
        </>
    );
}

export default PlayList;