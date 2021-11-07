import { useEffect, useState } from "react";

const Caption = props => {
    const { data } = props;
    const [tags, setTags] = useState("");

    useEffect(() => {
        let t = data.edge_media_to_caption.edges[0].node.text;
        t = t.split("\n");
        
        let txt = t.slice(0, t.length -1).join("<br/>");
        document.querySelector('.text').innerHTML = txt;

        let f = t[t.length-1];
        setTags(f);
    }, []);

    const renderTags = () => {
        if(tags.length > 0) {
            return tags.split(" ").map(tag => <a className="tag" href="#">{tag}</a>)
        }
    }

    return (
        <div className="comment">
           <span className="username">{data.owner.username}</span> 
           <span className="text"></span><br/>
           <span className="tags">{renderTags()}</span>
        </div>  
    );
}

export default Caption;