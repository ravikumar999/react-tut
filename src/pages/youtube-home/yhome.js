import Tags from "../../component/tags/tags";
import "./yhome.css";
const YoutubeHome = () => {
  const tagList = [
    "All",
    "Sports Entertainment",
    "T-Series",
    "Filmi",
    "Trailers",
    "Comedy"
  ];
  return(
    <div className="y-home-section">
      <div className="tag-section">
        {
          tagList.map(tag => <Tags tag={tag} />)
        }
      </div>
    </div>
  )
}

export default YoutubeHome;