// answer = [['1', 'A'], ['2', 'A'], ['3', 'C'], ['4', 'C'], ['5', 'A'], ['6', 'B'], ['7', 'C'], ['8', 'A'], ['9', 'B'], ['10', 'C'], ['11', 'C'], ['12', 'C'], ['13', 'B'], ['14', 'C'], ['15', 'A'], ['16', 'C'], ['17', 'C'], ['18', 'A'], ['19', 'A'], ['20', 'A'], ['21', 'B'], ['22', 'A'], ['23', 'B'], ['24', 'C'], ['25', 'C'], ['26', 'B'], ['27', 'A'], ['28', 'A'], ['29', 'C'], ['30', 'A'], ['31', 'C'], ['32', 'A'], ['33', 'C'], ['34', 'B'], ['35', 'A'], ['36', 'C'], ['37', 'C'], ['38', 'B'], ['39', 'B'], ['40', 'A'], ['41', 'A'], ['42', 'C'], ['43', 'A'], ['44', 'A'], ['45', 'B'], ['46', 'B'], ['47', 'A'], ['48', 'C'], ['49', 'C'], ['50', 'C'], ['51', 'B'], ['52', 'A'], ['53', 'C'], ['54', 'B'], ['55', 'A'], ['56', 'C'], ['57', 'B'], ['58', 'B'], ['59', 'A'], ['60', 'B'], ['61', 'C'], ['62', 'A'], ['63', 'B'], ['64', 'C'], ['65', 'A'], ['66', 'C'], ['67', 'C'], ['68', 'C'], ['69', 'B'], ['70', 'B']]
function Test_end(){
    score = 0
    for(i = 1; i<71 ; i++){
        ans = answer[i-1][1]/parseInt(answer[i-1][0])
        ans = type_answer[ans]
        id = 'q'+i+ans
        good_answer = document.getElementById(id)
        if (good_answer.checked == true){
            score +=1
        }

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

    document.getElementById('score').innerHTML = score
    document.getElementById('comment').innerHTML = result_comment
    validate_button.setAttribute('disabled')

}
answer = [['1', 1], ['2', 2], ['3', 9], ['4', 12], ['5', 5], ['6', 12], ['7', 21], ['8', 8], ['9', 18], ['10', 30], ['11', 33], ['12', 36], ['13', 26], ['14', 42], ['15', 15], ['16', 48], ['17', 51], ['18', 18], ['19', 19], ['20', 20], ['21', 42], ['22', 22], ['23', 46], ['24', 72], ['25', 75], ['26', 52], ['27', 27], ['28', 28], ['29', 87], ['30', 30], ['31', 93], ['32', 32], ['33', 99], ['34', 68], ['35', 35], ['36', 108], ['37', 111], ['38', 76], ['39', 78], ['40', 40], ['41', 41], ['42', 126], ['43', 43], ['44', 44], ['45', 90], ['46', 92], ['47', 47], ['48', 144], ['49', 147], ['50', 150], ['51', 102], ['52', 52], ['53', 159], ['54', 108], ['55', 55], ['56', 168], ['57', 114], ['58', 116], ['59', 59], ['60', 120], ['61', 183], ['62', 62], ['63', 126], ['64', 192], ['65', 65], ['66', 198], ['67', 201], ['68', 204], ['69', 138], ['70', 140]]

type_answer = ' ABCD'
audio = document.getElementById('audio2')
audio.addEventListener('click',function(){
    document.getElementById('audio').innerHTML="<audio controls id ='audio'><source src='questions_68_69_70.mp3'></audio>"
    setTimeout(function(){document.getElementById('audio').innerHTML='';audio.setAttribute('disabled','')},90000)
})
validate_button = document.getElementById("")
validate_button.addEventListener('click',Test_end())
setTimeout(Test_end(),3600000)
