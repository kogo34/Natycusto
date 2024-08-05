import CustomImage from "./customimage"

export default function HeroSection() {
    const images = [
        "/img/gallery/img (1).jpg",
        "/img/gallery/img (2).jpg",
        "/img/gallery/img (3).jpg",
        "/img/gallery/img (4).jpg",
        "/img/gallery/img (5).jpg",
        "/img/gallery/img (6).jpg",
        "/img/gallery/img (7).jpg",
        "/img/gallery/img (8).jpg",
        "/img/gallery/img (9).jpg"
    ]

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What are we about</h1>
                <p className="info">NatyCusto is a place you can please your soul and tummy with delicious food recipes of all cuisines, and our service is absolutely amazing.</p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"85%"} />
                ))}
            </div>
        </div>
    )
}

