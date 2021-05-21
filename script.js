function Test_end(){
    validate_button.setAttribute('disabled',"")
    score = 0
    answer_list = ''
    possible = 'ABCD'
    for(i = 1; i<71 ; i++){
        for (j = 0; j < possible.length;j++){
            check = document.getElementById('q'+i+possible[j])
            if (check && check.checked==true){
                answer_list+=possible[j]
                break
            } else if (j==possible.length-1){
                answer_list+='X'
            }
        }

    
    }fetch('https://lady-catherine-test-center.herokuapp.com/', {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify({'name':student_name,'id':student_id,'test':'placement_test','answer':answer_list})
      })
      .then(function(res) {
        if (res.ok) {
        return res.json();
      }
    })
      .then(function(value) {
        score = value['score']
        if (score == undefined){
            score = 'Error. Try Again'
            validate_button.removeAttribute('disabled')
        }
        if (score <= 12){
            result_comment = "12 or below <br> \
            ELEMENTARY → A1 TOEIC 120 pts <br> \
            Peut comprendre et utiliser des expressions quotidiennes ainsi que des énoncés très simples qui visent à satisfaire des besoins concrets. Peut se présenter ou présenter quelqu’un et poser à une personne des questions la concernant - par exemple, sur son lieu d’habitation, ses relations, ce qui lui appartient, etc. - et peut répondre au même type de questions. Peut communiquer de façon simple si l’interlocuteur parle lentement et distinctement et se montre coopératif."
        }
    
        else if (score <= 26){
            result_comment = "13-26 <br> \
            PRE-INTERMEDIATE → A2  TOEIC 225 pts <br> \
            Peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation avec des domaines immédiats de priorité (par exemple, informations personnelles et familiales simples, achats, environnement proche, travail). Peut communiquer lors de tâches simples et habituelles ne demandant qu’un échange d’informations simple et direct sur des sujets familiers et habituels. Peut décrire avec des moyens simples sa formation, son environnement immédiat et évoquer des sujets qui correspondent à des besoins immédiats."        
        }
    
        else if (score <= 40){
            result_comment = "27-40 <br> \
            INTERMEDIATE → B1 TOEIC 550 pts <br> \
            Peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans le travail, à l’école, dans les loisirs, etc. Peut se débrouiller dans la plupart des situations rencontrées en voyage dans une région où la langue cible est parlée. Peut produire un discours simple et cohérent sur des sujets familiers et dans ses domaines d’intérêt. Peut raconter un événement, une expérience ou un rêve, décrire un espoir ou un but et exposer brièvement des raisons ou explications pour un projet ou une idée."
        }
    
        else if (score <= 54) {
            result_comment = "41-54 <br> \
            UPPER-INTERMEDIATE → B2 TOEIC 785 pts <br> \
            Peut comprendre le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans sa spécialité. Peut communiquer avec un degré de spontanéité et d’aisance tel qu’une conversation avec un locuteur natif ne comportant pas de tension ni pour l’un ni pour l’autre. Peut s’exprimer de façon claire et détaillée sur une grande gamme de sujets, émettre un avis sur un sujet d’actualité et exposer les avantages et les inconvénients de différentes possibilités."
        }
    
        else if (score >= 55){
            result_comment = "Above 55 <br> \
            ADVANCED → C1 TOEIC 945 pts <br> \
            Peut  comprendre  une  grande  gamme  de  textes  longs  et  exigeants,  ainsi  que  saisir  des  significations  implicites.  Peut  s’exprimer spontanément et couramment sans trop apparemment devoir chercher ses mots. Peut utiliser la langue de façon efficace et souple dans sa vie sociale, professionnelle ou académique. Peut s’exprimer sur des sujets complexes de façon claire et bien structurée et manifester son contrôle des outils d’organisation, d’articulation et de cohésion du discours."
        }
    
        document.getElementById('score').innerHTML = "<div id='score_result'>"+score+"</div>"
        document.getElementById('comment').innerHTML = "<div id='result_result'>"+result_comment+"</div>"
        
    })
    .catch((error) => {
        document.getElementById('wrong_id').innerHTML = 'servor error try again'
        validate_button.removeAttribute('disabled')
      });    
}


function Test_end_button(){
    Test_end()
    clearTimeout(timer)

}
function Play(){
    audio.removeEventListener('click',Play)
    audio.setAttribute('disabled','')
    audio_question = new Audio('questions_68_69_70.mp3')
    audio_question.play()
}


function Play_video(){
    audio_ant.play();
    play=true
    document.removeEventListener('click',Play_video)
    document.getElementById('banniere').addEventListener('click',Pause_video)
}


function Pause_video(){
    audio_ant.pause();
    document.getElementById('banniere').removeEventListener('click',Pause_video)
    document.getElementById('banniere').addEventListener('click',Play_video)

}


validate_student_button = document.getElementById('validate_student')
validate_student_button.addEventListener('click', function(){
    validate_student_button.setAttribute('disabled','')
    student_name = document.getElementById('student_name').value
    student_id = document.getElementById('student_id').value
    test_name = 'placement_test'
    fetch('https://lady-catherine-test-center.herokuapp.com/authentication/', {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify({'name':student_name,'id':student_id,'test':test_name})
  })
  .then(function(res) {
    if (res.ok) {
    return res.json();
  }
})
  .then(function(value) {
      if (value['validation'] == 'correct'){
        console.log(value)
        console.log(document.getElementById('test_content'))
        document.getElementById('test_content').innerHTML = value['body']
        audio = document.getElementById('audio2')
        audio.addEventListener('click',Play)
        validate_button = document.getElementById("validate")
        validate_button.addEventListener('click',Test_end_button)
        timer = setTimeout(Test_end,3600000)
        
        for (i=1;i<71;i++){
            character='ABCD'
            for (j = 0; j < 4; j++){
                id='q'+i+character[j]
                if (document.getElementById(id)){
                    document.getElementById(id).addEventListener('click',function(){
                        this.parentElement.style.backgroundColor = '#cecece'
                    })
                }
                
                
            }
        }
        
        
        document.getElementById('banniere').addEventListener('click',Play_video)
        document.getElementById('banniere').addEventListener("mouseover",function(){
            document.getElementById("banniere").style.cursor = "pointer";
        })
        
        

      }else{
          document.getElementById('wrong_id').innerHTML = value['body']
          validate_student_button.removeAttribute('disabled')
      }
  })
  .catch((error) => {
    document.getElementById('wrong_id').innerHTML = 'servor error try again'
    validate_student_button.removeAttribute('disabled')
  });
})
let audio_ant = new Audio('anthem.mp3');
