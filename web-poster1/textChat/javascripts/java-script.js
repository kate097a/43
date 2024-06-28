window.onload = function() {
    let count = 8
    let answers = {1: "вернуть билеты можно на нашем сайте glidm.org за сутки до начала мероприятия", 
    2: "ближайшая станция метро к концертному залому - павелецкая, далее прямиком до места проведения мероприятия едут такие автобусы как: 116 49 58", 
    3: "к сожалению в концертном зале не предусмотренна покупка билетов на месте",
     4: "такие EDM исполнители как: LIDA DK 5MEWMET SEWERSLVT", 
     5: "с собой нельзя брать воду, режущие предметы, перцевые балончики"}
    function newMessage(cls, text) {
        count += 1;
        let chat = document.getElementById("chat");
        let newElement = `<div class="message ${cls}" id="${count}"><p class="messageText">${text}</p></div>`;
        chat.insertAdjacentHTML('beforeend', newElement);
        console.log(document.getElementById(count).scrollHeight)
        chat.scrollTo({top: chat.scrollHeight, behavior: 'smooth'})
    }

    let choose = document.getElementById("choose");
    choose.scrollIntoView()
    choose.addEventListener("click", (e)=> {
        console.log(e.target)
        let text = e.target.innerText;
        newMessage("person", text);
        setTimeout(() => {
            newMessage('bots', answers[e.target.classList[1]]);
        }, 500);
   })
}
