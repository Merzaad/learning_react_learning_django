function Post(props) {
    let a = [];
    for (let i of props.database) {
        if (i.tag !== props.tag) {
            a.push(
                <a href="#" id="test" className="lnk">
                    <div className="card rounded-3 my-4 " >
                        <img src={i.img} className=" card-image-top w-100 mb-3" />
                        <div className="card-body">
                            <p className="h2">{i.title}</p>
                            <p className="text-secondary">Updated {i.update}<a href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a></p>
                            <p>{i.text}</p>
                            <br />
                        </div>
                    </div>
                </a>
            );
        };
    };
    return (
        <div>
            {a}
        </div>
    );
};
export default Post;