const getMovieID = (link) => {
  const regex = /\/\w+\//i;

  if (regex.test(link)) {
    let id = regex.exec(link)[0];
    id = id.replace(/\//g, "");
    return id.trim();
  } else {
    return null;
  }
};

const getMovieDownloadLink = (html) => {
  const regex = />https.+\.mp4/i;

  if (regex.test(html)) {
    let link = regex.exec(html)[0];
    link = link.replace(">", "");
    return link;
  } else {
    return null;
  }
};

export const getVideoLink = (url) => {
  return new Promise((resolve, reject) => {
    let id = getMovieID(url);
    if (id === null) {
      reject("Can't extract file id");
    }
    let data = new FormData();
    data.append("op", "download2");
    data.append("id", id);

    fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text())
      .then((html) => {
        let download_link = getMovieDownloadLink(html);
        if (download_link === null) {
          reject("Can't extract download links");
        }
        resolve(download_link);
      })
      .catch((err) => reject(err));
  });
};
