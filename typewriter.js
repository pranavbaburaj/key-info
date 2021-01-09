export default class TypeWriter {
    constructor(tag){
        this.tag = tag;
        this.text = this.getText(tag)
        this.speed = 50
    }

    getText(tag) {
        return tag.innerHTML
    }

    start()
    {
        this.setEmpty()
        var index = 0
        while (index < this.text.length){
            this.tag.innerHTML += this.text[index]

            setTimeout(function()
            {
                
            }, this.speed)
            index++
        }
    }

    setEmpty()
    {
        this.tag.innerHTML = ""
    }

}