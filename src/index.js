class Site {
    constructor() {
        this.boards = []
    }
    addBoard(addBoard) {       
		if (this.boards.find((board) => board.name === addBoard.name)) {   
            throw new Error()
        }
        this.boards.push(addBoard),
        addBoard.isBoard = true
    }
    findBoardByName(name) {
        return this.boards.find((board) => board.name = name)
    }
    
}

class Board {
    constructor(name) {
        if (name === "" || name === null) {
            throw new Error()
        }
        this.name = name,
        this.articles = [],
        this.isBoard = false
      }
      publish(addArticle){
		if(this.isBoard === false){
		  throw new Error()          
		}
        if (addArticle.subject === "" || addArticle.subject === null || addArticle.content === "" || addArticle.content === null || 
        addArticle.author === "" || addArticle.author === null) {
            throw new Error()
        }
        
        addArticle.id = `${this.name}-${Math.random()}`    
           
        addArticle.createdDate = new Date().toISOString()
		this.articles.push(addArticle)
        addArticle.isArticle = true
      }
      getAllArticles(){
          return this.articles
      }
}

class Article {
    constructor(article){
		const{subject, content, author} = article     
		this.subject = subject
		this.content = content
		this.author = author
        this.comments =[]
        this.isArticle = false
	}
    reply(addComment){
        if(this.isArticle === false){
            throw new Error()          
          }
          if (addComment.content === "" || addComment.content === null || addComment.author === "" || addComment.author === null) {
              throw new Error()
          }  
        addComment.createdDate = new Date().toISOString()
        this.comments.push(addComment)
    }
    getAllComments(){
        return this.comments
    }
}

class Comment {
    constructor(comment) {        
        const{content, author} = comment      
		this.content = content
		this.author = author
      }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
