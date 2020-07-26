
export const changeDocumentTitle = title => {
    title = `Watchly - ${title}`
    document.title = title;
    document.getElementById('ogTitle').setAttribute("content", title);
    document.getElementById('twitterTitle').setAttribute("content", title);
    document.getElementById('twitterImageAlt').setAttribute("content", title);
}

export const changeMetaImg = imgLink => {
    document.getElementById('ogImage').setAttribute("content", imgLink);
    document.getElementById('twitterImage').setAttribute("content", imgLink);
}

export const changeMetaURL = url => {
    document.getElementById('ogUrl').setAttribute("content", url);
}