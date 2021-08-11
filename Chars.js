import React from 'react';


const Chars = (props) => {
    let chStyle={
        margin: "3%",
        width: "500px",
        display: "inline-block",
        flex_direction: "row",
        position: "relative"
    }
    // let charMap={
    //     justify_content: "space-evenly",
    //     flex_wrap: "wrap"
    // }
    return (
        <char className="bg-dark text-light py-3" style={chStyle}>
        <div  >
            <img className="char_img" src=" https://th.bing.com/th/id/OIP.p2i7uxaarJ8LRFyA-jsDmgHaKl?w=115&h=180&c=7&o=5&pid=1.7 " alt="Gustavo fring"></img>
            <div className="char_btm btm2" id= "character-info-1">
                <p className="sc-gzVnrw btPmOt">Gustavo Fring</p>
                <div className="underline"></div>
                <p> Portrayed_by=" : Giancarlo Esposito" </p>
            <p>Nickname=" : Gus"</p>
            <p>Id=" : 1"</p>
            <p>Quotes= " : If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son"</p>
            <p>Occupation=" : Los-Pollos co-Founder,Philanthropist,Cartel Leader"</p>
            <p>Breaking_Bad_seasons=" : 2,3,4"</p>
            <p>Status=" : Deseased"</p>
                </div>
                <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png " alt="Walter White"></img>
            <div className="char_btm btm2" id= "character-info-2">
                <p className="sc-gzVnrw btPmOt">Walter White</p>
                <p> Portrayed_by=": Bryan Cranston"</p>
            <p>Nickname=" : Heisenberg"</p>
            <p>Id=" : 2"</p>
            <p>Quotes=" : If you don’t know who I am, then maybe your best course would be to tread lightly."</p>
            <p>Occupation=" : A chemist and graduate of the California Institute of Technology"</p>
            <p>Breaking_Bad_seasons=" : 1,2,3,4,5"</p>
            <p>Status=" : Alive"</p>
                </div>
                <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png " alt="Skyler White"></img>
            <div className="char_btm btm2" id= "character-info-3">
                <p className="sc-gzVnrw btPmOt">Skyler White</p>
                <p> Portrayed_by=" : Anna Gunn"</p>
            <p>Nickname=" : anna"</p>
            <p>Id=" : 3"</p>
            <p>Quote=""</p>
            <p>Occupation=" : housewife"</p>
            <p>Breaking_Bad_seasons=" : 2,3,4"</p>
            <p>Status=" : Deseased"</p>
                </div>
                <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/220px-Jesse_Pinkman_S5B.png " alt="Jesse Pinkman"></img>
            <div className="char_btm btm2" id= "character-info-4">
                <p className="sc-gzVnrw btPmOt">Jesse Pinkman</p>
                <p> Portrayed_by=" : Aaron Paul"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 4"</p>
            <p>Quotes=": This is my own private domicile and I will not be harassed…b***h"</p>
            <p>Occupation=" : Meth manufacturer and distributor, Drug enforcer"</p>
            <p>Breaking_Bad_seasons=" : 1,2,3,4"</p>
            <p>Status=" : Alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Hank_Schrader_S5B.png/220px-Hank_Schrader_S5B.png " alt="Hank Schrader"></img>
            <div className="char_btm btm2" id= "character-info-5">
                <p className="sc-gzVnrw btPmOt">Hank Schrader</p>
                <p> Portrayed_by=" : Dean Norris"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 5"</p>
            <p>Quotes=": I swear to Christ — I will put you under the jail"</p>
            <p>Occupation=" : DEA agent"</p>
            <p>Breaking_Bad_seasons="First appearance	
            Breaking Bad:Pilot,
            Better Call Saul:
            The Guy for This,
            Last appearance	
            Breaking Bad:
            Ozymandias"</p>
            <p>Status=" : alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Marie_Schrader_S5B.png/220px-Marie_Schrader_S5B.png " alt="Marie Schrader"></img>
            <div className="char_btm btm2" id= "character-info-6">
                <p className="sc-gzVnrw btPmOt">Marie Schrader</p>
                <p> Portrayed_by=" : Betsy Brandt"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 6"</p>
            <p>Quotes=": "</p>
            <p>Occupation=" : Radiologic technologist"</p>
            <p>Breaking_Bad_seasons="First appearance :	Pilot,
            Last appearance :	Felina2013"</p>
            <p>Status=" : alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Walter_White_Jr_S5B.png/220px-Walter_White_Jr_S5B.png " alt="Walter White Jr."></img>
            <div className="char_btm btm2" id= "character-info-7">
                <p className="sc-gzVnrw btPmOt">Walter White Jr.</p>
                <p> Portrayed_by=" : RJ Mitte"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 7"</p>
            <p>Quotes=": If you don’t know who I am, then maybe your best course would be to tread lightly"</p>
            <p>Occupation=" : Student"</p>
            <p>Breaking_Bad_seasons="First appearance	Pilot ,
            Last appearance	Felina"</p>
            <p>Status=" : Alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Jimmy_McGill_BCS_S3.png/220px-Jimmy_McGill_BCS_S3.png " alt="Saul Goodman"></img>
            <div className="char_btm btm2" id= "character-info-8">
                <p className="sc-gzVnrw btPmOt">Saul Goodman</p>
                <p> Portrayed_by=" : Bob Odenkirk"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 8"</p>
            <p>Quotes=": f I Ever Get Anal Polyps, At Least I Know What To Name Them."</p>
            <p>Occupation=" : 	
            Attorney
            (criminal defense, elder law)
            Manager of Ice Station Zebra Associates
            Mailroom clerk at Hamlin, Hamlin , McGill
            Associate attorney at Davis , Main
            Partner at Wexler McGill
            Mobile telephone salesman
            Cinnabon manager"</p>
            <p>Breaking_Bad_seasons="First appearance Breaking Bad:
            Better Call Saul
            Better Call Saul
            Uno,
            Last appearance	
            Breaking Bad:
            Granite State"</p>
            <p>Status=" : alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Mike_Ehrmantraut_BCS_S3.png/220px-Mike_Ehrmantraut_BCS_S3.png " alt="Michael Ehrmantraut"></img>
            <div className="char_btm btm2" id= "character-info-9">
                <p className="sc-gzVnrw btPmOt">Michael Ehrmantraut</p>
                <p> Portrayed_by=" : Jonathan Banks"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 9"</p>
            <p>Quotes=": Shut the fuck up. Let me die in peace."</p>
            <p>Occupation=" : Cleaner
            Head of Los Pollos Corporate Security
            Hitman
            Private investigator
            Philadelphia police officer
            Parking attendant with SMQ Parking at Albuquerque courthouse
            Security consultant for Madrigal Electromotive"</p>
            <p>Breaking_Bad_seasons="First appearance	
            Breaking Bad:
            ABQ,
            Better Call Saul:
            Uno,
            Last appearance	
            Breaking Bad:
            El Camino "</p>
            <p>Status=" : alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Laura_Fraser_discusses_Loch_Ness_with_Moobys.jpg/110px-Laura_Fraser_discusses_Loch_Ness_with_Moobys.jpg " alt="Lydia Rodarte-Quayle"></img>
            <div className="char_btm btm2" id= "character-info-10">
                <p className="sc-gzVnrw btPmOt">Lydia Rodarte-Quayle</p>
                <p> Portrayed_by=" : Laura Fraser"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 10"</p>
            <p>Quotes=": "</p>
            <p>Occupation=" : 	
            Executive at Madrigal Electromotive GmbH
            Drug smuggler"</p>
            <p>Breaking_Bad_seasons="First appearance	
            Breaking Bad:
            Madrigal (2012) ,
            Better Call Saul:
            Off Brand (2017) ,
            Last appearance	
            Breaking Bad:
            Snow Globe (2020) ,
            Better Call Saul:
            JMM (2020)"</p>
            <p>Status=" : alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Jesse_Plemons_%2820769593584%29.jpg/110px-Jesse_Plemons_%2820769593584%29.jpg " alt="Todd Alquis"></img>
            <div className="char_btm btm2" id= "character-info-11">
                <p className="sc-gzVnrw btPmOt">Todd Alquis</p>
                <p> Portrayed_by=" : Jesse Plemons"</p>
            <p>Nickname=" : "</p>
            <p>Id="  : 11"</p>
            <p>quotes=": "</p>
            <p>Occupation=" : Pest exterminator for Vamonos Pest
            Meth manufacturer"</p>
            <p>Breaking_Bad_seasons="First appearance	Hazard Pay (2012) , 
            Last appearance	Snow Globe (2020)"</p>
            <p>Status=" : Alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/c/c5/Kim_Wexler_BCS_S5.png " alt="Kim Wexler"></img>
            <div className="char_btm btm2" id= "character-info-12">
                <p className="sc-gzVnrw btPmOt">Kim Wexler</p>
                <p> Portrayed_by=" : Rhea Seehorn"</p>
            <p>Nickname="  : "</p>
            <p>Id="  : 12"</p>
            <p>Occupation="  : Attorney
            Head of Schweikart and Cokely's Banking Division"</p>
            <p>Breaking_Bad_seasons="First appearance	Uno (2015)"</p>
            <p>Status="  : alive"</p>
            </div>
<hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Howard_Hamlin_BCS_S5.png/220px-Howard_Hamlin_BCS_S5.png " alt="Howard Hamlin"></img>
            <div className="char_btm btm2" id= "character-info-13">
                <p className="sc-gzVnrw btPmOt">Howard Hamlin</p>
                <p> Portrayed_by=" : Patrick Fabian"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 13"</p>
            <p>Occupation=" : Attorney
            Criminal lawyer
            Name partner at Hamlin Hamlin McGill"</p>
            <p>Breaking_Bad_seasons="First appearance	Uno (2015)"</p>
            <p>Status=" : Alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/3/3d/Nacho_Varga_BCS_S5.png " alt="Ignacio Varga"></img>
            <div className="char_btm btm2" id= "character-info-14">
                <p className="sc-gzVnrw btPmOt">Ignacio Varga</p>
                <p> Portrayed_by=" : Michael Mando"</p>
            <p>Nickname=" : "</p>
            <p>Id="  : 14"</p>
            <p>Occupation=" : 	Salamanca drug cartel member"</p>
            <p>Breaking_Bad_seasons="First appearance :	Mijo (2015)"</p>
            <p>Status=" : Alive" </p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/c/ca/ChuckMcGillBCS.jpg " alt="Charles Lindbergh McGill Jr."></img>
            <div className="char_btm btm2" id= "character-info-15">
                <p className="sc-gzVnrw btPmOt">Charles Lindbergh McGill Jr.</p>
                <p> Portrayed_by=" : Michael McKean"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 15"</p>
            <p>Occupation=" : 	
            Attorney
            Criminal lawyer
            Name partner at Hamlin Hamlin McGill"</p>
            <p>Breaking_Bad_seasons="First appearance :	Uno (2015) , 
            Last appearance	: Winner (2018)"</p>
            <p>Status=" : Alive"</p>
            </div>
            <hr/>
            <img className="char_img" src=" https://upload.wikimedia.org/wikipedia/en/4/49/Lalo_Salamanca_S5.png " alt="Eduardo Lalo Salamanca "></img>
            <div className="char_btm btm2" id= "character-info-16">
                <p className="sc-gzVnrw btPmOt">Eduardo Lalo Salamanca</p>
                <p> Portrayed_by=" : Tony Dalton"</p>
            <p>Nickname=" : "</p>
            <p>Id=" : 16"</p>
            <p>Quotes=": you wanna be a friend of cartel? time to get yourself a new motto,just make a money"</p>
            <p>Occupation=" : Cartel operator"</p>
            <p>Breaking_Bad_seasons="First appearance :	Coushatta (2018)"</p>
            <p>Status=" : Deseased"</p>
            </div>
            <hr/>

        
        </div>
        
        </char>
    );
}

export default Chars;

