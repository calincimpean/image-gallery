class Gallery{
    selector;
    imagesArray;
    element;
    index = 1;
    
    constructor(selector,imagesArray){
        this.selector=selector;
        this.imagesArray=imagesArray;
        this.prepareArray();
        this.findParrentElement();
        this.addImagesToElement();
        this.goToElement(1);
        this.attachEventListeners();
    }

    prepareArray(){
        this.imagesArray=[ this.imagesArray[this.imagesArray.length-1],...this.imagesArray, this.imagesArray[0]]
    }

    findParrentElement(){
        this.element=(document.querySelector(this.selector));
    }

    addImagesToElement(){
        console.dir(this.element);
        let elements = "";
        elements+="<div class='items'>"
        for(let i=0;i<=this.imagesArray.length-1;i++){
            elements += "<img class='dimensions' src='" + this.imagesArray[i] +"'>"

        }
        elements +="</div>"
        this.element.innerHTML += elements;
    }

    goToElement(index, isSmooth){
        this.element.querySelector(".items").scrollTo({left: index * 800, behavior: isSmooth ? "smooth" : undefined})
        setTimeout(() => {
            if(index === this.imagesArray.length - 1){
                this.index = 1
                this.goToElement(this.index)
            }
            if(index === 0){
                this.index = this.imagesArray.length - 2
                this.goToElement(this.index)
            }
        }, 600)
      
    }
    
    attachEventListeners(){
        
        this.element.querySelector(".galleryprev").addEventListener("click", () => this.goToElement(--this.index, true))
        this.element.querySelector(".gallerynext").addEventListener("click", () => this.goToElement(++this.index, true))
    }
    

}
var gallery = new Gallery('.gallery', ['https://wallpapercave.com/wp/wp5913975.jpg', 'https://wallpapercave.com/wp/wp1917128.jpg','https://wallpapercave.com/wp/wp6889318.jpg','https://advancetitan.com/wp-content/uploads/2022/04/Stranger_Things__The_Experience.jpeg','https://cdn.wallpapersafari.com/13/68/N102Xd.jpg','https://wallpapercave.com/wp/wp5770334.jpg','https://wallpaperaccess.com/full/513133.jpg']);
console.log(gallery);