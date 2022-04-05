const note0 = './assets/note0.png'
const note2 = './assets/note1.png'
const note1 = './assets/note2.png'
const note3 = './assets/note3.png'
const drum = './assets/drum.wav'
const bongod = './assets/bongod.png'
const player = new Tone.Player(drum).toMaster();

const bongocat = document.getElementById('bongocat')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

let synth = new Tone.Synth().toMaster();

const setImg = (src, timeout) =>{
    bongocat['src'] = src;
    setTimeout(()=>{bongocat['src']=note0},timeout)
}

button1.addEventListener('mousedown',()=>{
    setImg(note1, 500);
    synth.triggerAttackRelease('C3', '3n')
})

button2.addEventListener('mousedown',()=>{
    setImg(note2, 500);
    synth.triggerAttackRelease('E3', '3n')
})

button3.addEventListener('mousedown',()=>{
    setImg(note3, 500);
    synth.triggerAttackRelease('G3', '3n');
})

document.addEventListener('keydown',(e)=>{
    if(e.key==='k'){
        setImg(bongod, 500)
        player.start();
    }
})
