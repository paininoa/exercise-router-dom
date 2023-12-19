export default ({ language }) => {

    const lang = {
        "en": { alert: "404 Page not found" },
        "it": { alert: "404 Pagina non trovata" }
    }

    return (<>
        <h1>{lang[language].alert}</h1>
    </>)
}