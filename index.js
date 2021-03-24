


	let generateExcuse = () => {

    }





        ////////////////////////////////////////////////////
        let who = ['The dog', 'My grandma', 'His turtle', 'My bird']
        let action = ['ate', 'peed', 'crushed', 'broke']
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class', 'right on time', 'when I finished'];

        let marte = Math.floor(Math.random()*who.length);
        let jupiter= Math.floor(Math.random()*action.length);
        let saturno = Math.floor(Math.random()*what.length);
        let venus = Math.floor(Math.random()*when.length);


     

       //////////////////////////////////////////////////////
       document.querySelector('#excuse2').innerHTML = who[marte]+' '+(action[jupiter])+' '+(what[saturno])+' '+(when[venus]);
