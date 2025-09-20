(function () {
    "use strict";
    class ToDoList {

        constructor() {
            this.newTask();
            this.renameNav();
        }

        newTask() {
            const newBtn = document.querySelector(".newBtn") ? document.querySelector(".newBtn") : false;
            const modal = document.querySelector(".modal") ? document.querySelector(".modal") : false;
            const close = document.querySelector(".close") ? document.querySelector(".close") : false;

            if (!newBtn) return console.error({ "error": "Elemento newBtn no encontrado en el DOM" });

            if (!modal) return console.error({ "error": "Elemento modal no encontrado en el DOM" });

            if (!close) return console.error({ "error": "Elemento close no encontrado en el DOM" });

            newBtn.addEventListener('click', () => {
                modal.classList.add('active');
                this.formProcess();
            });

            close.addEventListener('click', () => {
                modal.classList.remove('active');
                this.cleanForm(modal);
            });
        }

        formProcess() {
            const form = document.getElementById('createTask') ? document.getElementById('createTask') : false;

            if (!form) return console.error({ "error": "Elemento createTask no encontrado en el DOM" });

            const taskInput = form.querySelector('input[type=text]') ? form.querySelector('input[type=text]') : false;
            const submitBtn = form.querySelector('input[type=submit]') ? form.querySelector('input[type=submit]') : false;


            if (!this._handleSubmit) {
                this._handleSubmit = (e) => {
                    e.preventDefault();
                    if (taskInput.value.trim() !== '') {
                        this.createTask(taskInput.value);
                        taskInput.value = '';
                        submitBtn.disabled = true;
                    }

                };
                this._handleSubmit = this._handleSubmit.bind(this);
                form.addEventListener('submit', this._handleSubmit);
            } 

            taskInput.addEventListener('input', () => {
                if (taskInput.value.trim() !== '') {
                    submitBtn.disabled = false;
                } else {
                    submitBtn.disabled = true;
                }
            });
        }

        createTask(task) {
            const list = document.querySelector('ul') ? document.querySelector('ul') : false;

            if (!list) return console.error({ "error": "Elemento manin no encontrado en el DOM" });

            if (task.trim() == '') return console.error({ "error": "task vacio" });

            const newTask = document.createElement('li');
            newTask.classList.add('task');
            newTask.innerHTML = '';
            newTask.innerHTML = `
                <input type="checkbox" name="check" id="">
                <label for="task">${task}</label>
            `;

            list.appendChild(newTask);
        }

        cleanForm(modal) {

            if (typeof modal != "object") return console.error({ "error": "modal is not an object" });

            const form = modal.querySelector('form') ? modal.querySelector('form') : false;

            if (!form) return console.error({ "error": "modal is not defined" });

            form[0].value = '';

            form[1].disabled = true;
        }

        renameNav() {
            const section = document.querySelector('section nav') ? document.querySelector('section nav') : false;

            const modal = document.querySelector(".modal") ? document.querySelector(".modal") : false;
        
            if (!section) return console.error({ "error": "section is not defined" });

            if (!modal) return console.error({ "error": "Elemento modal no encontrado en el DOM" });

            section.addEventListener('dblclick', () => {
                modal.classList.add('active');
            });
        }
    }

    window.toDoList = new ToDoList();
})(); 