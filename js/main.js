var UIController = (function () {

    var DOMStrings = {
        removeTask: '.remove-task',
        inputTask: '.add',
        addTask: '.add-btn',
        sectionTask: '.tasks',
        task: '.tasks__task',
    }

    return {
        getDomStrings: function () {
            return DOMStrings;
        },
        displayTask: function (description) {
            var htmlTask
            //create a placeholder for html
            htmlTask = `<div class="tasks__task"><p>${description}</p><button class="remove-task"><i class="fas fa-trash-alt"></i></button></div>`

            document.querySelector(DOMStrings.sectionTask).insertAdjacentHTML('beforeend', htmlTask);
        },
        clearInput: function () {
            var input
            input = document.querySelector(DOMStrings.inputTask);
            input.value = "";
            input.focus()

        }

    }

})()

var controller = (function (UICtrl) {
    var DOM, inputTask
    DOM = UICtrl.getDomStrings();
    inputTask = document.querySelector(DOM.inputTask)

    function addTask() {

        if (inputTask.value !== "") {
            //display task
            UICtrl.displayTask(inputTask.value);
            //clear input
            UICtrl.clearInput();
        }

        document.querySelectorAll(DOM.removeTask).forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target.parentNode.parentNode.className === "tasks__task") {
                    console.log(e.target.parentNode.parentNode)
                    e.target.parentNode.parentNode.remove()
                }
            })
        })
    }

    document.addEventListener('keypress', function (e) {

        if (e.keyCode === 13 || e.which === 13) {
            addTask();
        }
    });

    document.querySelector(DOM.addTask).addEventListener('click', addTask)


})(UIController);