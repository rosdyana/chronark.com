import { Navigation } from "../components/nav";

export default function Musics() {
    const tracks = [
        "https://open.spotify.com/embed/track/1NrvnTrcWpLDc1j38bhsMq?utm_source=generator&theme=0",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2025559428&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2025557772&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
    ];

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <div className="bg-white rounded-lg p-4 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Music Playlist</h2>
                    {tracks.map((track, index) => (
                        <div key={index} className="mb-4">
                            <iframe
                                style={{ borderRadius: "12px" }}
                                src={track}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
