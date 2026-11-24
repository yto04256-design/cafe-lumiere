const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("messageInput").value;

    if (name.trim() === "" || message.trim() === "") {
        document.getElementById("result").textContent =
            "すべての項目を入力してください。";
        return;
    }

    document.getElementById("result").textContent =
        name + "さん、お問い合わせありがとうございます！";

});

const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const preview = document.getElementById("preview");

messageInput.addEventListener("input", function() {

    const text = messageInput.value;

    charCount.textContent = text.length + " / 100文字";

    preview.textContent = "入力内容：" + text;

});