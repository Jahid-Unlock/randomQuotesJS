const arr = [
    {
        quote : 'You are the world and the world is you.',
        author : '—KRISHNAMURTI'
    },
    {
        quote : 'If you judge people, you have no time to love them',
        author : '-Mother Teresa'
    },
    {
        quote : 'The greatest wealth is to live content with little.',
        author : '—Ploto'
    },
    {
        quote : 'Your love make me strong,  your hate make me unstopable',
        author : '-CR7'
    },
    {
        quote : 'You are the world and the world is you.',
        author : '—KRISHNAMUR'
    },
    {
        quote : 'Don’t count the days, make the days count.',
        author : '—M. Ali'
    },
    {
        quote : 'I don’t think of all the misery but of the beauty that still remains.',
        author : '—Anna Frank'
    },
    {
        quote : 'Life is a flower of which love is the honey.',
        author : '—Victor Hugo'
    }
    
];

const btn = document.getElementById("gen-btn");

btn.addEventListener("click", function(){
    var ran = Math.floor(Math.random() * arr.length);
    
    document.querySelector(".qoute").textContent = arr[ran].quote;
    document.querySelector(".author").textContent = arr[ran].author;
});












