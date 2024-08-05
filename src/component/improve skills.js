export default function ImproveSkills() {
    const list = [
        "learn new recepies",
        "experiment with food",
        "write your own recepies",
        "know nutriction facts",
        "get cooking tips",
        "get ranked"
    ]
    return (
        <div className="section immprove-skills">
            <div className="col img">
                <img src="/img/gallery/img (9).jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Imporove Your Culinary Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">singup now</button>
            </div>
        </div>
    )
}