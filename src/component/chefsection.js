import ChiefCard from "./chefscard"

export default function ChefsSection() {
    const chiefs = [
        {
            name: "kogo manuel ",
            img: "/img/gallery/img10.png",
            recipesCount: "10",
            cuisine: "africaine"


        },
        {
            name: "ciril el pchichi ",
            img: "/img/gallery/img11.png",
            recipesCount: "5",
            cuisine: "française"


        },
        {
            name: "komi geresse ",
            img: "/img/gallery/img12.png",
            recipesCount: "15",
            cuisine: "togolais"


        },
        {
            name: "bruno comlan",
            img: "/img/gallery/img13.png",
            recipesCount: "8",
            cuisine: "mexicain"


        },
        {
            name: "kogo israel ",
            img: "/img/gallery/img14.png",
            recipesCount: "3",
            cuisine: "japonaise"


        },
        {
            name: "salifou aida ",
            img: "/img/gallery/img15.png",
            recipesCount: "2",
            cuisine: "ivoirien"


        }
    ]
    return (
        <div className="sectionchiefs">
            <h1 className="title"> our top chiefs</h1>
            <div className="topchefcontainer">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />*/}
                {chiefs.map(chief => <ChiefCard key={chief.name} Chief={chief} />)}

            </div>
        </div>
    )
}