
export default ({ language }) => {

    const lang = {
        "en": { title: "About Us", description: "The chinchilla is on the table and we are too" },
        "it": { title: "Chi siamo", description: "Il chinchilla è sul tavolo e lo siamo anche noi" }
    }

    return (<div className="about-us">

        <h2>{lang[language].title}</h2>
        <p>{lang[language].description}</p>

    </div>)

};