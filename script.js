document.getElementById('user-input').addEventListener('keypress', async function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); //ارسال با کلید اینتر
        sendMessage();}});
function sendMessage() {
    const input = document.getElementById('user-input');
    const trimmedInput = input.value.trim();
    if (trimmedInput) {
        addMessage(trimmedInput, 'user-message');
        input.value = ''; // پاک کردن جعبه متن بعد از ارسال.
        simulateTypingIndicator();
        setTimeout(() => { processBotResponse(trimmedInput); }, 1000);//تاخیر در پاسخ
   }} 
function simulateTypingIndicator() {
    const chatOutput = document.getElementById('chat-output');
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = "در حال تایپ...";
    chatOutput.appendChild(typingIndicator);
    chatOutput.scrollTop = chatOutput.scrollHeight;
    setTimeout(() => chatOutput.removeChild(typingIndicator), 950); }
function addMessage(message, className) {
    const chatOutput = document.getElementById('chat-output');
    const messageDiv = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});// افزودن زمان به پیام
    messageDiv.classList.add('message', className);
    messageDiv.innerHTML = `${message} <span class="timestamp">${currentTime}</span>`;
    chatOutput.appendChild(messageDiv);     
    chatOutput.scrollTop = chatOutput.scrollHeight;}
function addMessage(message, className) {
    const chatOutput = document.getElementById('chat-output');
    const messageDiv = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});// افزودن زمان به پیام
    messageDiv.classList.add('message', className);
    messageDiv.innerHTML = `<span class="message-text">${message}</span> <span class="timestamp">${currentTime}</span>`; 
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;}//اسکرول به اخرین پیام
function processBotResponse(userInput) {
    let response;
    switch (userInput.toLowerCase()) {
            case "ساعت چنده؟":
            case "ساعت":
            case "تایم":
            case "زمان":
            case "ساعت رو بگو":
            case "ساعتو بگو":
            case "ساعت چنده":
            const currentTime = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
                response = `الان ساعت  ${currentTime}  است`; // زمان به شکل 24 ساعته مثل "13:45" نمایش داده می‌شود.
                    break;
            case "سیلام":
            case "سلم":
            case "سلام":
            case "سلم":
            case "سلوم":
            case "سالام":
            case "hi":
            case "hello":
            case "helo":
            case "sghl":
            case "sdghl":
            case "sg,l":
            case "shghl":
                response ="سلام من ربات هستم";
                    break;
            case "چطوری":
            case "خبی":
            case "خوبی":
            case "خوبی؟":
            case "خبی؟":
            case "چطوری؟":
            case "حالت خوبه؟":
            case "حالت خوبه":
                response ="ممنون خوبم";
                    break;
            case "اسمت چیه":
            case "اسم":
            case "اسمت":
            case "اسمت چیه؟":
            case "نام":
            case "نام؟":
            case "whats your name?":
                response ="اسم من در حال حاضر ربات است";
                    break;
            case "چند سالته":
            case "چند روزه به دنیا اومدی":
            case "چند سالته؟":
            case "چندسالته":
            case "چندسالته؟":
                response ="من تازه ساخته شده ام";
                    break;
            case "چخبر":
            case "چخبرا":
            case "چیخبر":
            case "چه خبر":
            case "چخبر؟":
            case "چخبرا؟":
            case "چه خبر؟":
                response = "خبری نیست";
                    break;
            case "تو با چه زبانی نوشته شدی":
            case "با چه زبانی نوشته شدی؟":
            case "با چه زبان هایی نوشته شدی؟":
            case "با چه زبانی نوشته شدی":
            case "با چه زبان هایی نوشته شدی":
            case "با چه زبان هایی نوشته شده ای":
            case "?با چه زبان هایی نوشته شده ای":
            case "با چه زبان هایی ساخته شدی؟":
            case "fh ]i cfhk ihdd shoji and?":
                response = "طراحی شدم html و css , js با";
                    break;
            case "خب":
                response = "خب که خب";
                    break;
            case "چیکار میکنی":
            case "چکار میکنی":
            case "چکارا میکنی":
            case "چکار میکنی؟":
            case "چیکار میکنی؟":
            case "چکارا میکنی؟":
            case "چه کار میکنی؟":
            case "چه کار میکنی":
            case "چه کارا میکنی؟":
            case "چیکارا میکنی؟":
                response = "فعلا که دارم با شما حرف میزنم"+" ولی کار های زیادی میتونم انجام بدم";
                    break;
            case "چیابلدی":
            case "چیا بلدی؟":
            case "چکار بلدی کنی؟":
            case "چکار بلدی کنی":
            case "چکار بلدی انجام بدی؟":
            case "چکار بلدی انجام بدی":
            case "چه امکاناتی داری؟":
            case "چه امکاناتی داری":
            case "چه کارهایی بلدی؟":
            case "چه کارهایی بلدی":
                response = "فعلا میتونم باهات چت کنم ولی درحال ارتقاع هستم";
                    break;
            case "کی تورو ساخته؟":
            case "تورو کی ساخته؟":
            case "سازنده تو کیه؟":
            case "سازندت کیه؟":
            case "کی ساختت؟":
            case "کی تور ساخت؟":
            case "چه کسی تورو ساخته؟":
            case "کی تورو ساخت":
            case "سازندت کیه":
            case "تورو کی ساخته":
            case "چه کسی تورو ساخت":
            case "کی تور خلق کرده؟":
            case "توسط کی ساخته شدی؟":
            case "توسط کی ساخته شدی":
            case "کی تورو ساخته":
                response = " منو بابام ساخته";
                    break;
            case "بابات کیه؟":
            case "بابات کیه":
            case "اسم بابات چیه؟":
            case "اسم بابات چی":
            case "اسم بابات چیه":
            case "بابات چه کسیه؟":
            case "بابات چه شخصیه":
            case "پدرت کیه؟":
            case "پدرت کیه":
            case "پدرت کیست؟":
                response = "اقا محمد ";
                    break;
            case "اها":
            case "عا":
            case "عاها":
            case "اهوم":
            case "عوهوم":
            case "عام":
            case "امم":
            case "خوبه":
                response ="بله";
                    break;
            case "خدافز":
            case "بای":
            case "خدانگهدار":
            case "خدا نگهدار":
            case "بای بای":
            case "فعلا":
            case "فعلا خدانگهدار":
            case "فعلا بای":
            case "فعلا خدافز":
            case "فعلا خودافز":
            case "بدرود":            
            case "خدانگهدارت":            
            case "فعلا بای بای":            
                response ="!خدانگهدار";
                    break;
            case "ممنون":
            case "تشکر":
            case "خیلی ممنون":
            case "سپاس":
            case "سپاسگذارم":
            case "سپاسگزارم":
            case "سپاس گزارم":
            case "سپاس فراوان":
            case "باشه ممنون":
            case "لطف کردی":
                response ="خواهش میکنم";
                    break;
            case "":
            case "":
            case "":
            case "":
            case "":
                response ="";
                    break;
            case "":
            case "":
            case "":
            case "":
            case "":
                response ="";
                    break;
    //special code
            case "":
                response = "";
                    break;
            case "":
                response = "";
                    break;
            case "":
                response ="";
                    break;
            case "":
                response ="";
                    break;
            case "":
                response ="";
                    break;  
            case "":
                response ="";
                    break;
            case "تاریخ میلادی":
            case "تاریخ":
            case "امروز چندمه":
            case "الان چندمه":
            case "امروز چندمه؟":
                const today = new Date();
                const day = today.getDate().toString().padStart(2, '0');
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const year = today.getFullYear();
                    response= `${day}/${month}/${year}`;
                        break;
                    default:
                response = "احتمالا برای این حرف برنامه ریزی نشدم";
    }
    addMessage(response, 'bot-message');
}

//    __  __  ___  _   _    _    __  __ __  __    _    ____  
//   |  \/  |/ _ \| | | |  / \  |  \/  |  \/  |  / \  |  _ \ 
//   | |\/| | | | | |_| | / _ \ | |\/| | |\/| | / _ \ | | | |
//   | |  | | |_| |  _  |/ ___ \| |  | | |  | |/ ___ \| |_| |
//   |_|  |_|\___/|_| |_/_/   \_\_|  |_|_|  |_/_/   \_\____/ 
                                                          
