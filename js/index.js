const openModals = document.querySelectorAll('.notes__btn')
const modals = document.querySelectorAll(".notes__modal")
const btnAddNotes = document.querySelector('.modal__add-notes')
const btnRemoveNotes = document.getElementById('notes')
// const btnRemoveNotess = document.querySelector('.remove__notess')

// let inputTitle = document.querySelector('modal__title').value


// let bodyNotes = newDiv = null;
// arrNotes = []
btnAddNotes.addEventListener('click', () =>{
    let bodyNotes = document.querySelector('.notes__body')
    let newDiv = document.createElement("div");
    let inputTitle = document.querySelector('.modal__title').value
    let inputText = document.querySelector('.modal__text').value
    // Создаем кнопку
    const rmBtn = document.createElement("div");
    rmBtn.innerHTML = `&times`;
    rmBtn.classList = 'remove__notes'
    rmBtn.addEventListener('click', () => { // И обработчик
      newDiv.remove();
    });
    // Контейнер с данными
    const conteiner = document.createElement("div");
    conteiner.classList.add('notes__content');
    //Заголовок
    const h = document.createElement('h1');
    h.innerText = inputTitle;
    // Текст
    const span = document.createElement('span');
    span.innerText = inputText;
    // Добавляем кнопку и текст в контейнер
    conteiner.append(rmBtn);
    conteiner.append(h);
    conteiner.append(span);
    // Вставляем в newDiv
    newDiv.append(conteiner);
    bodyNotes.insertAdjacentElement('beforeend', newDiv);
    //closeModal()
})
// btnAddNotes.addEventListener('click', () =>{
//     let bodyNotes = document.querySelector('.notes__body')
//     let newDiv = document.createElement("div");
//     let inputTitle = document.querySelector('.modal__title').value
//     let inputText = document.querySelector('.modal__text').value
//     newDiv.innerHTML = `
//     <div class="notes__content data-notes="remove1"">
//         <div data-notes-remove="remove1" id="notes" class="remove__notes">&times</div>
//         <h1>${inputTitle}</h1>
//         <span>${inputText}</span>
//     </div>`;
//     bodyNotes.insertAdjacentElement('beforeend', newDiv);
//     closeModal()
//     console.log(newDiv)
//     document.addEventListener("DOMContentLoaded", newDiv);
//     // window.addEventListener("DOMContentLoaded", (event) => {
//     //     const el = document.getElementById('notes');
//     //     if (el) {
//     //       el.addEventListener('click', removeBlock, false);
//     //     }
//     // });
//     // // document.querySelector('.notes__title').innerHTML = inputTitle
// })
// btnRemoveNotes.forEach((btnRemove) => {
//     console.log('???')
// });
// if (btnRemoveNotes) {
//     // Not called
//     btnRemoveNotes.addEventListener('click', () => {
//         console.log('???')
//     });
//   }
// function removeBlock() {
//     // document.getElementsByClassName("notes__content").remove();
//     console.log('???')
// }
// window.addEventListener("DOMContentLoaded", (e) => {
//         if(e.target === btnRemoveNotes) {
//             console.log('Good')
//         }
//     });
// function removeBlock() {
//     // document.getElementsByClassName("notes__content").remove();
//     console.log('???')
// }
// document.querySelector("remove__notes").onclick = function() {
//     document.getElementById("notes__content").remove();
// }
// btnRemoveNotes.addEventListener('click', (e) => {
//     let removeBlock = e.target.querySelector('notes__content')
//     removeBlock.remove()
// })

function openModal (e) {
    e.classList.toggle("active")
}
function closeModal (e) {
    if(e.target.classList.contains("modal__btn") || e.target.closest(".modal__btn") || e.target.classList.contains("notes__modal") || e.target.closest(".modal__add-notes")) {
        e.target.closest(".notes__modal").classList.toggle("active")
        let inputTitle = document.querySelector('.modal__title')
        let inputText = document.querySelector('.modal__text')
        inputTitle.value = ''
        inputText.value = ''
    }
}
openModals.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        let data = e.target.dataset.modalOpen;
        modals.forEach(modal => {
            if(modal.dataset.modal == data || modal.dataset.modal == e.target.closest(".notes__btn").dataset.modalOpen) {
                openModal(modal)
            }
        })
    })
});
modals.forEach(modal => {
    modal.addEventListener("click", e => closeModal(e))
})