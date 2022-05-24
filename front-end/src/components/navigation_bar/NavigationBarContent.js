const keys = [
        "languaje-tag",
        "about",
        "contact", 
        "web-projects",
        "other-projects",
        "programm-languages-and-tec"
]
const spanishValues = [
    "Español",
    "Sobre mi",
    "Contacto", 
    "Proyectos web",
    "Otros proyectos",
    "Lenguajes de programación y tecnologías"
]
const englishhValues = [
    "English",
    "About me",
    "Contact", 
    "My web projects",
    "Other projects non web related",
    "Programming languajes and technologies"
]

const content = new Map()
content.set("spanish", new Map())
content.set("english", new Map())

keys.forEach((element, index) => {
    content.get("spanish").set(element, spanishValues[index])
    content.get("english").set(element, englishhValues[index])

})

module.exports = content
