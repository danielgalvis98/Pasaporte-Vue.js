class DB{

    constructor(){}

    getBooks(){
        let books = JSON.parse(localStorage.getItem('books')); 
        return (books === null) ? [] : books;
    }
    
    saveBook(book){
        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    deleteBook(bookId){
        let books = this.getBooks();
        books = books.filter(book => book.id !== bookId);
        localStorage.setItem('books', JSON.stringify(books));
    }

    getBook(bookId){
        const books = this.getBooks();
        return books.filter(book => book.id.toString() === bookId.toString())[0];
    }

    getUsers(){
        let users = JSON.parse(localStorage.getItem('users')); 
        return (users === null) ? [] : users;
    }

    deleteUser(userId){
        let users = this.getUsers();
        users = users.filter(user => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(users));
    }

    saveUser(user){
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    getUser(userId){
        const  users = this.getUsers();
        return users.filter(user => user.id.toString() === userId.toString())[0];
    }

    getLoans(){
        let loans = JSON.parse(localStorage.getItem('loans')); 
        return (loans === null) ? [] : loans;
    }

    saveLoan(loan){
        const loans = this.getLoans();
        loans.push(loan);
        localStorage.setItem('loans', JSON.stringify(loans));
    }

    getLoansByUser(userId) {
        const loans = this.getLoans();
        return (loans === null) ? [] : loans.filter(loan => loan.userId === userId);
    }

    getLoan(userId, bookId){
        const loans = this.getLoans();
        return loans.filter(loan => loan.bookId === bookId && loan.userId === userId);
    }
}

export default new DB();