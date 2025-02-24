import { Navigation } from "../components/nav";

export default function Musics() {
    const tracks = [
        "https://open.spotify.com/embed/track/1NrvnTrcWpLDc1j38bhsMq?utm_source=generator&theme=0"
    ];

    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                {tracks.map((track, index) => (
                    <iframe
                        key={index}
                        style={{ borderRadius: "12px", marginBottom: "16px" }}
                        src={track}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                ))}
            </div>

        </div>
    );
}