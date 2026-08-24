import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
    FaTelegram,
    FaDiscord,
    FaSpotify,
    FaSoundcloud,
    FaSnapchat,
    FaGlobe,
} from "react-icons/fa6";

const iconMap: Record<string, React.ReactNode> = {
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    x: <FaXTwitter />,
    youtube: <FaYoutube />,
    tiktok: <FaTiktok />,
    linkedin: <FaLinkedinIn />,
    telegram: <FaTelegram />,
    discord: <FaDiscord />,
    spotify: <FaSpotify />,
    soundcloud: <FaSoundcloud />,
    snapchat: <FaSnapchat />,
    traffic: <FaGlobe />,
};

const bgMap: Record<string, string> = {
    facebook: "bg-[#1877F2]",
    instagram: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    x: "bg-black",
    youtube: "bg-[#FF0000]",
    tiktok: "bg-black",
    linkedin: "bg-[#0A66C2]",
    telegram: "bg-[#26A5E4]",
    discord: "bg-[#5865F2]",
    spotify: "bg-[#1DB954]",
    soundcloud: "bg-[#FF5500]",
    snapchat: "bg-[#FFFC00]",
    traffic: "bg-brand-500",
};

export function PlatformBadge({ icon }: { icon: string }) {
    return (
        <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-white text-[13px] shrink-0 ${bgMap[icon] ?? "bg-brand-500"} ${icon === "snapchat" ? "text-black" : ""
                }`}
        >
            {iconMap[icon]}
        </span>
    );
}

const heroIconImages: Record<string, string> = {
    facebook: "/assets/icon-facebook.png",
    instagram: "/assets/icon-instagram.png",
    linkedin: "/assets/icon-linkedin.png",
    spotify: "/assets/icon-spotify.png",
    telegram: "/assets/icon-telegram.png",
    tiktok: "/assets/icon-tiktok.png",
};

export function HeroPlatformIcon({ icon }: { icon: string }) {
    const src = heroIconImages[icon];
    if (!src) return <PlatformBadge icon={icon} />;
    return (
        <Image
            src={src}
            alt={icon}
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain"
        />
    );
}
