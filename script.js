console.log('js ok')

const app = new Vue(

    {
        el:'#app',
        data: {
            newTodo: '',
            todos: [
                
                {
                text:'Fare la spesa',
                done: true,
                
                },

                {
                text: 'Fare la lavatrice',
                done: true,
                },

                {
                text: 'fare il carosello',
                done: false,
                },

                {
                text: 'Preparare la cena',
                done: true,
                },
                
            ]
        },
        methods: {
            
             deleteTodo(index){
                 const array = [];
                 for(let i = 0; i < this.todos.length; i ++){
                     if (i !== index){

                        array.push(this.todos[i])

                    }


                 }
                 this.todos = array;
             },

            addTodo () {
                const toDoToInsert = {
                    text:this.newTodo.trim(),
                    done:false,
                }

                
                console.log(toDoToInsert)
                if (toDoToInsert){
                    this.todos.push(toDoToInsert);
                    
                }else {
                    console.log('non hai inserito nulla')

                } 
                console.log(this.todos)
                this.newTodo = '';
            },
            
            //BONUS-2
            changeTodo(i){
                this.todos[i].done = !this.todos[i].done
            }
        }
    }

)

