import React, { Component } from "react";
import {
  changeDocumentTitle,
  changeMetaImg,
  changeMetaURL,
} from "../js/seo-utils";
import { getMoviesByID } from "../js/localStorage-utils";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loader from "../components/loader";
import VideoPlayer from "../components/videoPlayer";
import "../css/Components.css";
import "../css/Components-media-575.css";
import "../css/Components-media-991.css";

const ArabseedScraper = require("../js/arabseed_scraper");

export default class Movie extends Component {
  constructor(props) {
    super(props);
    const { name } = this.props.match.params;
    this.state = {
      links: null,
      loaderIsHidden: false,
      name,
      data: null,
    };
  }

  componentDidMount() {
    const data = getMoviesByID(this.state.name);
    let links = {};
    if (typeof data.sources_links["480p"] !== undefined) {
      ArabseedScraper.getMovie(data.sources_links["480p"]).then((link) => {
        links["480p"] = link;
        this.setState({
          data,
          links,
          loaderIsHidden: true,
        });
        changeDocumentTitle(this.state.name);
        changeMetaImg(this.state.data.img_link);
        changeMetaURL(window.location);
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.loaderIsHidden ? (
          <React.Fragment>
            <Navbar />
            <div className="container">
              <div className="row">
                <VideoPlayer
                  links={this.state.links}
                  poster={this.state.data.img_link}
                />
              </div>
            </div>
            <Footer />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
