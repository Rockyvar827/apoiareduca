// Variables globais
let timer;
let timeLeft = 25;
let currentCategory;
let originalCategory;
let mappedCategory;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
// Variable global para controlar si la pregunta actual fue respondida
let answeredCurrentQuestion = false;



// Datos do cuestionario
const quizData = {
    ccsstres: [
         {
            question: "Que pobo xermánico vivía no noroeste da Península antes da chegada dos visigodos?",
            answers: ["Os francos", "Os lombardos", "Os suevos", "Os ostrogodos"],
            correct: 2,
            explanation: "✅ Os suevos habitaban Gallaecia antes da chegada dos visigodos."
        },
        {
            question: "Cal era a capital dos visigodos?",
            answers: ["Barcelona", "Toledo", "Sevilla", "Mérida"],
            correct: 1,
            explanation: "✅ Toledo foi a capital do reino visigodo na Península Ibérica."
        },
        {
            question: "Que tipo de monarquía tiñan os visigodos?",
            answers: ["Monarquía hereditaria", "Monarquía electiva", "República", "Monarquía constitucional"],
            correct: 1,
            explanation: "✅ A monarquía visigoda era electiva, os nobres escolleían ao rei."
        },
        {
            question: "Que lingua adoptaron os visigodos?",
            answers: ["Gótico", "Latín", "Galego", "Castelán"],
            correct: 1,
            explanation: "✅ Os visigodos adoptaron o latín como lingua oficial."
        },
        {
            question: "Cal era a relixión dos visigodos?",
            answers: ["Islam", "Catolicismo", "Paganismo", "Arianismo"],
            correct: 3,
            explanation: "✅ Inicialmente os visigodos eran arianos, pero posteriormente adoptaron o catolicismo."
        },
        
        {
            question: "Que dereitos tiñan os servos?",
            answers: ["Dereito á propiedade", "Dereito ao voto", "Non tiñan ningún dereito", "Dereito á educación"],
            correct: 2,
            explanation: "✅ Os servos non tiñan dereitos e estaban sometidos aos seus señores."
        },
        
        {
            question: "Onde xorde o estilo gótico?",
            answers: ["En Italia", "En Francia", "En España", "En Alemaña"],
            correct: 1,
            explanation: "✅ O gótico xorde en Francia no século XII."
        },
        {
            question: "Cales son as características dos espazos na arquitectura gótica?",
            answers: ["Espazos reducidos e escuros", "Espazos moi luminosos", "Sen iluminación natural", "Con paredes macizas e pequenas aberturas"],
            correct: 1,
            explanation: "✅ A arquitectura gótica destaca por ter espazos moi luminosos."
        },
       
        {
            question: "Que tipo de arcos se usan na arquitectura gótica?",
            answers: ["Arcos semicirculares", "Arcos de medio punto", "Arcos apuntados", "Arcos rectangulares"],
            correct: 2,
            explanation: "✅ Os arcos apuntados eran unha característica esencial da arquitectura gótica."
        },
        {
        question: "Cal foi unha das principais causas da caída do Imperio Romano?",
        answers: ["A mellora da economía", "O aumento dos inimigos externos", "A expansión territorial", "O fortalecemento do exército"],
        correct: 1,
        explanation: "✅ A caída do Imperio Romano foi causada en parte polo aumento dos inimigos externos."
            },
            {
                question: "Que pobos ameazaban constantemente as fronteiras do Imperio?",
                answers: ["Os gregos e os fenicios", "Os romanos e os cartaxineses", "Os pobos xermanos e os persas", "Os celtas e os iberos"],
                correct: 2,
                explanation: "✅ Os pobos xermanos e os persas representaban unha ameaza constante para o Imperio Romano."
            },
            {
                question: "Que consecuencia tivo a loita continua contra os pobos bárbaros?",
                answers: ["Fortalecemento da economía", "Unificación política", "Debilitación do Imperio Romano", "Expansión do territorio"],
                correct: 2,
                explanation: "✅ A loita continua contra os pobos bárbaros debilitou o Imperio Romano."
            },
            {
                question: "Por que había inestabilidade política no Imperio Romano?",
                answers: ["A relixión era dominante", "Os militares asumían demasiado poder", "Os cidadáns tiñan moita influencia", "O comercio era demasiado forte"],
                correct: 1,
                explanation: "✅ A inestabilidade política no Imperio Romano foi causada polo excesivo poder dos militares."
            },
            {
                question: "Que provocou o descontento nas provincias afastadas de Roma?",
                answers: ["A estabilidade política", "O desexo de obter todos os poderes romanos", "A abundancia de recursos", "O crecemento económico"],
                correct: 1,
                explanation: "✅ O descontento nas provincias afastadas de Roma xurdiu polo desexo de obter todos os poderes romanos."
            },
            {
                question: "Que diferenza económica houbo entre Oriente e Occidente?",
                answers: ["Oriente era máis pobre", "Occidente tiña máis recursos", "Ambos tiñan a mesma economía", "O Imperio Romano de Oriente volveuse máis rico"],
                correct: 3,
                explanation: "✅ O Imperio Romano de Oriente volveuse máis rico en comparación con Occidente."
            },
            {
                question: "Por que aumentaron os impostos na sociedade romana?",
                answers: ["Para mellorar a educación", "Para construír novos templos", "Para costear as constantes guerras", "Para reducir a pobreza"],
                correct: 2,
                explanation: "✅ Os impostos aumentaron para costear as constantes guerras do Imperio Romano."
            },
            {
                question: "Que efecto tivo o aumento dos impostos na poboación?",
                answers: ["Aumentou a estabilidade", "Mellorou a economía", "Provocou un conflito social", "Fortaleceu o goberno"],
                correct: 2,
                explanation: "✅ O aumento dos impostos provocou un conflito social na sociedade romana."
            },
            
            
            {
                question: "Que provocaron as migracións cara ás cidades?",
                answers: ["Unha mellora na calidade de vida", "Máis presión, fame e desigualdade", "Unha expansión territorial", "Unha redución da pobreza"],
                correct: 1,
                explanation: "✅ As migracións cara ás cidades provocaron máis presión, fame e desigualdade."
            },
            {
                question: "Que consecuencia tivo a división do Imperio Romano?",
                answers: ["Debilitación da súa forza e caída de Occidente", "Unificación política", "Expansión territorial", "Fortalecemento económico"],
                correct: 0,
                explanation: "✅ A división do Imperio Romano debilitou a súa forza e levou á caída de Occidente."
            },
            {
                question: "Quen dirixiu os visigodos na conquista de Gallaecia?",
                answers: ["Recaredo", "Leovixildo", "Ataúlfo", "Teodorico"],
                correct: 1,
                explanation: "✅ Leovixildo foi o rei visigodo que conquistou Gallaecia no ano 585."
            },
            {
                question: "En que grupos estaba dividida a sociedade visigoda?",
                answers: ["Campesiños e comerciantes", "Nobres e plebeos", "Homes libres e servos", "Sacerdotes e guerreiros"],
                correct: 2,
                explanation: "✅ A sociedade visigoda estaba dividida en homes libres e servos."
            },
            {
                question: "En que ano invadiron os musulmáns a península Ibérica?",
                answers: ["No ano 800", "No ano 650", "No ano 711", "No ano 900"],
                correct: 2,
                explanation: "✅ Os musulmáns invadiron a península Ibérica no ano 711."
            },
            {
                question: "Que aproveitaron os reinos cristiáns para avanzar na reconquista da Península?",
                answers: ["Aproveitaron as disputas entre os reinos de Taifas", "A debilidade dos almorábides", "A fragmentación dos visigodos", "A chegada dos francos"],
                correct: 0,
                explanation: "✅ Os reinos cristiáns aproveitaron as disputas entre os reinos de Taifas para avanzar na reconquista."
            },
            {
                question: "Quen axudou aos reinos taifas no ano 1090?",
                answers: ["Os reis cristiáns", "Os almorábides do norte de África", "Os visigodos", "Os francos"],
                correct: 1,
                explanation: "✅ Os almorábides do norte de África acudiron en axuda dos reinos taifas no ano 1090."
            },
            {
                question: "Que sucedeu entre os taifas e os almorábides?",
                answers: ["Os taifas derrotaron aos almorábides", "Comezaron disputas e os almorábides acabaron marchando da península de novo para África", "Os almorábides estableceron un califato en Córdoba", "Os almorábides conquistaron toda a península"],
                correct: 1,
                explanation: "✅ As disputas entre os taifas e os almorábides levaron á retirada destes últimos cara a África."
            },
            {
                question: "Que período comezará no século XII?",
                answers: ["A chegada dos francos", "O período dos segundos reinos de taifas", "A expansión dos almorábides", "A caída do califato de Córdoba"],
                correct: 1,
                explanation: "✅ No século XII comezou o período dos segundos reinos de taifas."
            },
            {
                question: "Que batalla importante ocorreu no século XIII?",
                answers: ["A batalla de Guadalete", "A batalla de Poitiers", "A batalla das Navas de Tolosa", "A batalla de Covadonga"],
                correct: 2,
                explanation: "✅ A batalla das Navas de Tolosa foi un evento clave no século XIII."
            },
            {
                question: "Que reino se inicia tras a batalla das Navas de Tolosa?",
                answers: ["O califato de Córdoba", "O reino nazarí de Granada", "O emirato de Sevilla", "O reino de Toledo"],
                correct: 1,
                explanation: "✅ Tras a batalla das Navas de Tolosa iniciouse o reino nazarí de Granada."
            },
            {
                question: "Que sucedeu o 2 de xaneiro de 1492?",
                answers: ["Os francos invadiron Al-Ándalus", "Os cristiáns rematarán de reconquistar a Península coa conquista de Granada", "Os almorábides regresaron á península", "Os musulmáns expandíronse cara ao norte"],
                correct: 1,
                explanation: "✅ O 2 de xaneiro de 1492, os cristiáns completaron a reconquista coa toma de Granada."
            },
            {
                question: "Onde é evidente o legado musulmán na Península?",
                answers: ["No norte da Península", "En Cataluña", "En Galicia", "Especialmente en Andalucía"],
                correct: 3,
                explanation: "✅ O legado musulmán é especialmente evidente en Andalucía."
            },
            {
                question: "Nomea algunhas das construcións destacadas en Andalucía.",
                answers: ["A Alhambra, a mesquita de Córdoba, a Xiralda e o Alcázar de Sevilla", "O castelo de Santiago, a catedral de Burgos, o mosteiro de San Juan", "O palacio de Versalles, a catedral de Notre Dame, o Big Ben", "A torre Eiffel, o Coliseo, a Acrópole"],
                correct: 0,
                explanation: "✅ Algunhas das construcións destacadas en Andalucía son a Alhambra, a mesquita de Córdoba, a Xiralda e o Alcázar de Sevilla."
            },
            {
                question: "Que orientación presentaban as mesquitas?",
                answers: ["Presentaban unha orientación cara a Meca", "Non tiñan unha orientación específica", "Estaban aliñadas cos reinos cristiáns", "Estaban orientadas cara ao norte"],
                correct: 0,
                explanation: "✅ As mesquitas estaban orientadas cara a Meca."
            },
        {
                question: "Que elementos básicos recolle a arte musulmá?",
                answers: ["A escultura en mármore, os frescos, os arcos semicirculares", "A caligrafía, os motivos vexetais, os xeométricos, os figurativos e a simetría", "A pintura ao óleo, os mosaicos romanos, as vidreiras góticas", "Os relevos en pedra, os capiteis corintios, os frisos clásicos"],
                correct: 1,
                explanation: "✅ A arte musulmá recolle elementos como a caligrafía, os motivos vexetais, os xeométricos, os figurativos e a simetría."
            },
            {
                question: "Que batalla ocorreu no ano 722?",
                answers: ["A batalla de Guadalete", "A batalla das Navas de Tolosa", "A batalla de Covadonga", "A batalla de Poitiers"],
                correct: 2,
                explanation: "✅ A batalla de Covadonga ocorreu no ano 722 e marcou o inicio da Reconquista."
            },
            {
                question: "Quen se enfrontou aos musulmáns na batalla de Covadonga?",
                answers: ["Fernando III", "Don Pelayo", "Alfonso VI", "Rodrigo Díaz de Vivar"],
                correct: 1,
                explanation: "✅ Don Pelayo liderou a resistencia cristiá contra os musulmáns na batalla de Covadonga."
            },
            {
                question: "Que parte da Península non será conquistada polos árabes?",
                answers: ["O sur da Península", "A zona central", "O norte da Península", "As illas Baleares"],
                correct: 2,
                explanation: "✅ O norte da Península permaneceu fóra do control musulmán tras a invasión."
            },
            {
                question: "Que se creará a partir da batalla de Covadonga?",
                answers: ["Unha alianza entre cristiáns e musulmáns", "Diferentes reinos cristiáns cun único propósito de expulsar aos musulmáns", "Unha república independente", "Un novo califato musulmán"],
                correct: 1,
                explanation: "✅ A batalla de Covadonga deu lugar á formación de reinos cristiáns dedicados á expulsión dos musulmáns."
            },
            {
            question: "Que grupos ou estamentos formaban a sociedade dos reinos cristiáns na Idade Media?",
            answers: ["Os comerciantes, os guerreiros e os sacerdotes", "Os reis, os mercadores e os servos", "Os artistas, os campesiños e os nobres", "A nobreza e o clero, os campesiños e campesiñas, e os artesáns e artesás"],
            correct: 3,
            explanation: "✅ A sociedade medieval estaba dividida en tres grandes estamentos: a nobreza e o clero, os campesiños e campesiñas, e os artesáns e artesás."
        },
        {
            question: "Que privilexios tiña a nobreza e o clero?",
            answers: ["Non tiñan privilexios", "Eran iguais aos campesiños", "Traballaban no campo", "Tiñan multitude de privilexios"],
            correct: 3,
            explanation: "✅ A nobreza e o clero gozaban de numerosos privilexios na sociedade medieval."
        },
        {
            question: "Que dereitos e liberdades tiñan os campesiños e campesiñas, e os artesáns e artesás?",
            answers: ["Tiñan moitos dereitos", "Podían elixir o seu señor feudal", "Tiñan moi poucos dereitos e liberdades", "Eran propietarios das terras"],
            correct: 2,
            explanation: "✅ Os campesiños e artesáns tiñan moi poucos dereitos e liberdades na Idade Media."
        },
        {
            question: "Como se caracterizaba a sociedade estamental?",
            answers: ["Permitia a mobilidade social", "Era igualitaria", "Todos os grupos tiñan os mesmos dereitos", "Caracterizábase polo inmobilismo, é dicir, non se podía pasar dun estamento a outro"],
            correct: 3,
            explanation: "✅ A sociedade estamental medieval caracterizábase polo inmobilismo: non se podía pasar dun estamento a outro."
        },
        {
            question: "Que nome recibía o territorio de Galicia na época dos romanos?",
            answers: ["Hispania", "Gallaecia", "Lusitania", "Tarraconense"],
            correct: 1,
            explanation: "✅ O territorio de Galicia na época dos romanos recibía o nome de Gallaecia."
        },

        {
            question: "Que dinastías se distinguen na historia do Reino de Galicia?",
            answers: ["Dinastía dos Habsburgo, Dinastía dos Borbóns, Dinastía dos Trastámara", "Dinastía dos Carolinxios, Dinastía dos Tudor, Dinastía dos Capetos", "Dinastía dos Otomanos, Dinastía dos Plantagenet, Dinastía dos Stuart", "Dinastía astur-leonesa (910 - 1065), Dinastía de Navarra (1065 - 1072), Dinastía de Borgoña (1096 - 1126)"],
            correct: 3,
            explanation: "✅ As dinastías que se distinguen na historia do Reino de Galicia son a astur-leonesa, a de Navarra e a de Borgoña."
        },
        {
            question: "Quen foi o primeiro rei de Galicia?",
            answers: ["Alfonso VI", "Ramiro II", "García I", "Fernando I"],
            correct: 2,
            explanation: "✅ García I foi o primeiro rei de Galicia."
        },
        {
            question: "Quen será o último rei da Dinastía de Borgoña?",
            answers: ["Sancho IV", "Henrique II", "Pedro I", "Alfonso Raimúndez"],
            correct: 3,
            explanation: "✅ Alfonso Raimúndez foi o último rei da Dinastía de Borgoña."
        },
        {
            question: "Que sucede no ano 1230 baixo o reinado de Fernando III?",
            answers: ["Os musulmáns reconquistan Toledo", "A dinastía dos Habsburgo chega ao poder", "Comeza a guerra dos cem anos", "Prodúcese a unificación dos reinos do norte (Galicia, León e Castela)"],
            correct: 3,
            explanation: "✅ No ano 1230, baixo o reinado de Fernando III, prodúcese a unificación dos reinos do norte: Galicia, León e Castela."
        },
        {
            question: "Quen se converten nos poboadores da zona peninsular tras a decadencia do Imperio romano?",
            answers: ["Os visigodos", "Os suevos", "Os francos", "Os celtas"],
            correct: 1,
            explanation: "✅ Tras a decadencia do Imperio romano, os suevos convertéronse nos poboadores da zona peninsular."
        },
        {
            question: "Quen foi o primeiro rei de Galicia?",
            answers: ["Alfonso VI", "Ramiro II", "García I", "Fernando I"],
            correct: 2,
            explanation: "✅ García I foi o primeiro rei de Galicia."
        },
        {
            question: "En que ano casan Isabel de Castela e Fernando de Aragón?",
            answers: ["1492", "1474", "1486", "1469"],
            correct: 3,
            explanation: "✅ Isabel de Castela e Fernando de Aragón casan no ano 1469, un paso clave para a unificación da Monarquía Hispánica."
        },

        {
            question: "Que papel xogou Cristovo Colón durante o reinado dos Reis Católicos?",
            answers: ["Dirixiu a Inquisición", "Fundou o Reino de Granada", "Descubriu América en 1492", "Casou con Isabel a Católica"],
            correct: 2,
            explanation: "✅ Cristovo Colón, ao servizo dos Reis Católicos, descubriu América no ano 1492."
        },
        {
            question: "Cales foron os feitos máis importantes do reinado dos Reis Católicos?",
            answers: ["A conquista de Galicia e Portugal", "A independencia de Navarra e Aragón", "A expulsión dos visigodos e a chegada dos suevos", "A conquista do Reino de Granada, a unificación relixiosa e o inicio da expansión atlántica"],
            correct: 3,
            explanation: "✅ Durante o seu reinado tivo lugar a conquista do Reino de Granada, a unificación relixiosa e o inicio da expansión atlántica con Cristovo Colón."
        },

        {
            question: "Como se chamaba a nova estrutura política que substitúe aos reinos medievais?",
            answers: ["A República", "O Antigo Réxime", "O Imperio Visigodo", "O Estado moderno"],
            correct: 3,
            explanation: "✅ O Estado moderno comeza a configurarse substituíndo os reinos medievais, coa monarquía centralizada e novas institucións."
        },
        {
            question: "Cando remata o Reino de Galicia como entidade política?",
            answers: ["1230", "1469", "1833", "1492"],
            correct: 2,
            explanation: "✅ O Reino de Galicia deixa de existir como entidade política en 1833, cando se establecen as provincias actuais durante a reforma territorial de Javier de Burgos."
        },
        {
            question: "Que acontecemento marca o comezo da Idade Moderna?",
            answers: ["A chegada dos suevos á Península", "A morte de Fernando III", "A proclamación da República", "O descubrimento de América en 1492"],
            correct: 3,
            explanation: "✅ O descubrimento de América en 1492 é considerado o inicio da Idade Moderna."
        },
        {
            question: "Quen eran os Austrias?",
            answers: ["Unha dinastía francesa", "Un grupo de exploradores", "Un título nobiliario galego", "Unha dinastía de reis que gobernaron España desde 1516"],
            correct: 3,
            explanation: "✅ Os Austrias foron unha dinastía que gobernou España desde 1516, comezando con Carlos I."
        },
        {
            question: "Como se chamaba o emperador que herdou o Imperio Español e o Alemán?",
            answers: ["Felipe II", "Carlos I de España e V de Alemaña", "Fernando o Católico", "Maximiliano de Habsburgo"],
            correct: 1,
            explanation: "✅ Carlos I de España e V de Alemaña herdou ambos imperios, sendo unha das figuras máis influentes do século XVI."
        },
        {
            question: "Que tipo de monarquía existía durante o reinado dos Austrias?",
            answers: ["Monarquía liberal", "Monarquía parlamentaria", "Monarquía absoluta", "República parlamentaria"],
            correct: 2,
            explanation: "✅ A monarquía dos Austrias era de tipo absoluta, onde o rei concentraba todos os poderes."
        },
        {
            question: "Que territorios gobernaban os Austrias no século XVI?",
            answers: ["Só a Península Ibérica", "Só Alemaña e Austria", "As provincias de Flandes", "Un amplo imperio que incluía territorios en Europa, América e Asia"],
            correct: 3,
            explanation: "✅ Os Austrias gobernaban un vasto imperio que incluía territorios en Europa, América e mesmo Asia, especialmente baixo Carlos I e Felipe II."
        },
        {
            question: "Que caracteriza o século XVII en España?",
            answers: ["Un período de expansión e esplendor", "O comezo do feudalismo", "A independencia das colonias americanas", "A crise e a decadencia dos Austrias"],
            correct: 3,
            explanation: "✅ No século XVII España viviu unha crise económica, social e política que marcou o comezo da decadencia da Monarquía Hispánica e dos Austrias."
        },
        {
            question: "Quen foi o último rei da dinastía dos Austrias?",
            answers: ["Felipe III", "Carlos I", "Felipe IV", "Carlos II"],
            correct: 3,
            explanation: "✅ Carlos II foi o último rei da dinastía dos Austrias en España, e a súa morte sen descendencia provocou a Guerra de Sucesión."
        },
        {
            question: "Que foi a Guerra de Sucesión Española?",
            answers: ["Unha guerra civil entre casteláns e galegos", "Unha loita pola independencia de Portugal", "Un conflito internacional polo trono de España tras a morte de Carlos II", "Un enfrontamento entre os Reis Católicos e os musulmáns"],
            correct: 2,
            explanation: "✅ Foi un conflito internacional (1701-1714) no que varias potencias europeas se enfrontaron para ocupar o trono español trala morte sen herdeiros de Carlos II."
        },
        {
            question: "Quen gañou a Guerra de Sucesión Española?",
            answers: ["A dinastía dos Austrias", "A dinastía Tudor", "A dinastía dos Borbóns", "Os visigodos"],
            correct: 2,
            explanation: "✅ A dinastía dos Borbóns, representada por Felipe de Anjou (Felipe V), saíu vencedora da Guerra de Sucesión e ocupou o trono de España."
        },
        {
            question: "Que cambios provocou a chegada dos Borbóns a España?",
            answers: ["Un reforzo da autonomía rexional", "A independencia de Galicia", "A desintegración do Imperio Español", "Unha maior centralización do poder e reformas do Estado"],
            correct: 3,
            explanation: "✅ Os Borbóns introducen reformas para centralizar o poder, eliminar privilexios de antigos reinos e fortalecer o Estado moderno."
        },
        {
            question: "Que eran os Decretos de Nova Planta?",
            answers: ["Unhas leis agrarias galegas", "Normas de navegación atlántica", "Unha nova moeda imperial", "Leis que suprimiron as institucións propias de Aragón e Valencia"],
            correct: 3,
            explanation: "✅ Os Decretos de Nova Planta foron unha serie de leis promulgadas por Felipe V que suprimiron as institucións dos antigos reinos da Coroa de Aragón, implantando o modelo castelán."
        },
        {
            question: "Como afectaron os Decretos de Nova Planta a Galicia?",
            answers: ["Suprimiron o Reino de Galicia", "Non tiveron efectos, pois Galicia xa estaba integrada en Castela", "Deron independencia política a Galicia", "Crearon un novo Parlamento galego"],
            correct: 1,
            explanation: "✅ Galicia xa estaba integrada na Coroa de Castela, polo que os decretos afectaron principalmente aos territorios da antiga Coroa de Aragón."
        },
        {
            question: "Que monarca inicia a dinastía dos Borbóns en España?",
            answers: ["Carlos III", "Felipe II", "Felipe V", "Luis XIV"],
            correct: 2,
            explanation: "✅ Felipe V, neto de Luis XIV de Francia, foi o primeiro rei Borbón en España trala Guerra de Sucesión."
        },
        {
            question: "Que foi o absolutismo borbónico?",
            answers: ["Un movemento cultural galego", "Un sistema onde o rei tiña poder absoluto e centralizado", "Un tratado internacional", "Unha forma de goberno parlamentaria"],
            correct: 1,
            explanation: "✅ O absolutismo borbónico foi un sistema político no que o rei concentraba todo o poder do Estado sen limitacións parlamentarias nin rexionais."
        },
        {
            question: "Que papel xogaron os ministros ilustrados durante o século XVIII en España?",
            answers: ["Fomentaron o atraso tecnolóxico", "Promoveron guerras civís", "Fomentaron reformas para modernizar o país", "Suprimiron a educación"],
            correct: 2,
            explanation: "✅ Os ministros ilustrados impulsaron reformas para modernizar a administración, a economía e a educación no marco do Despotismo Ilustrado."
        },
        {
            question: "Que foi a Guerra da Independencia Española?",
            answers: ["Unha revolta contra os reis católicos", "Unha guerra civil entre Galicia e Castela", "Un conflito contra a invasión napoleónica", "A guerra pola independencia de América"],
            correct: 2,
            explanation: "✅ A Guerra da Independencia (1808-1814) foi un conflito contra a ocupación francesa liderada por Napoleón, trala invasión de España."
        },
        {
            question: "Que provocou a invasión de Napoleón a España en 1808?",
            answers: ["O desexo de Francia de liberar España", "Un acordo con Portugal", "Unha loita pola herdanza do trono galego", "A crise dinástica entre Carlos IV e Fernando VII"],
            correct: 3,
            explanation: "✅ A crise dinástica en España foi aproveitada por Napoleón para colocar no trono ao seu irmán, Xosé Bonaparte, iniciando a invasión."
        },
        {
            question: "Como respondeu o pobo español á ocupación francesa?",
            answers: ["Con colaboración absoluta", "Fuxindo cara América", "Organizando resistencia e guerrillas", "Impoñendo a democracia directa"],
            correct: 2,
            explanation: "✅ O pobo español organizou guerrillas e resistencia armada contra os franceses, xunto co exército regular e o apoio británico."
        },
        {
            question: "Que foi a Constitución de Cádiz de 1812?",
            answers: ["Un documento relixioso", "Un código civil para Francia", "Unha carta outorgada por Fernando VII", "A primeira constitución liberal de España"],
            correct: 3,
            explanation: "✅ Foi a primeira constitución liberal da historia de España, aprobada polas Cortes de Cádiz en 1812 durante a guerra contra os franceses."
        },
        {
            question: "Que dereitos establecía a Constitución de 1812?",
            answers: ["Dereito divino dos reis", "Dereito á escravitude", "Soberanía nacional e separación de poderes", "Unha monarquía absoluta"],
            correct: 2,
            explanation: "✅ A Constitución de Cádiz recoñecía a soberanía nacional, establecía a división de poderes e recoñecía dereitos individuais."
        },
        {
            question: "Que pasou trala volta de Fernando VII en 1814?",
            answers: ["Aceptou a Constitución de Cádiz", "Renunciou ao trono", "Impuxo unha monarquía constitucional", "Restaurou o absolutismo"],
            correct: 3,
            explanation: "✅ Fernando VII anulou a Constitución de Cádiz e restaurou o absolutismo, coñecido como o Sexenio Absolutista (1814-1820)."
        },
        {
            question: "Que foron as guerras de independencia en América?",
            answers: ["Loitas entre países europeos", "Guerras entre galegos e portugueses", "Revoltas das colonias americanas contra España", "Unha expansión do Imperio Español"],
            correct: 2,
            explanation: "✅ As colonias hispanoamericanas loitaron pola súa independencia aproveitando a crise da metrópole durante a invasión napoleónica."
        },
        {
            question: "Quen foron Simón Bolívar e San Martín?",
            answers: ["Reis españois", "Compositores de ópera", "Líderes relixiosos galegos", "Líderes da independencia de América Latina"],
            correct: 3,
            explanation: "✅ Bolívar e San Martín foron figuras fundamentais nas loitas pola independencia de países como Venezuela, Colombia, Perú e Arxentina."
        },
        {
            question: "Como afectou a independencia americana a España?",
            answers: ["Mellorou a súa economía", "Aumentou o seu poder militar", "Perdeu a maior parte do seu imperio colonial", "Impuxo o absolutismo en América"],
            correct: 2,
            explanation: "✅ A independencia das colonias americanas supuxo a perda da maior parte do Imperio Español no continente americano."
        },
        {
            question: "Que foi o Trienio Liberal (1820-1823)?",
            answers: ["Un período de ditadura", "Tres anos sen goberno", "Unha época de estabilidade absolutista", "Un período de goberno liberal reinstaurando a Constitución de 1812"],
            correct: 3,
            explanation: "✅ Foi un período no que, tras un levantamento militar, se restaurou a Constitución de Cádiz e se implantou un goberno liberal ata a intervención dos Cien Mil Fillos de San Luís."
        },
        {
    question: "Que foron as Guerras Carlistas?",
    answers: ["Guerras entre España e Francia", "Loitas entre liberais e absolutistas polo trono español", "Revoltas agrarias en Galicia", "Conflitos entre Portugal e España"],
    correct: 1,
    explanation: "✅ As Guerras Carlistas (1833-1876) foron conflitos entre os partidarios do absolutismo (carlistas) e os defensores do liberalismo e Isabel II."
},
{
    question: "Quen eran os carlistas?",
    answers: ["Seguidores de Napoleón", "Partidarios do rei Carlos María Isidro e do absolutismo", "Revolucionarios liberais", "Políticos americanos exiliados"],
    correct: 1,
    explanation: "✅ Os carlistas eran partidarios de Carlos María Isidro, irmán de Fernando VII, e defendían a monarquía absoluta e os valores tradicionais."
},
{
    question: "Que consecuencias tiveron as Guerras Carlistas?",
    answers: ["A creación da ONU", "A abolición da monarquía", "O fortalecemento do liberalismo en España", "A independencia de Cataluña"],
    correct: 2,
    explanation: "✅ As guerras carlistas debilitaron o absolutismo e contribuíron ao fortalecemento do sistema liberal en España."
},
{
    question: "Quen foi Isabel II?",
    answers: ["Emperatriz francesa", "Presidenta da República", "Raíña de España durante parte do século XIX", "Reina de Inglaterra"],
    correct: 2,
    explanation: "✅ Isabel II foi raíña de España desde 1833 ata 1868, cando foi destronada pola Revolución Gloriosa."
},
{
    question: "Que foi a Desamortización?",
    answers: ["A creación de mosteiros", "A perda das colonias americanas", "A venda das terras da Igrexa e dos nobres para financiar o Estado", "Un imposto sobre as terras reais"],
    correct: 2,
    explanation: "✅ A Desamortización consistiu na expropiación e venda de bens da Igrexa e da nobreza para reducir a débeda pública e crear unha clase media agraria."
},
{
    question: "Quen foi Mendizábal?",
    answers: ["Un rei carlista", "Un líder da independencia americana", "O impulsor da desamortización e político liberal", "Un relixioso contra a monarquía"],
    correct: 2,
    explanation: "✅ Juan Álvarez Mendizábal foi un político liberal que promoveu a desamortización de bens da Igrexa durante o reinado de Isabel II."
},
{
    question: "Que foi a Revolución Gloriosa de 1868?",
    answers: ["Unha revolución industrial", "Un levantamento que expulsou a Isabel II do trono", "Un movemento artístico", "Unha guerra contra Francia"],
    correct: 1,
    explanation: "✅ A Revolución Gloriosa foi un levantamento que provocou o destronamento de Isabel II e iniciou un período de inestabilidade política."
},
{
    question: "Que réxime político se instaurou tras a Revolución Gloriosa?",
    answers: ["A monarquía absoluta", "A ditadura militar", "Unha monarquía constitucional liderada por Amadeo de Savoia", "Un imperio relixioso"],
    correct: 2,
    explanation: "✅ Tras a caída de Isabel II, instaurouse unha monarquía constitucional baixo Amadeo de Savoia (1871-1873)."
},
{
    question: "Que foi a I República Española?",
    answers: ["Un imperio colonial", "Unha ditadura carlista", "Un período de goberno sen rei entre 1873 e 1874", "Un movemento cultural galego"],
    correct: 2,
    explanation: "✅ A I República Española foi un breve período republicano, sen monarquía, con gran inestabilidade política e social."
},
{
    question: "Que pasou en 1874 en España?",
    answers: ["Comezou a II República", "Fin das Guerras Carlistas", "Restaurouse a monarquía borbónica con Alfonso XII", "Declarouse a independencia de Galicia"],
    correct: 2,
    explanation: "✅ En 1874 rematou a I República e comezou a Restauración Borbónica con Alfonso XII como rei."
}
    ],
    clima: [
        {
            question: "En que zona está situada España segundo o texto?",
            answers: ["Zona polar", "Zona tropical", "Zona temperada", "Zona ecuatorial"],
            correct: 2,
            explanation: "✅ España está situada na zona temperada."
        },
        {
            question: "Cantos tipos de clima hai en España e cales son?",
            answers: ["Tres: oceánico, mediterráneo e de montaña", "Cinco: oceánico, continental, mediterráneo, seco e de montaña", "Seis: oceánico, continental, mediterráneo, semidesértico ou seco, de montaña e subtropical", "Catro: oceánico, mediterráneo, tropical e seco"],
            correct: 2,
            explanation: "✅ En España hai seis tipos de clima: oceánico, continental, mediterráneo, semidesértico ou seco, de montaña e subtropical."
        },
        {
            question: "Como son as temperaturas no clima oceánico?",
            answers: ["Extremas todo o ano", "Moi frías no inverno", "Suaves, con veráns frescos e invernos temperados", "Calurosas no verán e suaves no inverno"],
            correct: 2,
            explanation: "✅ As temperaturas no clima oceánico son suaves, con veráns frescos e invernos temperados."
        },
        {
            question: "Como son as precipitacións no clima mediterráneo?",
            answers: ["Abundantes todo o ano", "Constantes e moderadas", "Escasas", "So chove no inverno"],
            correct: 2,
            explanation: "✅ As precipitacións no clima mediterráneo son escasas."
        },
        {
            question: "Que zonas corresponden ao clima continental?",
            answers: ["Costa norte", "Litoral mediterráneo", "Illas Baleares", "Interior da Península"],
            correct: 3,
            explanation: "✅ O clima continental atópase no interior da Península."
        },
        {
            question: "Que tipo de vexetación se atopa no clima de alta montaña?",
            answers: ["Cereais e videiras", "Palmeiras e matogueiras", "Varia segundo a altitude: aciñeiras, carballos, piñeiros, abetos, prados e arbustos", "Só prados"],
            correct: 2,
            explanation: "✅ No clima de alta montaña a vexetación varía coa altitude: aciñeiras e carballos nas zonas baixas, piñeiros e abetos nas zonas medias, prados e arbustos nas zonas altas."
        },
        {
            question: "Que tipo de clima ten a zona das Illas Canarias?",
            answers: ["Mediterráneo", "Oceánico", "Subtropical", "Continental"],
            correct: 2,
            explanation: "✅ A zona das Illas Canarias ten un clima subtropical."
        },
        {
            question: "Que tipo de vexetación é exclusiva das Illas Canarias?",
            answers: ["Carballos e piñeiros europeos", "Endémica: palmeira, piñeiro canario", "Aciñeiras e oliveiras", "Matogueiras baixas"],
            correct: 1,
            explanation: "✅ A vexetación exclusiva das Illas Canarias é endémica, como a palmeira e o piñeiro canario."
        },
        {
            question: "Que tipo de clima predomina nas zonas desérticas de España?",
            answers: ["Clima oceánico", "Clima de montaña", "Clima semidesértico ou seco", "Clima subtropical"],
            correct: 2,
            explanation: "✅ Nas zonas desérticas de España predomina o clima semidesértico ou seco, con temperaturas elevadas e precipitacións escasas."
        },
        {
            question: "Como afecta o relevo ao clima de España?",
            answers: ["Non afecta ao clima", "Inflúe só nas precipitacións", "Determina a duración do día", "Inflúe na distribución das precipitacións e temperaturas, creando microclimas"],
            correct: 3,
            explanation: "✅ O relevo inflúe na distribución das precipitacións e temperaturas, creando microclimas nas distintas zonas."
        },
        {
            question: "Que vexetación é característica do clima mediterráneo?",
            answers: ["Cactos e pradeiras", "Piñeiros do norte", "Aciñeiras, alcornoques, piñeiros, oliveiras e matogueiras", "Abetos e fentos"],
            correct: 2,
            explanation: "✅ A vexetación do clima mediterráneo inclúe aciñeiras, alcornoques, piñeiros, oliveiras e matogueiras."
        },
        {
            question: "Que diferenza hai entre o clima oceánico e o clima mediterráneo?",
            answers: ["O oceánico é máis cálido", "O mediterráneo é máis húmido", "O oceánico ten temperaturas suaves e precipitacións abundantes, mentres o mediterráneo presenta temperaturas máis extremas e precipitacións escasas e irregulares", "Non hai diferenza"],
            correct: 2,
            explanation: "✅ O clima oceánico ten temperaturas suaves e precipitacións abundantes todo o ano, mentres que o mediterráneo ten temperaturas máis extremas e precipitacións escasas e irregulares."
        },
        {
            question: "Como se manifesta a influencia do clima subtropical nas Illas Canarias?",
            answers: ["Con invernos moi fríos", "Con choivas intensas no verán", "Con temperaturas suaves todo o ano, escasas precipitacións e vexetación endémica adaptada á aridez", "Con moita neve nas zonas baixas"],
            correct: 2,
            explanation: "✅ Nas Illas Canarias, o clima subtropical maniféstase con temperaturas suaves todo o ano, escasas precipitacións e vexetación endémica adaptada á aridez."
        },
        {
            question: "Que factores climáticos favorecen a diversidade biolóxica en España?",
            answers: ["Só as precipitacións", "A variedade de climas e o relevo diverso", "A falta de montañas", "O mar Mediterráneo"],
            correct: 1,
            explanation: "✅ A variedade de climas e o relevo diverso favorecen a diversidade biolóxica en España."
        },
        {
            question: "Cal é a principal causa das variacións de temperatura no clima continental?",
            answers: ["A proximidade ao mar", "A altitude", "A influencia oceánica", "A falta de influencia do mar, provocando veráns cálidos e invernos fríos"],
            correct: 3,
            explanation: "✅ A principal causa das variacións de temperatura no clima continental é a falta de influencia do mar."
        },
        {
              question: "Que factores inflúen na paisaxe?",
              answers: ["Só o relevo", "O relevo, a flora, a fauna, o clima e a acción humana", "A actividade económica", "O nivel do mar"],
              correct: 1,
              explanation: "✅ Os factores que inflúen na paisaxe son o relevo, a flora, a fauna, o clima e a acción humana."
          },
          {
              question: "Que é unha paisaxe natural?",
              answers: ["Unha cidade antiga", "Un espazo forestal humanizado", "É un espazo xeográfico no que o ser humano non interveu", "Unha zona costeira con industria"],
              correct: 2,
              explanation: "✅ Unha paisaxe natural é un espazo xeográfico no que o ser humano non interveu."
          },
          {
              question: "Que é unha paisaxe humanizada?",
              answers: ["Unha paisaxe virxe", "Unha zona desértica", "Unha paisaxe natural transformada polos homes", "Unha rexión montañosa"],
              correct: 2,
              explanation: "✅ Unha paisaxe humanizada é unha paisaxe natural transformada polos homes."
          },
          {
              question: "Que tipos de paisaxe existen en función da proximidade ao mar?",
              answers: ["Paisaxes rurais e urbanas", "Paisaxes naturais e artificiais", "Paisaxes de interior e paisaxes de costa", "Paisaxes industriais e agrícolas"],
              correct: 2,
              explanation: "✅ En función da proximidade ao mar, existen paisaxes de interior e paisaxes de costa."
          },
          {
              question: "Onde se localizan as principais vías de comunicación e cidades na paisaxe oceánica?",
              answers: ["No interior", "Nas zonas montañosas", "Na franxa costeira", "No sur da península"],
              correct: 2,
              explanation: "✅ Na paisaxe oceánica, as principais vías de comunicación e cidades localízanse na franxa costeira."
          },
          {
              question: "A que se dedican os habitantes da zona costeira na paisaxe oceánica?",
              answers: ["Agricultura e gandaría", "Pesca e minería", "Industria, servizos e turismo", "Comercio marítimo tradicional"],
              correct: 2,
              explanation: "✅ Na paisaxe oceánica, os habitantes da zona costeira dedícanse á industria, aos servizos e ao turismo."
          },
          {
              question: "Como se distribúe a poboación no mundo rural da paisaxe oceánica?",
              answers: ["En cidades dispersas", "En grandes urbes", "En casas de campo e pequenas aldeas", "En centros industriais"],
              correct: 2,
              explanation: "✅ No mundo rural da paisaxe oceánica, a poboación distribúese en casas de campo e pequenas aldeas."
          },
          {
              question: "Como son as comunicacións na paisaxe mediterránea?",
              answers: ["Escasas", "Difíciles polo relevo", "Boas e modernas", "Só marítimas"],
              correct: 2,
              explanation: "✅ Na paisaxe mediterránea, as comunicacións son boas e modernas."
          },
          {
              question: "Cal é a actividade económica máis importante na paisaxe mediterránea?",
              answers: ["Agricultura de secano", "Industria pesada", "O turismo", "Pesca tradicional"],
              correct: 2,
              explanation: "✅ A actividade económica máis importante na paisaxe mediterránea é o turismo."
          },
          {
              question: "Que ocorre coas paisaxes naturais na paisaxe mediterránea?",
              answers: ["Están intactas", "Medran co turismo", "Están en decadencia debido á expansión do ser humano", "Son substituídas por zonas industriais"],
              correct: 2,
              explanation: "✅ As paisaxes naturais na paisaxe mediterránea están en decadencia debido á expansión do ser humano."
          },
          {
              question: "Que característica teñen as zonas rurais mediterráneas?",
              answers: ["Carecen de regadío", "Están abandonadas", "Contan con grandes zonas de regadío", "Son zonas montañosas e frías"],
              correct: 2,
              explanation: "✅ As zonas rurais mediterráneas caracterízanse por contar con grandes zonas de regadío."
          },
          {
              question: "Como son as cidades na paisaxe continental?",
              answers: ["Moi poboadas en toda a zona", "Pouco poboadas, agás Madrid", "Abandonadas", "Situadas na costa"],
              correct: 1,
              explanation: "✅ Na paisaxe continental, as cidades son pouco poboadas, agás Madrid."
          },
          {
              question: "Como son as comunicacións na paisaxe continental?",
              answers: ["Escasas", "Boas", "Só ferroviarias", "Antigas e pouco eficaces"],
              correct: 1,
              explanation: "✅ As comunicacións na paisaxe continental son boas."
          },
          {
              question: "A que se dedican as actividades económicas na paisaxe continental?",
              answers: ["Agricultura de montaña", "Pesca e turismo", "Á industria e ao sector servizos", "Silvicultura e artesanía"],
              correct: 2,
              explanation: "✅ Na paisaxe continental, as actividades económicas principais son a industria e o sector servizos."
          },
          {
              question: "Onde se concentran as poboacións no mundo rural na paisaxe continental?",
              answers: ["En grandes cidades", "En aldeas dispersas", "En vilas pequenas ou medianas", "Nas zonas costeiras"],
              correct: 2,
              explanation: "✅ No mundo rural da paisaxe continental, a poboación concéntrase en vilas pequenas ou medianas."
          },
          {
              question: "Como son as zonas de montaña na paisaxe de alta montaña?",
              answers: ["Moi poboadas con grandes cidades", "Pouco poboadas debido ao relevo abrupto e inhóspito", "Abundantes en industrias", "Ideais para o cultivo intensivo"],
              correct: 1,
              explanation: "✅ As zonas de montaña na paisaxe de alta montaña son pouco poboadas debido ao relevo abrupto e inhóspito."
          },
          {
            question: "Que tipo de clima predomina en Galicia?",
            answers: ["Clima continental seco", "Clima subtropical", "Clima oceánico húmido", "Clima mediterráneo"],
            correct: 2,
            explanation: "✅ En Galicia predomina o clima oceánico húmido."
        },
        {
            question: "Como son as temperaturas en Galicia ao longo do ano?",
            answers: ["Extremas e moi frías no inverno", "Moi altas todo o ano", "Suaves, con invernos frescos e veráns moderadamente cálidos", "Moi frías en verán e cálidas en inverno"],
            correct: 2,
            explanation: "✅ En Galicia, as temperaturas son suaves durante o ano, con invernos frescos e veráns moderadamente cálidos."
        },
        {
            question: "Que influencia ten o mar no clima galego?",
            answers: ["Aumenta as temperaturas extremas", "Reduce as precipitacións", "Regula as temperaturas, evitando extremos de frío ou calor", "Non ten ningunha influencia"],
            correct: 2,
            explanation: "✅ O mar regula as temperaturas en Galicia, evitando extremos de frío ou calor."
        },
        {
            question: "Como son as precipitacións en Galicia?",
            answers: ["Moi escasas todo o ano", "So chove en verán", "Abundantes durante todo o ano, especialmente no outono e inverno", "Apenas existen chuvias"],
            correct: 2,
            explanation: "✅ En Galicia as precipitacións son abundantes todo o ano, especialmente no outono e inverno."
        },
        {
            question: "Que zona de Galicia recibe máis precipitacións?",
            answers: ["O interior de Lugo", "O sueste de Ourense", "A fachada atlántica, sobre todo as provincias da Coruña e Pontevedra", "A Mariña lucense"],
            correct: 2,
            explanation: "✅ A fachada atlántica, especialmente A Coruña e Pontevedra, recibe máis precipitacións en Galicia."
        },
        {
            question: "Que elementos inflúen no clima galego ademais do mar?",
            answers: ["Só a latitude", "A acción humana", "O relevo e os ventos atlánticos", "O deserto do Sáhara"],
            correct: 2,
            explanation: "✅ O relevo e os ventos atlánticos tamén inflúen no clima galego."
        },
        {
            question: "Como varía o clima entre o interior e a costa galega?",
            answers: ["Non varía", "O interior ten temperaturas máis extremas e menor influencia marítima", "A costa é máis seca", "O interior é máis húmido"],
            correct: 1,
            explanation: "✅ O clima do interior de Galicia presenta temperaturas máis extremas e menos influencia marítima que a costa."
        },
        {
            question: "En que estación do ano hai máis precipitacións en Galicia?",
            answers: ["Primavera", "Verán", "Outono e inverno", "Verán e primavera"],
            correct: 2,
            explanation: "✅ As estacións con máis precipitacións en Galicia son o outono e o inverno."
        },
        {
            question: "Que tipo de vexetación é característica do clima galego?",
            answers: ["Cactos e matogueiras secas", "Bosques de carballos, castiñeiros e piñeiros, así como praderías húmidas", "Palmeiras e oliveiras", "Só arbustos baixos"],
            correct: 1,
            explanation: "✅ O clima galego favorece bosques de carballos, castiñeiros, piñeiros e praderías húmidas."
        },
        {
            question: "Que papel teñen os ventos no clima de Galicia?",
            answers: ["Secan a atmosfera", "Non afectan ao clima", "Traen humidade e chuvia dende o océano Atlántico", "Producen calor intensa"],
            correct: 2,
            explanation: "✅ Os ventos atlánticos traen humidade e chuvia a Galicia."
        },
        {
            question: "Que zonas de Galicia teñen temperaturas máis extremas?",
            answers: ["A costa", "A Mariña", "As zonas do interior", "As rías baixas"],
            correct: 2,
            explanation: "✅ As zonas do interior de Galicia teñen temperaturas máis extremas ca a costa."
        },
        {
            question: "Como inflúe o relevo no clima galego?",
            answers: ["Non inflúe", "Reduce as temperaturas costeiras", "Condiciona as precipitacións e as temperaturas, creando microclimas", "Fai que sempre neve nas montañas"],
            correct: 2,
            explanation: "✅ O relevo condiciona as precipitacións e as temperaturas, creando microclimas en Galicia."
        },
        {
            question: "Que fenómenos meteorolóxicos son frecuentes en Galicia?",
            answers: ["Secas prolongadas", "Nevadas constantes", "Neboas, chuvascos intensos, ventos fortes e ocasionalmente cicloxénese explosiva", "Tornados"],
            correct: 2,
            explanation: "✅ En Galicia son frecuentes as neboas, os chuvascos intensos, os ventos fortes e ás veces a cicloxénese explosiva."
        },
        {
            question: "Como afecta o cambio climático ao clima de Galicia?",
            answers: ["Provoca máis neve", "Non afecta", "Aumenta as temperaturas e fai as precipitacións máis irregulares", "Fai desaparecer os ventos"],
            correct: 2,
            explanation: "✅ O cambio climático está provocando un aumento das temperaturas e unha maior irregularidade nas precipitacións en Galicia."
        },
        {
            question: "Que tipo de vento predomina en Galicia?",
            answers: ["Ventos secos do sur", "Ventos do leste", "Ventos atlánticos húmidos", "Ventos continentais fríos"],
            correct: 2,
            explanation: "✅ Os ventos predominantes en Galicia son os ventos atlánticos húmidos, que traen precipitacións frecuentes."
        },
        {
            question: "Que zonas de Galicia reciben menos precipitacións?",
            answers: ["A Mariña lucense", "O sueste de Ourense", "A costa da Coruña", "As Rías Altas"],
            correct: 1,
            explanation: "✅ O sueste de Ourense é unha das zonas máis secas de Galicia."
        },
        {
            question: "Como inflúe o clima na economía galega?",
            answers: ["Non inflúe en absoluto", "Fomenta a minería", "Favorece actividades como a agricultura, a gandería e a pesca, pero tamén pode afectar negativamente con temporais e secas", "Só afecta ao turismo"],
            correct: 2,
            explanation: "✅ O clima galego favorece a agricultura, a gandería e a pesca, pero tamén pode causar danos con temporais e secas."
        },
        {
            question: "Que diferenza hai entre o clima da costa e o do interior de Galicia?",
            answers: ["Ningunha", "O interior é máis húmido", "A costa ten temperaturas máis suaves e maior humidade, mentres que o interior experimenta máis variacións térmicas", "A costa é máis seca ca o interior"],
            correct: 2,
            explanation: "✅ A costa galega ten temperaturas máis suaves e máis humidade; o interior ten máis variacións térmicas."
        }, 
        {
            question: "Que son as chairas?",
            answers: ["Montañas baixas", "Extensións pequenas e montañosas", "Extensións de terreo moi grandes case planas cunha altitude non superior aos 200 metros sobre o nivel do mar", "Vales profundos"],
            correct: 2,
            explanation: "✅ As chairas son extensións de terreo moi grandes e case planas cunha altitude inferior a 200 metros."
        },
        {
            question: "Que son as mesetas?",
            answers: ["Montañas altas e afiadas", "Planicies a nivel do mar", "Chairas ou planicies elevadas de maneira natural a máis de 200 metros de altitude", "Cadeas montañosas en forma de val"],
            correct: 2,
            explanation: "✅ As mesetas son chairas elevadas a máis de 200 metros sobre o nivel do mar."
        },
        {
            question: "Que son as depresións?",
            answers: ["Montes erosionados", "Vales secos e profundos", "Áreas húmidas polas que descorren ríos, formando vales", "Planicies elevadas e secas"],
            correct: 2,
            explanation: "✅ As depresións son áreas húmidas por onde pasan ríos, formando vales alongados."
        },
        {
            question: "Que é unha albufeira?",
            answers: ["Unha illa costeira", "Unha baía pechada", "Unha lagoa de auga lixeiramente salgada, pouco profunda, próxima ao mar e separada del por terra areosa", "Un río seco e estacional"],
            correct: 2,
            explanation: "✅ Unha albufeira é unha lagoa lixeiramente salgada, pouco profunda e separada do mar por terra areosa."
        },
        {
            question: "Que é un arquipélago?",
            answers: ["Unha ría grande", "Unha baía con illas", "Un conxunto de illas", "Un golfo entre dúas illas"],
            correct: 2,
            explanation: "✅ Un arquipélago é un conxunto de illas."
        },
        {
            question: "Que é unha baía?",
            answers: ["Unha illa pequena", "Unha entrada do mar na costa, similar a un golfo pero máis pequena", "Unha zona de pesca costeira", "Un istmo con forma de U"],
            correct: 1,
            explanation: "✅ Unha baía é unha entrada do mar na costa, parecida a un golfo pero de menor tamaño."
        },
        {
            question: "Que é un cabo?",
            answers: ["Unha illa baixa", "Unha praia de area fina", "A parte saínte da terra que penetra no mar", "Unha montaña interior"],
            correct: 2,
            explanation: "✅ Un cabo é a parte da terra que sobresae no mar."
        },
        {
            question: "Que é un cantil ou acantilado?",
            answers: ["Unha illa escarpada", "Unha ría seca", "Un terreo abrupto en forte pendente", "Un val profundo e ancho"],
            correct: 2,
            explanation: "✅ Un cantil é un terreo abrupto e con forte pendente, típico das costas rochosas."
        },
        {
            question: "Que é un golfo?",
            answers: ["Unha illa de gran tamaño", "Unha lagoa pechada", "Unha gran porción de mar que entra na terra entre dous cabos", "Unha ría estreita"],
            correct: 2,
            explanation: "✅ Un golfo é unha gran porción de mar que entra na terra entre dous cabos."
        },
        {
            question: "Que é unha illa?",
            answers: ["Unha montaña no mar", "Unha porción de terra rodeada de auga por un lado", "Unha porción de terra rodeada de auga por todos os lados", "Unha península pequena"],
            correct: 2,
            explanation: "✅ Unha illa é unha porción de terra rodeada completamente por auga."
        },
        {
            question: "Que é un istmo?",
            answers: ["Unha entrada de mar na terra", "Unha ría estreita", "Unha franxa estreita de terra que une dúas zonas terrestres", "Unha illa unida á costa"],
            correct: 2,
            explanation: "✅ Un istmo é unha franxa estreita de terra que conecta dúas zonas terrestres."
        },
        {
            question: "Que é unha marisma?",
            answers: ["Unha praia con vexetación", "Terra baixa inundada polo mar", "Unha lagoa de auga doce", "Un río de curso lento"],
            correct: 1,
            explanation: "✅ Unha marisma é unha terra baixa que se inunda coas mareas."
        },
        {
            question: "Que é unha península?",
            answers: ["Unha illa con pontes", "Unha entrada de mar", "Unha porción de terra rodeada de auga por todas as partes menos por unha", "Un golfo elevado"],
            correct: 2,
            explanation: "✅ Unha península está case completamente rodeada por auga, agás por unha parte chamada istmo."
        },
        {
            question: "Que son as praias?",
            answers: ["Montañas costeiras", "Cadeas rochosas submarinas", "Extensións de area ou pedra miúda á beira do mar ou dun río", "Camiños marítimos de navegación"],
            correct: 2,
            explanation: "✅ As praias son áreas de area ou pedras pequenas situadas á beira do mar ou dos ríos."
        },
        {
            question: "Que é unha ría?",
            answers: ["Un río seco", "Un brazo de mar entre illas", "Unha zona húmida costeira", "Cando o mar se interna na desembocadura dun río"],
            correct: 3,
            explanation: "✅ Unha ría fórmase cando o mar entra pola desembocadura dun río."
        },
        {
            question: "En que mares ou océanos desembocan os ríos de España?",
            answers: ["Só no mar Cantábrico", "No océano Índico", "Na vertente atlántica, cantábrica e mediterránea", "Só no océano Atlántico"],
            correct: 2,
            explanation: "✅ Os ríos de España desembocan en tres vertentes: atlántica, cantábrica e mediterránea."
        },
        {
            question: "Que é unha vertente hidrográfica?",
            answers: ["Un tipo de montaña", "O conxunto de lagos dunha rexión", "É o conxunto de ríos que desembocan nun mesmo mar ou océano", "Unha zona de regadío"],
            correct: 2,
            explanation: "✅ Unha vertente hidrográfica é o conxunto de ríos que desembocan nun mesmo mar ou océano."
        },
        {
            question: "Cales son as tres vertentes hidrográficas de España?",
            answers: ["Atlántica, Pacífica e Cantábrica", "Mediterránea, Alpina e Subterránea", "Atlántica, Mediterránea e Cantábrica", "Interior, Externa e Costeira"],
            correct: 2,
            explanation: "✅ As tres vertentes hidrográficas de España son a atlántica, a mediterránea e a cantábrica."
        },
        {
            question: "Que características ten a vertente atlántica?",
            answers: ["Ríos curtos e secos", "Ríos longos, con caudal abundante e irregular", "Ríos con moitas illas", "Ríos que só aparecen no verán"],
            correct: 1,
            explanation: "✅ Os ríos da vertente atlántica son longos, con caudal abundante e irregular."
        },
        {
            question: "Que ríos pertencen á vertente atlántica?",
            answers: ["Ebro, Turia, Segura", "Miño, Douro, Texo, Guadiana e Guadalquivir", "Nalón, Sella, Nervión", "Sil, Xúcar, Bidasoa"],
            correct: 1,
            explanation: "✅ O Miño, o Douro, o Texo, o Guadiana e o Guadalquivir pertencen á vertente atlántica."
        },
        {
            question: "Como son os ríos da vertente cantábrica?",
            answers: ["Longos e de caudal moi irregular", "Curvos e secos", "Curtos, de forte pendente e caudal regular e abundante", "Pouco profundos e secos"],
            correct: 2,
            explanation: "✅ Os ríos da vertente cantábrica son curtos, con forte pendente e caudal abundante e regular."
        },
        {
            question: "Que ríos pertencen á vertente cantábrica?",
            answers: ["Texo, Segura, Douro", "Nalón, Nervión, Bidasoa e Sella", "Miño, Ebro, Turia", "Guadalquivir, Guadiana, Xúcar"],
            correct: 1,
            explanation: "✅ Nalón, Nervión, Bidasoa e Sella son ríos da vertente cantábrica."
        },
        {
            question: "Que características ten a vertente mediterránea?",
            answers: ["Ríos moi longos e caudalosos", "Ríos secos durante todo o ano", "Ríos curtos e de caudal irregular, con períodos de seca e cheas", "Ríos con moitas ramificacións"],
            correct: 2,
            explanation: "✅ Os ríos da vertente mediterránea son curtos e teñen un caudal irregular, con secas e cheas frecuentes."
        },
        {
            question: "Que ríos pertencen á vertente mediterránea?",
            answers: ["Xúcar, Segura, Turia e Ebro", "Douro, Texo, Miño e Guadalquivir", "Nalón, Nervión, Miño e Bidasoa", "Sil, Guadiana, Turia e Nalón"],
            correct: 0,
            explanation: "✅ O Ebro, o Xúcar, o Segura e o Turia pertencen á vertente mediterránea."
        },
        {
            question: "Por que os ríos da vertente mediterránea teñen caudal irregular?",
            answers: ["Pola acción humana", "Debido ao clima seco e ás precipitacións irregulares", "Pola súa proximidade ao mar", "Porque están en zonas montañosas"],
            correct: 1,
            explanation: "✅ O caudal dos ríos mediterráneos é irregular debido ao clima seco e ás precipitacións irregulares."
        },
        {
            question: "Que influencia ten o relevo na distribución das vertentes hidrográficas?",
            answers: ["Ningunha", "Facilita que todos os ríos vaian ao Atlántico", "As montañas actúan como barreiras naturais que determinan a dirección dos ríos", "Só inflúe na cantidade de auga"],
            correct: 2,
            explanation: "✅ O relevo, especialmente as montañas, marca a dirección dos ríos e, por tanto, das vertentes hidrográficas."
        },
        {
            question: "Que factores determinan a formación das vertentes hidrográficas?",
            answers: ["Só a choiva", "O relevo, o clima e a disposición das montañas", "A actividade volcánica", "O tipo de vexetación"],
            correct: 1,
            explanation: "✅ O relevo, o clima e a disposición das montañas determinan a formación das vertentes."
        },
        {
            question: "Como inflúe o clima na cantidade de auga dos ríos de cada vertente?",
            answers: ["Non inflúe", "Inflúe só na vertente atlántica", "Cada vertente depende das precipitacións e humidade da zona", "O clima só afecta os lagos"],
            correct: 2,
            explanation: "✅ O clima condiciona o caudal: na atlántica é abundante, na cantábrica constante, e na mediterránea irregular."
        },
        {
            question: "Que características diferenciais ten o río Ebro dentro da vertente mediterránea?",
            answers: ["É moi seco e curto", "Non desemboca no mar", "É o máis longo e caudaloso da vertente mediterránea", "Forma unha illa grande"],
            correct: 2,
            explanation: "✅ O Ebro é o río máis longo e caudaloso da vertente mediterránea e é fundamental para o regadío."
        },
        {
            question: "Por que os ríos da vertente cantábrica son curtos e de forte pendente?",
            answers: ["Pola escaseza de choiva", "Porque nacen no sur", "Pola proximidade das montañas á costa", "Porque cruzan desertos"],
            correct: 2,
            explanation: "✅ A proximidade das montañas á costa fai que os ríos da vertente cantábrica sexan curtos e con forte pendente."
        },
        {
            question: "Que impacto teñen as vertentes hidrográficas na biodiversidade de España?",
            answers: ["Ningún", "Reducen a variedade de especies", "Crean ecosistemas diversos, desde humidais ata zonas áridas", "Só afectan os peixes"],
            correct: 2,
            explanation: "✅ As vertentes hidrográficas contribúen á diversidade ecolóxica ao formar ecosistemas distintos."
        },
        {
            question: "Como inflúe a acción humana nos ríos das distintas vertentes?",
            answers: ["Mellora a calidade da auga", "Non ten efectos significativos", "Afecta o caudal e a calidade pola construción de encoros, contaminación e sobreexplotación", "Fai que desaparezan os ríos"],
            correct: 2,
            explanation: "✅ A acción humana, como os encoros e a contaminación, afecta negativamente os ríos das tres vertentes."
        }
        ],
    plantas:[
            {
                question: "Cal é a parte máis pequena con vida dunha planta?",
                answers: ["A célula vexetal", "O tecido", "O órgano", "A folla"],
                correct: 0,
                explanation: "✅ A célula vexetal é a unidade básica da vida nas plantas."
            },
            {
                question: "Que forman as células ao organizarse?",
                answers: ["Froitos", "Tecidos", "Estomas", "Cloroplastos"],
                correct: 1,
                explanation: "✅ As células, ao organizarse, forman tecidos nas plantas."
            },
            {
                question: "Que significa que as plantas sexan autótrofas?",
                answers: ["Que comen outras plantas", "Que viven sen auga", "Que fabrican o seu propio alimento", "Que se moven para buscar comida"],
                correct: 2,
                explanation: "✅ As plantas son autótrofas porque fabrican o seu propio alimento mediante a fotosíntese."
            },
            {
                question: "Que se forma ao combinar auga e sales minerais na fase 1 da alimentación das plantas?",
                answers: ["Zume elaborado", "Zume bruto", "Pole", "Osíxeno"],
                correct: 1,
                explanation: "✅ A combinación de auga e sales minerais forma o zume bruto."
            },
            {
                question: "Que ocorre durante a fotosíntese?",
                answers: ["Despréndese dióxido de carbono", "A planta dorme", "Fórmase o zume elaborado e despréndese osíxeno", "A planta perde a clorofila"],
                correct: 2,
                explanation: "✅ Na fotosíntese fórmase o zume elaborado e despréndese osíxeno."
            },
            {
                question: "Onde ten lugar a reprodución sexual das plantas?",
                answers: ["Nas follas", "No talo", "Nas flores", "Nas raíces"],
                correct: 2,
                explanation: "✅ A reprodución sexual das plantas ten lugar nas flores."
            },
            {
                question: "Que producen os estames?",
                answers: ["Sementes", "Pole ou gametos masculinos", "Zume elaborado", "Soros"],
                correct: 1,
                explanation: "✅ Os estames producen o pole, que son os gametos masculinos."
            },
            {
                question: "Como se chama o proceso no que o pole viaxa ata o pistilo?",
                answers: ["Xerminación", "Fecundación", "Polinización", "Transpiración"],
                correct: 2,
                explanation: "✅ A polinización é o proceso no que o pole viaxa dende os estames ata o pistilo."
            },
            {
                question: "Que ocorre cando se xuntan os gametos masculino e feminino?",
                answers: ["Nace unha flor", "Forman unha raíz", "Fórmase a semente", "Despréndese osíxeno"],
                correct: 2,
                explanation: "✅ Cando se xuntan os gametos fórmase a semente."
            },
            {
                question: "Como se reproducen os fentos e o musgo?",
                answers: ["Por sementes", "Por flores", "Por esporas", "Por rizomas"],
                correct: 2,
                explanation: "✅ Os fentos e o musgo reprodúcense por esporas."
            },
             {
                question: "Cal é a función principal da raíz?",
                answers: ["Suxeitar a planta ao solo e obter auga e sales minerais", "Soster a planta no aire", "Realizar a fotosíntese"],
                correct: 0,
                explanation: "✅ A raíz axuda a suxeitar a planta e absorbe auga e sales minerais do solo."
            },
            {
                question: "Que función ten o talo?",
                answers: ["Realizar a fotosíntese", "Soster a planta de pé e transportar zume bruto e elaborado", "Captar dióxido de carbono"],
                correct: 1,
                explanation: "✅ O talo proporciona soporte á planta e transporta nutrientes."
            },
            {
                question: "Cal é a función principal das follas?",
                answers: ["Realizar a fotosíntese", "Transportar zume bruto", "Soster a planta de pé"],
                correct: 0,
                explanation: "✅ As follas son responsables da fotosíntese, proceso esencial para a produción de enerxía."
            },
            {
                question: "Que son as anxiospermas?",
                answers: ["Plantas que non teñen froito", "Plantas que teñen froito e as sementes están dentro del", "Plantas que se reproducen mediante esporas"],
                correct: 1,
                explanation: "✅ As anxiospermas producen froitos que conteñen as súas sementes."
            },
            {
                question: "Que son as ximnospermas?",
                answers: ["Plantas que non teñen froito e as sementes non están recubertas", "Plantas que teñen froito e as sementes están dentro del", "Plantas que se reproducen mediante esporas"],
                correct: 0,
                explanation: "✅ As ximnospermas teñen sementes que non están recubertas por froitos."
            },
            {
                question: "Como se reproducen estas plantas?",
                answers: ["Mediante sementes", "Mediante esporas", "Mediante fotosíntese"],
                correct: 1,
                explanation: "✅ As plantas sen flor reprodúcense mediante esporas."
            }
        ],
    naturais: [
               {
            question: "Que é a masa?",
            answers: ["O espazo que ocupa un corpo", "A resistencia da materia a ser raiada", "A cantidade de materia que ten un corpo"],
            correct: 2,
            explanation: "✅ A masa é a cantidade de materia que ten un corpo."
        },
        {
            question: "Que unidade se usa para medir o volume?",
            answers: ["Quilogramo (Kg)", "Litro (l)", "Metro (m)"],
            correct: 1,
            explanation: "✅ O volume mídese en litros (l)."
        },
        {
            question: "Que indica a dureza dun material?",
            answers: ["A súa capacidade de disolverse", "O seu peso", "A resistencia a ser raiado ou perforado"],
            correct: 2,
            explanation: "✅ A dureza indica a resistencia dun material a ser raiado ou perforado."
        },
        {
            question: "Que característica define un sólido?",
            answers: ["Adáptase ao recipiente que o contén", "Ten forma propia e volume constante", "Non ten forma nin volume fixo"],
            correct: 1,
            explanation: "✅ Un sólido ten forma propia e volume constante."
        },
        {
            question: "Que ocorre co volume dun líquido?",
            answers: ["Cambia constantemente", "Mantense fixo pero adapta a forma do recipiente", "É igual ao dun sólido"],
            correct: 1,
            explanation: "✅ O volume dun líquido mantense fixo pero adapta a forma do recipiente."
        },
        {
            question: "Que ocorre co volume dun gas?",
            answers: ["Mantense fixo", "Adáptase ao recipiente pero ten forma propia", "Non ten nin forma nin volume fixo"],
            correct: 2,
            explanation: "✅ Os gases non teñen nin forma nin volume fixo."
        },
        {
            question: "Que é a fusión?",
            answers: ["Cambio de estado de gas a líquido", "Cambio de estado de sólido a líquido", "Cambio de estado de líquido a sólido"],
            correct: 1,
            explanation: "✅ A fusión é o cambio de estado de sólido a líquido."
        },
        {
            question: "Que ocorre na evaporación?",
            answers: ["Cambio de estado de gas a líquido", "Cambio de estado de líquido a gas", "Cambio de estado de sólido a líquido"],
            correct: 1,
            explanation: "✅ A evaporación é o cambio de estado de líquido a gas."
        },
        {
            question: "Que ocorre na condensación?",
            answers: ["Cambio de estado de líquido a gas", "Cambio de estado de gas a líquido", "Cambio de estado de sólido a líquido"],
            correct: 1,
            explanation: "✅ A condensación é o cambio de estado de gas a líquido."
        },
        {
            question: "Que é un cambio químico?",
            answers: ["Un cambio no estado físico", "A temperatura aumenta", "A substancia cambia e convértese noutra con outras propiedades"],
            correct: 2,
            explanation: "✅ Un cambio químico implica a transformación da substancia en outra diferente."
        },
         {
        question: "Cal destas opcións describe un proceso de oxidación?",
        answers: ["A auga convértese en vapor", "A formación de cinzas ao queimar papel", "Unha substancia combínase co osíxeno e fórmase outra nova"],
        correct: 2,
        explanation: "✅ A oxidación é cando unha substancia se combina co osíxeno e xera outra nova."
    },
    {
        question: "Na fermentación, que fan os microorganismos?",
        answers: ["Disolven o osíxeno", "Transforman a materia", "Enfrían a substancia"],
        correct: 1,
        explanation: "✅ Na fermentación, os microorganismos transforman a materia."
    },
    {
        question: "Como se define a enerxía?",
        answers: ["A forza do vento", "A capacidade para destruír materia", "A capacidade dun corpo para producir un cambio"],
        correct: 2,
        explanation: "✅ A enerxía é a capacidade para producir cambios."
    },
    {
        question: "A enerxía xérase ou transformase?",
        answers: ["Transformase doutra forma de enerxía", "Xérase"],
        correct: 0,
        explanation: "✅ A enerxía non se crea nin destrúe, transfórmase."
    },
    {
        question: "Que son os recursos naturais?",
        answers: ["Bens presentes na natureza que se usan para cubrir necesidades", "Produtos industriais", "Solucións químicas"],
        correct: 0,
        explanation: "✅ Os recursos naturais son bens da natureza que se usan para cubrir necesidades."
    },
    {
        question: "Cal das opcións non é un exemplo de materia prima?",
        answers: ["Madeira", "Cereal", "Plástico sintético"],
        correct: 2,
        explanation: "✅ O plástico sintético non é unha materia prima natural."
    },
    {
        question: "Cal destas fontes de enerxía é renovable?",
        answers: ["Petróleo", "Carbón", "Luz do sol"],
        correct: 2,
        explanation: "✅ A luz do sol é unha fonte de enerxía renovable."
    },
    {
        question: "Por que os recursos non renovables poden esgotarse?",
        answers: ["Porque hai unha cantidade limitada e non se renovan", "Porque se reproducen lentamente", "Porque dependen da auga"],
        correct: 0,
        explanation: "✅ Os recursos non renovables esgótanse porque non se rexeneran naturalmente a curto prazo."
    },
    {
        question: "A madeira procede dunha materia prima:",
        answers: ["Mineral", "Animal", "Vexetal"],
        correct: 2,
        explanation: "✅ A madeira é unha materia prima de orixe vexetal."
    },
    {
        question: "Que tipo de orixe ten o ferro ou o sal?",
        answers: ["Animal", "Vexetal", "Mineral"],
        correct: 2,
        explanation: "✅ O ferro e o sal son materias primas minerais."
    }

        ],
    ecosistemas: [
          {
        question: "Cal é a función da XEOSFERA?",
        answers: [
            "É a capa de gases que rodea a Terra", 
            "A XEOSFERA é a parte sólida do planeta, formada polo núcleo, o manto e a codia", 
            "É a zona habitada por organismos vivos", 
            "É o conxunto dos océanos e mares"
        ],
        correct: 1,
        explanation: "✅ A XEOSFERA comprende as capas sólidas da Terra e proporciona a base para a vida e os ecosistemas."
    },
    {
        question: "Que estados pode presentar a auga na HIDROSFERA?",
        answers: [
            "Só pode estar en estado líquido",
            "Sempre está conxelada",
            "A auga pode estar en estado sólido, líquido ou gasoso",
            "Só aparece como vapor de auga"
        ],
        correct: 2,
        explanation: "✅ Na hidrosfera, a auga pode atoparse en tres estados: sólido (xeo), líquido (auga) e gasoso (vapor)."
    },
    {
        question: "Que é a ATMOSFERA?",
        answers: [
            "É unha capa de rochas que cobre o planeta",
            "É a zona onde viven todos os seres vivos",
            "É unha capa de gases que rodea a Terra",
            "É a parte líquida do planeta"
        ],
        correct: 2,
        explanation: "✅ A atmosfera é unha capa gasosa que envolve a Terra e permite a vida ao fornecer osíxeno, protexer dos raios solares e regular a temperatura."
    },
    {
        question: "Que é a BIOSFERA?",
        answers: [
            "É o manto terrestre", 
            "É a capa da Terra formada polos seres vivos", 
            "É a capa de ozono", 
            "É unha zona xeográfica sen vida"
        ],
        correct: 1,
        explanation: "✅ A biosfera inclúe todos os organismos vivos e os ecosistemas nos que viven."
    },
    {
        question: "Que é un ECOSISTEMA?",
        answers: [
            "Un tipo de clima", 
            "Unha rexión montañosa", 
            "É o conxunto de seres vivos que habitan nun lugar e o medio no que viven", 
            "Só os animais dunha zona"
        ],
        correct: 2,
        explanation: "✅ Un ecosistema combina os seres vivos (biocenose) e os factores abióticos (hábitat) que interactúan entre si."
    },
    {
        question: "Que é a ECOSFERA?",
        answers: [
            "Unha capa da atmósfera", 
            "É o conxunto formado por todos os ecosistemas da Terra", 
            "Un bioma desértico", 
            "A codia terrestre"
        ],
        correct: 1,
        explanation: "✅ A ecosfera é a suma de todos os ecosistemas do planeta, onde a vida existe e interactúa co medio."
    },
    {
        question: "Que é o MEDIO FÍSICO nun ecosistema?",
        answers: [
            "Os animais e plantas dun lugar", 
            "É formado polos factores abióticos, sen vida, como o solo, a luz e a auga", 
            "As relacións entre seres vivos", 
            "Só a temperatura"
        ],
        correct: 1,
        explanation: "✅ O medio físico inclúe elementos non vivos dun ecosistema que condicionan a vida dos seres vivos."
    },
    {
        question: "Cal é a diferenza entre medios terrestres e acuáticos?",
        answers: [
            "Os acuáticos son máis densos", 
            "Os terrestres teñen máis plantas", 
            "Os medios terrestres están na terra firme, mentres que os acuáticos están na auga", 
            "Non hai diferenza real"
        ],
        correct: 2,
        explanation: "✅ A principal diferenza é o lugar no que se desenvolve a vida: terra firme ou medios acuáticos como ríos, lagos e océanos."
    },
    {
            question: "Que é o HÁBITAT?",
            answers: [
                "O lugar onde se reproducen os animais", 
                "É o lugar do ecosistema no que viven os individuos dunha especie determinada", 
                "Un tipo de planta", 
                "Unha estación do ano"
            ],
            correct: 1,
            explanation: "✅ O hábitat é o entorno específico no que unha especie atopa as condicións necesarias para vivir."
        },
        {
            question: "Que se entende por SERES VIVOS nun ecosistema?",
            answers: [
                "Só os animais grandes", 
                "Os minerais e rochas", 
                "Son os organismos que viven no ecosistema e interactúan co medio e entre si", 
                "As plantas industriais"
            ],
            correct: 2,
            explanation: "✅ Os seres vivos forman parte da biocenose dun ecosistema e manteñen relacións entre eles e co medio físico."
        },
        {
            question: "Que son os PRODUTORES nun ecosistema?",
            answers: [
                "Animais carnívoros", 
                "Bacterias que descompoñen materia", 
                "Seres vivos que cazan para alimentarse", 
                "Son seres vivos capaces de elaborar o seu propio alimento, como as plantas"
            ],
            correct: 3,
            explanation: "✅ Os produtores realizan a fotosíntese para xerar o seu alimento, sendo a base da cadea trófica."
        },
        {
        question: "Quen son os CONSUMIDORES PRIMARIOS?",
        answers: [
            "Son descompoñedores que viven no chan",
            "Son animais herbívoros que se alimentan dos produtores",
            "Son plantas que se alimentan de minerais",
            "Son depredadores que cazan herbívoros"
        ],
        correct: 1,
        explanation: "✅ Estes consumidores aliméntanse directamente das plantas ou doutros produtores."
    },
    {
        question: "Quen son os CONSUMIDORES SECUNDARIOS?",
        answers: [
            "Son animais herbívoros que comen plantas",
            "Son animais carnívoros ou omnívoros que se alimentan dos consumidores primarios",
            "Son plantas que se alimentan doutros seres vivos",
            "Son seres vivos que producen o seu alimento"
        ],
        correct: 1,
        explanation: "✅ Ocupan un nivel trófico superior ao dos herbívoros, alimentándose deles."
    },
    {
        question: "Quen son os CONSUMIDORES TERCIARIOS?",
        answers: [
            "Son animais que comen só froitas",
            "Son os depredadores que se alimentan dos consumidores secundarios",
            "Son produtores que fan fotosíntese",
            "Son herbívoros que comen raíces"
        ],
        correct: 1,
        explanation: "✅ Estes depredadores están na cima da cadea alimentaria e teñen poucos ou ningún predador natural."
    },
        {
            question: "Quen son os DESCOMPONEDORES?",
            answers: [
                "Son carnívoros que comen outros animais",
                "Son seres vivos, como fungos e bacterias, que se alimentan de restos doutros seres vivos",
                "Son plantas que descompoñen a luz solar",
                "Son animais que viven en simbiose"
            ],
            correct: 1,
            explanation: "✅ Descompoñen materia orgánica morta, devolvendo nutrientes ao solo e completando o ciclo da vida."
        },
        {
            question: "Que é o MUTUALISMO?",
            answers: [
                "É unha relación na que un se beneficia e o outro non se ve afectado",
                "É unha relación que se establece entre dous seres vivos en que AMBOS SE BENEFICIAN",
                "É unha relación prexudicial para ambos",
                "É unha loita entre dúas especies"
            ],
            correct: 1,
            explanation: "✅ No mutualismo, ambos organismos obteñen vantaxes da súa asociación, sendo unha relación beneficiosa para ambos."
        },
        {
            question: "Podes dar un exemplo de MUTUALISMO?",
            answers: [
                "Os lobos cazando cervos",
                "Si, por exemplo, as abellas e as flores: as abellas conseguen néctar e as flores un medio de transporte do pole",
                "Un gato cazando un rato",
                "Unha planta que morre por falta de luz"
            ],
            correct: 1,
            explanation: "✅ As abellas obteñen alimento mentres as flores aseguran a súa reprodución mediante a polinización."
        },
        {
            question: "Que é o COMENSALISMO?",
            answers: [
                "É unha relación de depredación",
                "É unha relación na que un ser vivo se alimenta dos restos de comida doutro ser vivo sen causarlle beneficio nin prexuízo",
                "É unha loita entre dúas especies",
                "É a destrución dun ecosistema"
            ],
            correct: 1,
            explanation: "✅ No comensalismo, un organismo aproveita os restos doutro sen afectalo positiva nin negativamente."
        },
        {
            question: "Cal é un exemplo de COMENSALISMO?",
            answers: [
                "Un oso cazando un peixe",
                "Os peixes rémora que se alimentan dos restos de alimentos das quenllas",
                "Unha árbore absorbendo auga",
                "Un paxaro poñendo ovos nun niño alleo"
            ],
            correct: 1,
            explanation: "✅ As rémoras obteñen alimento e transporte sen prexudicar ás quenllas."
        },
        {
            question: "Que tipo de relación ecolóxica falta por explicar ao final da páxina?",
            answers: [
                "O mutualismo",
                "A competencia",
                "O PARASITISMO (aínda que está mencionado, non se describe no fragmento visible)",
                "A reprodución sexual"
            ],
            correct: 2,
            explanation: "✅ O parasitismo é unha relación na que un organismo vive a costa doutro, prexudicándoo."
        },
        {
            question: "Que é o PARASITISMO?",
            answers: [
                "É unha relación na que dous organismos colaboran",
                "É unha relación onde UN SER VIVO OBTÉN UN BENEFICIO E O OUTRO RESULTA PERXUDICADO",
                "É unha relación onde todos se benefician",
                "É unha loita entre dúas especies distintas"
            ],
            correct: 1,
            explanation: "✅ No parasitismo, o parásito benefíciase mentres o hóspede sofre consecuencias negativas."
        },
        {
            question: "Podes dar un exemplo de PARASITISMO?",
            answers: [
                "Un paxaro facendo un niño",
                "Unha bolboreta sobre unha flor",
                "Si, as pulgas que viven sobre os cans e chuchanlles o sangue, producíndolles picor e prexuízo",
                "Un can que xoga cun neno"
            ],
            correct: 2,
            explanation: "✅ As pulgas obteñen alimento do sangue do can, mentres este sofre molestias e perda de saúde."
        },
        {
            question: "Que é A COMPETENCIA entre especies?",
            answers: [
                "Unha asociación onde todos se benefician",
                "É unha relación onde dúas especies teñen as mesmas necesidades e AMBAS SAEN PERXUDICADAS",
                "Unha relación de axuda mutua",
                "Un tipo de parasitismo"
            ],
            correct: 1,
            explanation: "✅ A competencia prodúcese cando os recursos son limitados e dúas especies loitan por eles, prexudicándose mutuamente."
        },
        {
            question: "Que exemplo se dá de COMPETENCIA?",
            answers: [
                "Unha árbore e unha planta trepadora",
                "Un cabalo comendo herba",
                "Os esquíos e os leiróns que compiten polos ocos das árbores onde vivir",
                "Un lobo cazando un cervo"
            ],
            correct: 2,
            explanation: "✅ Ambos animais precisan o mesmo espazo para vivir, xerando unha competencia directa por ese recurso."
        },
        {
            question: "Que é unha ESPECIE?",
            answers: [
                "Un grupo de animais da mesma cor",
                "Unha clase de alimento natural",
                "É un conxunto de seres vivos moi semellantes entre si que poden reproducirse e ter descendencia fértil",
                "Un grupo de ecosistemas diferentes"
            ],
            correct: 2,
            explanation: "✅ Os individuos dunha especie comparten características e poden reproducirse entre eles con éxito fértil."
        },
        {
        question: "Que é A POBOACIÓN?",
        answers: [
            "É o conxunto de todos os ecosistemas do planeta",
            "É o conxunto de todos os seres vivos dun ecosistema pertencentes á mesma especie",
            "É unha agrupación de hábitats diferentes",
            "É un grupo de comunidades biolóxicas"
        ],
        correct: 1,
        explanation: "✅ Unha poboación está formada por todos os individuos da mesma especie que viven nun lugar determinado."
    },
    {
        question: "Que é unha COMUNIDADE?",
        answers: [
            "Un grupo de persoas que viven nunha cidade",
            "Un lugar sen vida animal",
            "É o conxunto das poboacións dun ecosistema",
            "Só un grupo de plantas que comparten hábitat"
        ],
        correct: 2,
        explanation: "✅ A comunidade inclúe todas as especies que interactúan nun mesmo ecosistema."
    },
    {
        question: "Que é un ECOSISTEMA, segundo esta sección?",
        answers: [
            "Un tipo de bosque tropical",
            "Un grupo de seres vivos dunha soa especie",
            "É o conxunto de medio físico e seres vivos dun lugar",
            "Só o medio natural sen seres vivos"
        ],
        correct: 2,
        explanation: "✅ O ecosistema comprende tanto os elementos abióticos como os bióticos e as relacións entre eles."
    },
    {
        question: "Que fabrican os produtores a partir da enerxía do Sol e de materia inorgánica?",
        answers: [
            "Fabrican minerais para o solo",
            "Producen luz artificial",
            "Os produtores fabrican o seu alimento",
            "Crean aire puro"
        ],
        correct: 2,
        explanation: "✅ Os produtores realizan a fotosíntese usando luz solar, auga e dióxido de carbono para crear alimento."
    },
    {
        question: "Cales son os tipos de ecosistemas mencionados no documento?",
        answers: [
            "O deserto, a sabana e o campo de golf",
            "O bosque, a selva e a granxa",
            "O bosque, o litoral e a cidade",
            "O río, o volcán e o glaciar"
        ],
        correct: 2,
        explanation: "✅ Estes ecosistemas representan medios naturais (bosque e litoral) e humanizados (cidade)."
    },
    {
        question: "Que tipo de ecosistema é o bosque?",
        answers: [
            "Humanizado",
            "Natural terrestre",
            "Artificial acuático",
            "Urbano subterráneo"
        ],
        correct: 1,
        explanation: "✅ O bosque é un ecosistema natural situado en terra firme, con abundante vexetación e biodiversidade."
    },
    {
        question: "Que tipo de ecosistema é o litoral?",
        answers: [
            "Urbano",
            "Natural mixto",
            "Só mariño",
            "Artificial terrestre"
        ],
        correct: 1,
        explanation: "✅ O litoral combina elementos terrestres e mariños, sendo un ecosistema natural de transición."
    },
    {
        question: "Que tipo de ecosistema é a cidade?",
        answers: [
            "Bosque urbano",
            "Litoral natural",
            "Humanizado",
            "Natural forestal"
        ],
        correct: 2,
        explanation: "✅ A cidade é un ecosistema modificado polo ser humano, con pouca presenza de natureza salvaxe."
    },
    {
        question: "Que son os PARQUES NACIONAIS?",
        answers: [
            "Zonas urbanas con árbores protexidas",
            "Son áreas naturais pouco transformadas pola explotación humana que posúen ecosistemas representativos ou nos que se localiza fauna e flora singular",
            "Lugares de recreo con xogos e fontes",
            "Fermosos lugares turísticos sen fauna"
        ],
        correct: 1,
        explanation: "✅ Os parques nacionais teñen alto valor ecolóxico e están protexidos para conservar a biodiversidade."
    },
        {
            question: "Cal é a función principal das RESERVAS NATURAIS?",
            answers: [
                "Organizar eventos culturais",
                "Fomentar a construción de hoteis ecolóxicos",
                "Protexer ecosistemas que se consideran dunha especial importancia",
                "Promover o turismo masivo"
            ],
            correct: 2,
            explanation: "✅ As reservas naturais están destinadas á conservación de hábitats e especies prioritarias."
        },
        {
            question: "Para que se crean as ÁREAS MARIÑAS?",
            answers: [
                "Para instalar plataformas petrolíferas",
                "Para protexer ecosistemas mariños de especial importancia",
                "Para facer deportes acuáticos de motor",
                "Para explotar recursos minerais do fondo mariño"
            ],
            correct: 1,
            explanation: "✅ As áreas mariñas protexidas aseguran a conservación de zonas oceánicas e costeiras vulnerables."
        },
        {
        question: "Que son os MONUMENTOS NATURAIS?",
        answers: [
            "Son parques de atraccións naturais",
            "Son espazos ou elementos da natureza nos que se localizan formacións de especial rareza ou beleza",
            "Son xacementos arqueolóxicos antigos",
            "Son áreas urbanas con árbores singulares"
        ],
        correct: 1,
        explanation: "✅ Estes monumentos destacan por características xeolóxicas, biolóxicas ou paisaxísticas únicas."
    },
    {
        question: "Que son as PAISAXES PROTEXIDAS?",
        answers: [
            "Son partes do territorio que se consideran merecedoras dunha protección especial polos seus valores naturais, estéticos ou culturais",
            "Son áreas destinadas á agricultura intensiva",
            "Son paisaxes creadas por intelixencia artificial",
            "Son espazos con actividade industrial limitada"
        ],
        correct: 0,
        explanation: "✅ As paisaxes protexidas valoran a beleza e significado cultural, ademais da súa riqueza natural."
    },
    {
        question: "Que fabrican os produtores a partir da enerxía do Sol e de materia inorgánica?",
        answers: [
            "Fabrican enerxía eléctrica",
            "Fabrican dióxido de carbono",
            "Fabrican o seu alimento",
            "Fabrican fertilizantes minerais"
        ],
        correct: 2,
        explanation: "✅ Os produtores usan a luz solar e materia inorgánica para fabricar o seu propio alimento mediante a fotosíntese."
    },
    {
        question: "Como vai pasando a materia e enerxía aos outros seres vivos?",
        answers: [
            "Mediante a respiración",
            "Mediante as relacións de alimentación",
            "Mediante a descomposición",
            "Mediante o transporte celular"
        ],
        correct: 1,
        explanation: "✅ A materia e a enerxía transmítense a través das cadeas alimentarias entre produtores, consumidores e descompoñedores."
    },
    {
        question: "Que fan os descompoñedores coa materia e enerxía que chega a eles?",
        answers: [
            "Volven a deixar dispoñible para os produtores",
            "Eliminan a materia do ecosistema",
            "Aproveitan para producir calor",
            "Transforman a materia en enerxía solar"
        ],
        correct: 0,
        explanation: "✅ Os descompoñedores descompoñen materia orgánica e devolven nutrientes ao medio para que os produtores os poidan reutilizar."
    },
    {
        question: "Que pasa coa materia que non é consumida polos consumidores?",
        answers: [
            "Transforma en enerxía solar",
            "É eliminada polos produtores",
            "Váiselle perdendo en forma de feces",
            "Queda almacenada no aire"
        ],
        correct: 2,
        explanation: "✅ Parte da materia que non é dixerida polos consumidores excrétense en forma de feces, sendo aproveitada por descompoñedores."
    },
    {
        question: "Que tipo de ecosistema é o bosque?",
        answers: [
            "Natural acuático",
            "Natural mixto",
            "Natural terrestre",
            "Humanizado"
        ],
        correct: 2,
        explanation: "✅ O bosque é un ecosistema natural que se desenvolve sobre terra firme, con gran diversidade biolóxica."
    },
    {
        question: "Que tipo de plantas son os produtores no bosque?",
        answers: [
            "Plantas acuáticas",
            "Plantas flotantes",
            "Árbores e plantas fixas ao solo",
            "Algas mariñas"
        ],
        correct: 2,
        explanation: "✅ No bosque, os produtores son principalmente árbores e outras plantas fixas que realizan a fotosíntese."
    },
    {
        question: "Que tipo de animais forman os consumidores primarios no bosque?",
        answers: [
            "Animais carnívoros",
            "Animais herbívoros",
            "Animais descompoñedores",
            "Animais omnívoros"
        ],
        correct: 1,
        explanation: "✅ Os consumidores primarios aliméntanse de vexetais, e son herbívoros como cervos, coellos ou insectos fitófagos."
    },
    {
        question: "Que tipo de organismos son os consumidores secundarios no bosque?",
        answers: [
            "Plantas produtoras",
            "Animais herbívoros",
            "Fungos e bacterias",
            "Animais carnívoros e omnívoros"
        ],
        correct: 3,
        explanation: "✅ Os consumidores secundarios aliméntanse doutros animais e poden ser carnívoros ou omnívoros."
    },
    {
        question: "Que pasa cos organismos mortos no bosque?",
        answers: [
            "Transforman en enerxía solar",
            "Son eliminados polos consumidores",
            "Quedan no solo sen descompoñerse",
            "Son descompostos por fungos e bacterias"
        ],
        correct: 3,
        explanation: "✅ Fungos e bacterias descompoñen os restos de organismos mortos, devolvendo nutrientes ao solo."
    },
    {
        question: "Que tipo de ecosistema é o litoral?",
        answers: [
            "Natural mixto",
            "Natural terrestre",
            "Humanizado",
            "Artificial forestal"
        ],
        correct: 0,
        explanation: "✅ O litoral é un ecosistema natural mixto, con partes terrestres e acuáticas en contacto constante."
    },
    {
        question: "Que tipo de produtores hai no litoral?",
        answers: [
            "Árbores e plantas fixas ao solo",
            "Plantas flotantes",
            "Animais herbívoros",
            "Algas e fitoplancto"
        ],
        correct: 3,
        explanation: "✅ No litoral, os principais produtores son as algas e o fitoplancto, que realizan a fotosíntese no medio acuático."
    },
    {
        question: "Como son os consumidores no litoral?",
        answers: [
            "Moi variados, tanto dentro da auga como fóra dela",
            "Só herbívoros",
            "Só carnívoros",
            "Só omnívoros"
        ],
        correct: 0,
        explanation: "✅ O litoral presenta gran diversidade de consumidores, que viven tanto no medio terrestre como no acuático."
    },
    {
    question: "Que tipo de ecosistema é a cidade?",
    answers: ["Natural terrestre", "Natural acuático", "Humanizado", "Natural mixto"],
    correct: 2,
    explanation: "✅ A cidade é un ecosistema humanizado, creado e modificado polo ser humano."
},
    {
        question: "Quen son os seres vivos principais na cidade?",
        answers: ["Os animais herbívoros", "O ser humano", "As plantas produtoras", "Os fungos e bacterias"],
        correct: 1,
        explanation: "✅ Na cidade, o ser humano é o principal ser vivo e o que máis inflúe no ecosistema."
    },
    {
        question: "Cal é o medio físico da cidade?",
        answers: ["Solo natural", "Praias e cantís", "Construcións feitas polo home", "Árbores e plantas fixas ao solo"],
        correct: 2,
        explanation: "✅ O medio físico da cidade está formado por construcións artificiais, como edificios e estradas."
    },
    {
        question: "QUE FABRICAN OS PRODUTORES a partir da enerxía do Sol e de materia inorgánica?",
        answers: ["Fabrican enerxía eléctrica", "Fabrican materia orgánica", "Fabrican dióxido de carbono", "Fabrican o seu alimento"],
        correct: 3,
        explanation: "✅ Os produtores elaboran o seu propio alimento a través da fotosíntese usando enerxía solar e materia inorgánica."
    },
    {
        question: "COMO PASA A MATERIA E ENERXÍA aos outros seres vivos?",
        answers: ["Mediante a fotosíntese", "Mediante a respiración", "Mediante as relacións de alimentación", "Mediante a descomposición"],
        correct: 2,
        explanation: "✅ A materia e enerxía transfírense a través da cadea alimentaria entre produtores, consumidores e descompoñedores."
    },
    {
        question: "QUE FAN OS DESCOMPOÑEDORES coa materia e enerxía que chega a eles?",
        answers: ["Consomen toda a materia", "Volven a deixar dispoñible para os produtores", "Transforman a materia en enerxía eléctrica", "Eliminan a materia do ecosistema"],
        correct: 1,
        explanation: "✅ Os descompoñedores transforman a materia orgánica en nutrientes dispoñibles para os produtores."
    },
    {
        question: "QUE PASA COA MATERIA QUE NON É CONSUMIDA polos consumidores?",
        answers: ["É eliminada polos produtores", "Transforma en enerxía solar", "Váiselle perdendo en forma de feces", "Queda almacenada no solo"],
        correct: 2,
        explanation: "✅ Parte da materia non consumida excrétense como feces e é aproveitada polos descompoñedores."
    },
    {
        question: "TIPO DE ECOSISTEMA: BOSQUE",
        answers: ["Natural acuático", "Natural mixto", "Humanizado", "Natural terrestre"],
        correct: 3,
        explanation: "✅ O bosque é un ecosistema natural que se desenvolve sobre terra firme."
    },
    {
        question: "TIPO DE PLANTAS PRODUTORAS NO BOSQUE",
        answers: ["Plantas flotantes", "Árbores e plantas fixas ao solo", "Plantas acuáticas", "Algas e fitoplancto"],
        correct: 1,
        explanation: "✅ No bosque, os produtores son principalmente árbores e plantas fixas ao solo que fan fotosíntese."
    },
    {
        question: "TIPO DE ANIMAIS CONSUMIDORES PRIMARIOS NO BOSQUE",
        answers: ["Animais descompoñedores", "Animais carnívoros", "Animais herbívoros", "Animais omnívoros"],
        correct: 2,
        explanation: "✅ Os consumidores primarios no bosque son herbívoros que se alimentan das plantas."
    }



           


        ],
    ccssudfour: [
       {
        question: "Cal é a lei principal do Estado español?",
        answers: ["O Estatuto de Autonomía", "A Constitución de 1978", "O Código Civil", "A Lei Electoral"],
        correct: 1,
        explanation: "✅ A Constitución de 1978 é a lei principal do Estado español."
    },
    {
        question: "Que recolle a Constitución en relación aos cidadáns?",
        answers: ["Só os deberes", "Só as liberdades", "Dereitos, deberes e liberdades dos cidadáns", "Só os dereitos"],
        correct: 2,
        explanation: "✅ A Constitución recolle os dereitos, deberes e liberdades dos cidadáns."
    },
    {
        question: "Que forma de goberno ten España segundo a súa organización política?",
        answers: ["Dictadura", "Monarquía e división de poderes", "República centralista", "Confederación de estados"],
        correct: 1,
        explanation: "✅ España é unha monarquía con división de poderes segundo a súa organización política."
    },
    {
        question: "Cal é a capital do Estado segundo a Constitución?",
        answers: ["Barcelona", "Sevilla", "Madrid", "Valencia"],
        correct: 2,
        explanation: "✅ Segundo a Constitución, a capital do Estado é Madrid."
    },
    {
        question: "Que recolle a Constitución sobre as linguas en España?",
        answers: ["Só recoñece o castelán", "Prohíbe outras linguas", "Recolle as linguas oficiais", "Non menciona as linguas"],
        correct: 2,
        explanation: "✅ A Constitución recolle as linguas oficiais en España."
    },
    {
        question: "Cal é a función dos símbolos do Estado?",
        answers: ["Son exclusivos das comunidades autónomas", "Identifican e diferencian o Estado dos demais países", "Non teñen función legal", "Sirven para decorar edificios públicos"],
        correct: 1,
        explanation: "✅ Os símbolos do Estado identifican e diferencian a España doutros países."
    },
    {
        question: "Cales son os tres símbolos principais do Estado?",
        answers: ["A moeda, o DNI e o pasaporte", "A bandeira española, o himno e o escudo", "A lingua, a historia e a cultura", "O presidente, o parlamento e a policía"],
        correct: 1,
        explanation: "✅ Os tres símbolos principais do Estado son a bandeira española, o himno e o escudo."
    },
    {
        question: "Cantas comunidades autónomas ten España?",
        answers: ["Ten 15 comunidades autónomas", "Ten 17 comunidades autónomas", "Ten 20 comunidades autónomas", "Ten 19 comunidades autónomas"],
        correct: 1,
        explanation: "✅ España está composta por 17 comunidades autónomas."
    },
    {
        question: "Que outras entidades territoriais existen ademais das comunidades autónomas?",
        answers: ["Tres distritos federais", "Cinco rexións especiais", "Dúas cidades autónomas: Ceuta e Melilla", "Unha illa autónoma"],
        correct: 2,
        explanation: "✅ Ademais das comunidades autónomas, existen dúas cidades autónomas: Ceuta e Melilla."
    },
    {
        question: "Que documento regula as leis e órganos de goberno das comunidades autónomas?",
        answers: ["O código territorial", "O estatuto de autonomía", "A Constitución", "O regulamento parlamentario"],
        correct: 1,
        explanation: "✅ O estatuto de autonomía regula as leis e órganos de goberno das comunidades autónomas."
    },
    {
        question: "Cales son os órganos de goberno das comunidades autónomas?",
        answers: ["Goberno central, concello e policía", "Parlamento, Senado e monarquía", "Ministerios, consellerías e fiscalía", "Consello, parlamento e tribunal superior de xustiza"],
        correct: 3,
        explanation: "✅ Os órganos de goberno das comunidades autónomas son o consello, o parlamento e o tribunal superior de xustiza."
    },
    {
        question: "En cantas provincias está dividido o Estado español?",
        answers: ["En 17 provincias", "En 52 provincias", "En 25 provincias", "En 50 provincias"],
        correct: 3,
        explanation: "✅ O Estado español está dividido en 50 provincias."
    },
    {
        question: "Que órgano de goberno ten cada provincia?",
        answers: ["O Senado", "A Xunta", "A Deputación", "O Concello"],
        correct: 2,
        explanation: "✅ Cada provincia ten como órgano de goberno a Deputación."
    },
    {
        question: "Quen goberna un municipio?",
        answers: ["O presidente da Deputación", "Un alcalde e os concelleiros", "O gobernador civil", "O Parlamento autonómico"],
        correct: 1,
        explanation: "✅ Un municipio é gobernado por un alcalde e os concelleiros."
    },
    {
        question: "Cal é a unidade administrativa básica do Estado español?",
        answers: ["A comarca", "A provincia", "O municipio", "A parroquia"],
        correct: 2,
        explanation: "✅ O municipio é a unidade administrativa básica do Estado español."
    },
    {
        question: "Como se chama o órgano de goberno dun municipio?",
        answers: ["A deputación", "O goberno central", "O concello", "A xunta parroquial"],
        correct: 2,
        explanation: "✅ O órgano de goberno dun municipio chámase concello."
    },
    {
        question: "Como están formados os municipios?",
        answers: ["Por distritos electorais", "Por barrios", "Por unha ou varias localidades chamadas parroquias", "Por un único núcleo urbano"],
        correct: 2,
        explanation: "✅ Os municipios están formados por unha ou varias localidades chamadas parroquias."
    },
    {
        question: "En que se dividen os concellos?",
        answers: ["En provincias", "En comarcas", "En distritos", "En parroquias"],
        correct: 3,
        explanation: "✅ Os concellos divídense en parroquias."
    },
    {
        question: "Que compón unha parroquia?",
        answers: ["Un distrito administrativo", "Un único núcleo urbano", "Un grupo de municipios", "Varias aldeas cun núcleo central onde se localiza a igrexa"],
        correct: 3,
        explanation: "✅ Unha parroquia está composta por varias aldeas cun núcleo central onde se localiza a igrexa."
    },
    {
        question: "Cantas parroquias hai aproximadamente en Galicia?",
        answers: ["100 parroquias", "500 parroquias", "Máis de 10.000 parroquias", "Arredor de 3.000 parroquias"],
        correct: 3,
        explanation: "✅ En Galicia hai arredor de 3.000 parroquias."
    },
    {
        question: "Que forma unha comarca?",
        answers: ["Un grupo de provincias", "Un único municipio", "Un grupo de parroquias", "Un grupo de concellos"],
        correct: 3,
        explanation: "✅ Unha comarca está formada por un grupo de concellos."
    },
    {
        question: "Cantas comarcas hai en Galicia?",
        answers: ["17 comarcas", "25 comarcas", "53 comarcas", "100 comarcas"],
        correct: 2,
        explanation: "✅ En Galicia hai 53 comarcas."
    },
    {
        question: "Quen é o Xefe do Estado?",
        answers: ["O Ministro da Defensa", "O Presidente do Congreso", "O Presidente do Goberno", "O Rei Felipe VI"],
        correct: 3,
        explanation: "✅ O Xefe do Estado é o Rei Felipe VI."
    },
    {
        question: "Cales son as funcións do Xefe do Estado?",
        answers: ["Elaborar leis e gobernar", "Controlar o Congreso", "Xestionar as comarcas", "Representar España, sancionar as leis e mando das Forzas Armadas"],
        correct: 3,
        explanation: "✅ O Xefe do Estado representa España, sanciona as leis e exerce o mando das Forzas Armadas."
    },
    {
        question: "Que poder representa o Xefe do Estado?",
        answers: ["O poder Executivo", "O poder Lexislativo", "O poder Xudicial", "Non exerce un poder concreto"],
        correct: 3,
        explanation: "✅ O Xefe do Estado non exerce un poder concreto, actúa como figura representativa."
    },
    {
        question: "Quen forma o Goberno Central?",
        answers: ["Os alcaldes e gobernadores", "O Rei e os ministros", "O Congreso e o Senado", "O Presidente e os Ministros"],
        correct: 3,
        explanation: "✅ O Goberno Central está formado polo Presidente e os Ministros."
    },
    {
        question: "Que funcións ten o Goberno Central?",
        answers: ["Facer cumprir as sentenzas xudiciais", "Designar os concelleiros", "Presidir o Senado", "Dirixir o Estado: educación, sanidade, medio ambiente, interior..."],
        correct: 3,
        explanation: "✅ O Goberno Central dirixe o Estado en materias como educación, sanidade, medio ambiente e interior."
    },
    {
        question: "Que poder exerce o Goberno Central?",
        answers: ["O poder Lexislativo", "O poder Xudicial", "Non exerce ningún poder", "O poder Executivo"],
        correct: 3,
        explanation: "✅ O Goberno Central exerce o poder Executivo."
    },
    {
        question: "Que órganos forman as Cortes Xerais?",
        answers: ["O Parlamento Europeo e a Deputación", "O Consello de Ministros e o Tribunal Constitucional", "O Concello e a Xunta", "O Congreso dos Deputados e o Senado"],
        correct: 3,
        explanation: "✅ As Cortes Xerais están formadas polo Congreso dos Deputados e o Senado."
    },
    {
        question: "Cales son as funcións das Cortes Xerais?",
        answers: ["Dirixir o Estado e organizar eleccións", "Elaborar leis, aprobar leis e controlar o goberno", "Designar xuíces e controlar concellos", "Representar as comunidades autónomas"],
        correct: 1,
        explanation: "✅ As funcións das Cortes Xerais son elaborar leis, aprobadas leis e controlar o goberno."
    },
    {
        question: "Que poder representan as Cortes Xerais?",
        answers: ["O poder Xudicial", "O poder Executivo", "O poder Lexislativo", "O poder Municipal"],
        correct: 2,
        explanation: "✅ As Cortes Xerais representan o poder Lexislativo."
    },
    {
        question: "Que compón o Tribunal de Xustiza?",
        answers: ["O Parlamento e o Senado", "As comarcas e parroquias", "O Tribunal Supremo e o Tribunal Constitucional", "Os concellos e deputacións"],
        correct: 2,
        explanation: "✅ O Tribunal de Xustiza está composto polo Tribunal Supremo e o Tribunal Constitucional."
    },
    {
        question: "Que función ten o Tribunal de Xustiza?",
        answers: ["Administrar municipios", "Presidir o goberno", "Elaborar leis", "Xulgar e impor sancións"],
        correct: 3,
        explanation: "✅ O Tribunal de Xustiza ten como función xulgar e impor sancións."
    },
    {
        question: "Que poder representa o Tribunal de Xustiza?",
        answers: ["O poder Executivo", "O poder Xudicial", "O poder Lexislativo", "O poder Local"],
        correct: 1,
        explanation: "✅ O Tribunal de Xustiza representa o poder Xudicial."
    },
    {
        question: "Cal é a lei suprema de cada comunidade autónoma?",
        answers: ["O Regulamento Parlamentario", "A Constitución", "O Estatuto de Autonomía", "O Código Civil"],
        correct: 2,
        explanation: "✅ A lei suprema de cada comunidade autónoma é o Estatuto de Autonomía."
    },
    {
        question: "Que datos reflexa o Estatuto de Autonomía dunha comunidade?",
        answers: ["Só a lingua oficial", "Só as institucións políticas", "Nome, territorio, capital, símbolos, lingua oficial, institucións de goberno, dereitos e deberes dos cidadáns", "Só o nome e a capital"],
        correct: 2,
        explanation: "✅ O Estatuto de Autonomía reflexa o nome, territorio, capital, símbolos, lingua oficial, institucións de goberno e os dereitos e deberes dos cidadáns."
    },
    {
        question: "Cando foi aprobado o Estatuto de Autonomía de Galicia?",
        answers: ["O 6 de decembro de 1978", "O 15 de maio de 1982", "O 14 de abril de 1981", "O 21 de decembro de 1980"],
        correct: 3,
        explanation: "✅ O Estatuto de Autonomía de Galicia foi aprobado o 21 de decembro de 1980."
    },
    {
        question: "Quen é o actual Presidente da Xunta?",
        answers: ["Ana Pontón", "Alfonso Rueda", "Alberto Núñez Feijóo", "Emilio Pérez Touriño"],
        correct: 1,
        explanation: "✅ O actual Presidente da Xunta é Alfonso Rueda."
    },
    {
        question: "Cales son as funcións do Presidente da Xunta?",
        answers: ["Preside o Parlamento", "Dirixe o Tribunal de Xustiza", "É o máximo representante e ten o mando da Xunta", "Controla as deputacións"],
        correct: 2,
        explanation: "✅ O Presidente da Xunta é o máximo representante e ten o mando da Xunta."
    },
    {
        question: "Que compón o Consello de Goberno da Xunta de Galicia?",
        answers: ["O Senado e o Congreso", "Os Deputados e os Ministros", "O Parlamento e os xuíces", "O Presidente e os Conselleiros"],
        correct: 3,
        explanation: "✅ O Consello de Goberno da Xunta de Galicia está composto polo Presidente e os Conselleiros."
    },
    {
        question: "Que funcións ten o Consello de Goberno?",
        answers: ["Presidir o Parlamento", "Dirixir a comunidade: educación, sanidade, medio ambiente, interior...", "Elaborar leis", "Xestionar as parroquias"],
        correct: 1,
        explanation: "✅ O Consello de Goberno dirixe a comunidade en materias como educación, sanidade, medio ambiente e interior."
    },
    {
        question: "Que compón o Parlamento de Galicia?",
        answers: ["Os senadores", "Os deputados", "Os xuíces", "Os conselleiros"],
        correct: 1,
        explanation: "✅ O Parlamento de Galicia está composto polos deputados."
    },
    {
        question: "Cales son as funcións do Parlamento?",
        answers: ["Administrar concellos", "Organizar eleccións municipais", "Dictar sentenzas", "Elaborar leis, aprobar leis e controlar o goberno"],
        correct: 3,
        explanation: "✅ As funcións do Parlamento son elaborar leis, aprobar leis e controlar o goberno."
    },
    {
        question: "Quen forma o Tribunal de Xustiza en Galicia?",
        answers: ["Conselleiros e parlamentarios", "Deputados e senadores", "Presidente e conselleiros", "Xuíces e xuízas"],
        correct: 3,
        explanation: "✅ O Tribunal de Xustiza en Galicia está formado por xuíces e xuízas."
    },
    {
        question: "Que funcións ten o Tribunal de Xustiza?",
        answers: ["Elaborar leis", "Aprobar orzamentos", "Xulgar e impor sancións", "Dirixir a Xunta"],
        correct: 2,
        explanation: "✅ O Tribunal de Xustiza ten como función xulgar e impor sancións."
    },
    {
        question: "Que inclúe a diversidade nas tradicións e costumes?",
        answers: ["Festas populares, comidas típicas, bailes tradicionais...", "As leis e os decretos", "Só gastronomía", "A relixión e a política"],
        correct: 0,
        explanation: "✅ A diversidade nas tradicións e costumes inclúe festas populares, comidas típicas e bailes tradicionais."
    },
    {
        question: "Cales son as catro linguas oficiais de España?",
        answers: ["Galego, portugués, catalán e árabe", "Castelán, galego, catalán e éuscaro", "Castelán, inglés, francés e galego", "Castelán, valenciano, latín e catalán"],
        correct: 1,
        explanation: "✅ As catro linguas oficiais de España son o castelán, galego, catalán e éuscaro."
    },
    {
        question: "Que reflicte a diversidade nos estilos e xeitos de vida?",
        answers: ["Diferenzas na moda e tecnoloxía", "Diferenzas nas actividades económicas: artesanía, agricultura, gandaría...", "Cambios nas leis", "O tamaño das cidades"],
        correct: 1,
        explanation: "✅ A diversidade nos estilos e xeitos de vida reflicte diferenzas nas actividades económicas como a artesanía, agricultura e gandaría."
    },
     {
        question: "Que implica vivir nun Estado democrático?",
        answers: ["A obediencia ao Rei", "A participación dos cidadáns na escolla dos seus representantes", "A ausencia de leis escritas", "A división relixiosa da sociedade"],
        correct: 1,
        explanation: "✅ Vivir nun Estado democrático implica a participación dos cidadáns na escolla dos seus representantes."
    },
    {
        question: "Para que serve o voto?",
        answers: ["Para elixir o Rei", "Para modificar a Constitución", "Para escoller os representantes do goberno (xerais), da comunidade (autonómicas) ou do concello (municipais)", "Para presentar propostas de lei"],
        correct: 2,
        explanation: "✅ O voto serve para escoller os representantes do goberno, da comunidade ou do concello."
    },
    {
        question: "A partir de que idade se pode votar en España?",
        answers: ["A partir dos 16 anos", "A partir dos 21 anos", "A partir dos 18 anos", "A partir dos 20 anos"],
        correct: 2,
        explanation: "✅ En España pódese votar a partir dos 18 anos."
    },
    {
        question: "Que é a poboación?",
        answers: ["É o número de animais nunha rexión", "É o conxunto de persoas que habitan ou ocupan un lugar", "É a superficie dun país", "É o número de casas nunha cidade"],
        correct: 1,
        explanation: "✅ A poboación é o conxunto de persoas que habitan ou ocupan un lugar."
    },
    {
        question: "Que é a natalidade?",
        answers: ["É o número de persoas que emigran", "É a idade media da poboación", "É o número de nacementos nunha poboación nun tempo determinado", "É o número de persoas que falecen"],
        correct: 2,
        explanation: "✅ A natalidade é o número de nacementos nunha poboación nun tempo determinado."
    },
    {
        question: "Que é a mortalidade?",
        answers: ["É o número de individuos que morren nunha poboación nun tempo determinado", "É o número de persoas que emigran", "É o número de nacementos", "É a esperanza de vida"],
        correct: 0,
        explanation: "✅ A mortalidade é o número de persoas que morren nunha poboación nun tempo determinado."
    },
    {
        question: "Que é o crecemento natural?",
        answers: ["É o número total de persoas nun país", "É o saldo migratorio", "É a diferenza entre o número de persoas que nacen e o número de persoas que falecen", "É o aumento da esperanza de vida"],
        correct: 2,
        explanation: "✅ O crecemento natural é a diferenza entre o número de nacementos e de defuncións."
    },
    {
        question: "Cando o crecemento natural é positivo?",
        answers: ["Cando hai menos poboación", "Cando hai máis inmigrantes que emigrantes", "Cando hai máis nacementos que defuncións", "Cando se aproban novas leis"],
        correct: 2,
        explanation: "✅ O crecemento natural é positivo cando hai máis nacementos que defuncións."
    },
    {
        question: "Cando o crecemento natural é negativo?",
        answers: ["Cando hai máis mulleres que homes", "Cando chega moita xente doutros países", "Cando hai máis defuncións que nacementos", "Cando a poboación aumenta"],
        correct: 2,
        explanation: "✅ O crecemento natural é negativo cando hai máis defuncións que nacementos."
    },
    {
        question: "Que é a emigración?",
        answers: ["É un movemento dentro dunha cidade", "É a natalidade alta nunha rexión", "É a chegada de persoas dun país", "É a saída de persoas dun determinado lugar para ir vivir a outro lugar"],
        correct: 3,
        explanation: "✅ A emigración é a saída de persoas dun lugar para ir vivir a outro."
    },
    {
        question: "Que é a emigración interior?",
        answers: ["Cando vai vivir a outro país", "Cando unha persoa se muda a outra zona pero dentro do mesmo país", "Cando emigra por causas relixiosas", "Cando se traslada dentro dunha cidade"],
        correct: 1,
        explanation: "✅ A emigración interior é cando unha persoa se muda a outra zona dentro do mesmo país."
    },
    {
        question: "Que é a emigración exterior?",
        answers: ["Cando unha persoa volve ao seu país", "Cando unha persoa se vai vivir a outro país", "Cando unha persoa cambia de cidade", "Cando unha persoa viaxa dentro do seu país"],
        correct: 1,
        explanation: "✅ A emigración exterior é cando unha persoa se vai vivir a outro país."
    },
    {
        question: "Que é a inmigración?",
        answers: ["É a chegada de persoas para asentarse e vivir nun lugar", "É o número de defuncións", "É a saída de persoas cara a outro país", "É o cambio de idioma"],
        correct: 0,
        explanation: "✅ A inmigración é a chegada de persoas para asentarse e vivir nun lugar."
    },
    {
        question: "Que é o saldo migratorio?",
        answers: ["É o crecemento natural dunha poboación", "É a suma de emigración e mortalidade", "É o número de persoas que nacen", "É a diferenza entre o número de emigrantes e o de inmigrantes"],
        correct: 3,
        explanation: "✅ O saldo migratorio é a diferenza entre o número de emigrantes e o de inmigrantes."
    },
    {
        question: "Cales son as causas das migracións económicas?",
        answers: ["As festas tradicionais", "As guerras civís", "As persecucións políticas", "A procura dun traballo mellor que incremente o nivel de vida"],
        correct: 3,
        explanation: "✅ As migracións económicas ocorren pola procura dun traballo mellor e un maior nivel de vida."
    },
    {
        question: "Cales son as causas das migracións naturais?",
        answers: ["As crises políticas", "A fame e o desemprego", "Desastres naturais como tsunamis ou terremotos que obrigan a mudar de lugar", "A busca de mellores escolas"],
        correct: 2,
        explanation: "✅ As migracións naturais son causadas por desastres naturais como tsunamis ou terremotos."
    },
    {
        question: "Cales son as causas das migracións políticas?",
        answers: ["A busca de emprego", "Guerras ou persecucións políticas contra grupos étnicos e/ou culturais", "As festas populares", "As mudanzas climáticas"],
        correct: 1,
        explanation: "✅ As migracións políticas ocorren por guerras ou persecucións a grupos étnicos e culturais."
    },
    {
        question: "Cales son as causas das migracións relixiosas?",
        answers: ["Cuestións de relixión, crenzas, etc.", "Falta de vivenda", "Problemas ambientais", "A busca de traballo"],
        correct: 0,
        explanation: "✅ As migracións relixiosas están motivadas por cuestións de relixión, crenzas e ideoloxías."
    },
    {
        question: "Cal é unha consecuencia demográfica das migracións?",
        answers: ["A poboación mantense igual en todos os lugares", "A natalidade aumenta en todos os países", "Non afecta á poboación", "A poboación aumenta no lugar de destino e diminúe no lugar de orixe"],
        correct: 3,
        explanation: "✅ A consecuencia demográfica das migracións é que a poboación aumenta no lugar de destino e diminúe no lugar de orixe."
    },
    {
        question: "Cal é unha consecuencia económica das migracións?",
        answers: ["As empresas pechan", "O nivel de vida baixa en todos os lugares", "O lugar de orixe perde man de obra e o lugar de destino recibe man de obra laboral", "Aumentan os salarios en todos os países"],
        correct: 2,
        explanation: "✅ As migracións teñen como consecuencia económica a perda de man de obra no lugar de orixe e a chegada de man de obra ao destino."
    },
    {
        question: "Cal é unha consecuencia sociocultural das migracións?",
        answers: ["O lugar de destino recibe novas tradicións culturais, aínda que tamén pode haber rexeitamento ou discriminación", "Todos adoptan as mesmas tradicións", "A cultura desaparece", "Os inmigrantes non conservan a súa identidade"],
        correct: 0,
        explanation: "✅ As migracións poden traer novas tradicións culturais ao lugar de destino, pero tamén poden xerar rexeitamento ou discriminación."
    },
    {
        question: "Que é a densidade de poboación?",
        answers: ["É a porcentaxe de poboación activa", "É o número de edificios nunha cidade", "É a relación entre o número de habitantes dun territorio e o espazo que ocupa", "É o número total de habitantes dun país"],
        correct: 2,
        explanation: "✅ A densidade de poboación é a relación entre o número de habitantes dun territorio e o espazo que ocupa."
    },
    {
        question: "Como se calcula a densidade de poboación?",
        answers: ["Dividindo o número de habitantes dun lugar entre a superficie do territorio que ocupa", "Restando habitantes á superficie", "Multiplicando a superficie polo número de habitantes", "Sumando habitantes e superficie"],
        correct: 0,
        explanation: "✅ A densidade de poboación calcúlase dividindo o número de habitantes entre a superficie do territorio."
    },
    {
        question: "Que factores físicos favorecen a densidade de poboación?",
        answers: ["Terreo chaira, clima temperado e cursos de auga abundante", "Falta de recursos naturais", "Zonas illadas e desérticas", "Altitudes elevadas e climas extremos"],
        correct: 0,
        explanation: "✅ Os factores físicos como o terreo chaira, o clima temperado e a abundancia de auga favorecen a densidade de poboación."
    },
    {
        question: "Que factores económicos favorecen a densidade de poboación?",
        answers: ["Falta de servizos básicos", "Maior riqueza e recursos para desenvolver actividades económicas", "Falta de traballo e pobreza", "Crise económica e emigración"],
        correct: 1,
        explanation: "✅ A riqueza e os recursos para desenvolver actividades económicas favorecen a densidade de poboación."
    },
     {
        question: "Onde se concentra maioritariamente a poboación española?",
        answers: ["No interior peninsular", "Na costa e nas illas, excepto Madrid", "Nas zonas rurais de montaña", "En pequenas aldeas"],
        correct: 1,
        explanation: "✅ A poboación española concéntrase maioritariamente na costa e nas illas, agás Madrid."
    },
    {
        question: "Onde é máis densa a poboación dentro dunha provincia?",
        answers: ["Nas vilas máis que nas cidades", "Nas cidades máis que nas vilas", "Nas zonas rurais", "Nas montañas"],
        correct: 1,
        explanation: "✅ A densidade de poboación é maior nas cidades que nas vilas dentro dunha mesma provincia."
    },
    {
        question: "Cal é a situación da poboación galega?",
        answers: ["Toda a poboación vive nas cidades", "Hai máis xente no interior que na costa", "Está moi desigualmente repartida: máis xente vive na costa que no interior, agás Lugo e Ourense", "A poboación está repartida de xeito uniforme"],
        correct: 2,
        explanation: "✅ A poboación galega está desigualmente repartida, concentrándose máis na costa ca no interior, excepto en Lugo e Ourense."
    },
    {
        question: "Que é a poboación activa?",
        answers: ["Son persoas menores de 16 anos", "É a xente que está xubilada", "Son as persoas maiores de 16 anos que poden traballar", "Son todos os nenos e nenas"],
        correct: 2,
        explanation: "✅ A poboación activa inclúe as persoas maiores de 16 anos que poden traballar."
    },
    {
        question: "Que é a poboación ocupada?",
        answers: ["Son persoas que traballan sen cobrar", "Son estudantes universitarios", "Son persoas en idade de traballar pero sen emprego", "Son as persoas que teñen un traballo, cobran un salario e están a cotizar"],
        correct: 3,
        explanation: "✅ A poboación ocupada está formada por persoas que teñen un traballo, cobran un salario e cotizan á Seguridade Social."
    },
    {
        question: "Que é a poboación parada?",
        answers: ["É a formada por persoas que están en paro ou buscando o seu primeiro emprego", "É a poboación que traballa sen contrato", "Son persoas que non poden traballar por enfermidade", "Son estudantes universitarios"],
        correct: 0,
        explanation: "✅ A poboación parada inclúe persoas sen emprego que están buscando traballo ou o seu primeiro emprego."
    },
    {
        question: "Que é a poboación non activa ou inactiva?",
        answers: ["Son persoas que fan prácticas laborais", "É a xente que cambia de sector laboral", "Son persoas que traballan no estranxeiro", "Son aquelas persoas que non poden traballar ou que traballan sen recibir remuneración, como estudantes, xubilados, amas de casa ou voluntarios"],
        correct: 3,
        explanation: "✅ A poboación non activa ou inactiva inclúe estudantes, xubilados, amas de casa ou voluntarios."
    },
    {
        question: "Que é o sector primario?",
        answers: ["É o sector que fabrica tecnoloxía", "É o sector que obtén os produtos directamente da natureza", "É o sector financeiro", "É o sector que ofrece servizos"],
        correct: 1,
        explanation: "✅ O sector primario obtén produtos directamente da natureza, como a agricultura, gandería e pesca."
    },
    {
        question: "Que produtos destaca o sector primario en España?",
        answers: ["Vacas, cabalos, mazás e trigo sarraceno", "Soia, algodón, peixe tropical", "Aceite de palma, arroz, café, cacao", "Cebada, trigo, patacas, leituga, tomates, cebola, porco e vacún"],
        correct: 3,
        explanation: "✅ No sector primario en España destacan produtos como a cebada, trigo, patacas, leituga, tomates, cebola, porco e vacún."
    },
    {
        question: "Que é o sector secundario?",
        answers: ["É o que produce alimentos naturais", "É o sector dos servizos públicos", "É o que transforma as materias primas en produtos semielaborados ou elaborados", "É o sector que regula os impostos"],
        correct: 2,
        explanation: "✅ O sector secundario transforma materias primas en produtos semielaborados ou elaborados."
    },
    {
        question: "En que lugar está España na produción de automóbiles?",
        answers: ["No terceiro posto mundial", "No décimo posto de Europa", "No primeiro posto mundial", "No posto número nove do mundo e no segundo de Europa"],
        correct: 3,
        explanation: "✅ España ocupa o posto número nove do mundo e o segundo de Europa na produción de automóbiles."
    },
    {
        question: "Que é o sector terciario?",
        answers: ["É o sector que se dedica á agricultura", "É o sector da minería", "Tamén chamado sector de servizos, non produce bens, senón ofrece servizos", "É o que transforma materias primas"],
        correct: 2,
        explanation: "✅ O sector terciario, tamén chamado sector de servizos, ofrece servizos e non produce bens materiais."
    },
    {
        question: "Que actividades destacan no sector terciario?",
        answers: ["A construción, a fabricación de coches e a metalurxia", "A agricultura, a pesca e a minería", "O transporte marítimo e a produción de enerxía", "A banca, o comercio, a medicina, a educación e a hostalería"],
        correct: 3,
        explanation: "✅ No sector terciario destacan actividades como a banca, o comercio, a medicina, a educación e a hostalería."
    }
        
       
    ],
    ccnnFive: [
     {
            question: "Que é unha máquina segundo o texto?",
            answers: ["Un aparello que produce enerxía", "Un obxecto decorativo", "Un obxecto que axuda a realizar unha tarefa ou resolve un problema", "Un ser vivo que actúa mecanicamente"],
            correct: 2,
            explanation: "✅ Unha máquina facilita tarefas ou resolve problemas, como di o texto."
        },
      {
            question: "Cita tres fontes de ENERXÍA PARA FUNCIONAR AS MÁQUINAS.",
            answers: ["Enerxía nuclear, enerxía escura e enerxía mental", "Só enerxía solar", "A forza da gravidade e a forza centrífuga", "Enerxía humana, enerxía eléctrica e enerxía do vento"],
            correct: 3,
            explanation: "✅ O texto menciona claramente a enerxía humana, eléctrica e do vento como fontes."
     },
        {
            question: "Que diferencia hai entre MÁQUINAS SIMPLES e MÁQUINAS COMPOSTAS?",
            answers: ["As compostas non funcionan con enerxía", "As simples teñen poucas pezas e as compostas son máis complexas", "As compostas son sempre electrónicas", "As simples son eléctricas"],
            correct: 1,
            explanation: "✅ As máquinas compostas teñen varias pezas e funcionamento máis complexo."
        },
        {
            question: "Que é unha PANCA e como funciona?",
            answers: ["É unha máquina composta de engrenaxes", "É unha barra ríxida que xira arredor dun punto de apoio", "É un tipo de polea", "É unha roda dentada"],
            correct: 1,
            explanation: "✅ A panca transmite forza e permite mover resistencias mediante un punto de apoio."
        },
        {
            question: "En que se diferencia unha PANCA DE 1º XÉNERO dunha de 3º XÉNERO?",
            answers: ["A de 3º xénero ten máis pezas", "Ambas son iguais", "A de 1º xénero non funciona sen electricidade", "Na de 1º xénero o punto de apoio está no centro, na de 3º xénero a potencia está no centro"],
            correct: 3,
            explanation: "✅ A posición relativa do punto de apoio, potencia e resistencia é o que cambia entre os xéneros."
        },
        {
            question: "Para que serve un PLANO INCLINADO?",
            answers: ["Para iluminar un espazo", "Para transmitir electricidade", "Para facilitar a subida ou baixada de persoas e obxectos", "Para medir distancias"],
            correct: 2,
            explanation: "✅ O plano inclinado é unha rampla que facilita o movemento de obxectos pesados."
        },
        {
            question: "Que partes ten unha POLEA?",
            answers: ["Motor, eixe e hélice", "Cámara, roda e piñón", "Cubo, garganta e corpo", "Tubo, fío e volante"],
            correct: 2,
            explanation: "✅ Son as tres partes que permiten o funcionamento da polea segundo o texto."
        },
        {
            question: "Que é un OPERADOR nunha MÁQUINA COMPOSTA?",
            answers: ["Unha peza electrónica que se programa", "Un tipo de enerxía", "Un ser humano que manexa máquinas", "Un elemento con función determinada na máquina"],
            correct: 3,
            explanation: "✅ Os operadores cumpren funcións específicas dentro dunha máquina composta."
        },
        {
            question: "Que é un MECANISMO?",
            answers: ["Un motor de gasolina", "Un sistema de iluminación", "Un tipo de panca", "Un conxunto de operadores que transmiten ou transforman movemento"],
            correct: 3,
            explanation: "✅ O mecanismo é a combinación de operadores que producen movemento."
        },
        {
            question: "Que é un ROBOT?",
            answers: ["Unha ferramenta para escribir", "Unha aplicación informática", "Unha máquina creada para realizar tarefas como un ser humano ou animal", "Un vehículo con rodas"],
            correct: 2,
            explanation: "✅ Os robots imitan accións humanas ou animais e realizan tarefas específicas."
        }
        ,
                {
            question: "Que avances destacan na MEDICINA segundo o texto?",
            answers: ["Novo deseño de escaleiras", "Vacinas, anestesia, raios X e nanotecnoloxía", "Uso de poleas na cirurxía", "Aplicación de pancas nas consultas"],
            correct: 1,
            explanation: "✅ O texto destaca avances como vacinas, anestesia, raios X e nanotecnoloxía."
        },
        {
            question: "Que supuxo a aparición da VACINA da varíola en 1796?",
            answers: ["Un invento militar", "Un método para mellorar o transporte", "Un avance fundamental para combater enfermidades", "Unha técnica para conservar alimentos"],
            correct: 2,
            explanation: "✅ A vacina foi clave para evitar enfermidades como a varíola e a rabia."
        },
        {
            question: "Que é a ANESTESIA e quen a aplicou por primeira vez?",
            answers: ["Unha vacina descuberta por Pasteur", "Un medicamento moderno para a gripe", "Un método para evitar a dor, aplicado por Crawford W. Long", "Un sistema de raios X con vapor"],
            correct: 2,
            explanation: "✅ Long foi pioneiro ao realizar unha intervención sen dor usando éter."
        },
        {
            question: "Como se produce a AUGA POTABLE?",
            answers: ["Conxelándoa durante horas", "Mediante potabilización con filtración e produtos químicos", "Usando poleas e engrenaxes", "Por enerxía solar directa"],
            correct: 1,
            explanation: "✅ A potabilización é o proceso para facer a auga apta para o consumo humano."
        },
        {
            question: "Cita dous exemplos de CONSERVACIÓN DE ALIMENTOS.",
            answers: ["Corte con panca e trituración", "Refrixeración e pasteurización", "Iluminación e baleirado", "Anestesia e raios X"],
            correct: 1,
            explanation: "✅ O texto destaca métodos como refrixeración, conxelación e pasteurización."
        },
        {
            question: "Que significou a invención da RODA no TRANSPORTE?",
            answers: ["Foi usada para iluminar fogares", "Axudou a descubrir a enerxía eléctrica", "Servía para filtrar auga", "Permitíu desenvolver os primeiros medios de transporte por terra"],
            correct: 3,
            explanation: "✅ A roda foi un avance clave para a mobilidade do ser humano."
        },
        {
            question: "Que inventou James Watt e que supuxo iso?",
            answers: ["A vacina contra a rabia", "A máquina de vapor, que revolucionou o transporte e a industria", "A lámpada incandescente", "O primeiro teléfono móbil"],
            correct: 1,
            explanation: "✅ A máquina de vapor mellorou o transporte e o funcionamento das industrias."
        },
        {
            question: "Que obxectivo ten o transporte actual segundo o texto?",
            answers: ["Facer máis ruído", "Eliminar completamente os vehículos", "Volver ao transporte a pé", "Mellorar seguridade e reducir contaminación con enerxías limpas"],
            correct: 3,
            explanation: "✅ O foco está en motores eficientes e o uso de enerxías renovables."
        },
        {
            question: "Que importancia tivo a IMPRENTA na CULTURA E LECER?",
            answers: ["Creou novos medios de transporte", "Axudou a construír vivendas", "Permitiu difundir cultura a máis persoas de forma rápida e económica", "Substituíu a arte clásica"],
            correct: 2,
            explanation: "✅ A imprenta revolucionou o acceso á cultura e á información."
        },
        {
            question: "Que é o CINE e quen inventou o cinematógrafo?",
            answers: ["Un sistema para conservar alimentos", "Unha forma de arte clásica grega", "Un método para producir electricidade", "Un medio audiovisual creado polos irmáns Lumière"],
            correct: 3,
            explanation: "✅ O cine nace co cinematógrafo, unha máquina para filmar e proxectar imaxes."
        },
        {
            question: "Que avances se produciron no DEPORTE segundo o texto?",
            answers: ["Uso de robots no fútbol", "Conxelación de atletas", "Melloras tecnolóxicas no calzado e equipamento", "Eliminación da actividade física"],
            correct: 2,
            explanation: "✅ Os avances buscan mellorar o rendemento deportivo mediante tecnoloxía."
        },
        {
            question: "Que importancia tivo o fonógrafo na MÚSICA?",
            answers: ["Creaba música automaticamente", "Permitíu gravar e reproducir sons por primeira vez", "Substituíu todos os instrumentos", "Funcionaba como un teléfono"],
            correct: 1,
            explanation: "✅ A música comezou a ser gravada grazas ao fonógrafo de Edison."
        },
        {
            question: "Quen inventou o TELÉFONO e en que ano?",
            answers: ["Edison no século XX", "Marconi co apoio de Tesla", "Antonio Meucci en 1857, aínda que o patentou Graham Bell", "Pasteur no laboratorio"],
            correct: 2,
            explanation: "✅ Meucci creou o teletrófono e Bell rexistrou a patente."
        },
        {
            question: "Quen fixo a primeira transmisión por RADIO?",
            answers: ["Edison en 1901", "Guglielmo Marconi no ano 1894", "Nikola Tesla en 1700", "Lumière en 1895"],
            correct: 1,
            explanation: "✅ Marconi logrou a primeira transmisión radiofónica coñecida."
        },
        {
            question: "Que supuxo a aparición de INTERNET?",
            answers: ["Unha forma de iluminación", "Un sistema para mover engrenaxes", "Un substituto das vacinas", "Un cambio clave na comunicación global e no acceso á información"],
            correct: 3,
            explanation: "✅ A Internet revolucionou os medios de comunicación e a conexión global."
        }


    ],
    gallego_gramatica: [
    {
        question: "¿Cómo se conjuga el verbo 'andar' en el modo indicativo, tiempo presente, para la primera persona del singular (eu)?",
        answers: ["andas", "andades", "andamos", "ando"],
        correct: 3,
        explanation: "✅ En el modo indicativo, tiempo presente, la conjugación del verbo 'andar' para la primera persona del singular (eu) es 'ando'."
    },
    {
        question: "¿Cuál es la forma correcta del verbo 'varrer' en el modo indicativo, tiempo copretérito (pretérito imperfecto), para la tercera persona del plural (eles/elas)?",
        answers: ["varrendo","varrían", "varrerán", "varreron" ],
        correct: 1,
        explanation: "✅ En el modo indicativo, tiempo copretérito, la conjugación del verbo 'varrer' para la tercera persona del plural (eles/elas) es 'varrían'."
    },
    {
        question: "¿Cómo se conjuga el verbo 'partir' en el modo indicativo, tiempo futuro, para la segunda persona del singular (ti)?",
        answers: ["partiches", "partirán", "partirás", "partías"],
        correct: 2,
        explanation: "✅ En el modo indicativo, tiempo futuro, la conjugación del verbo 'partir' para la segunda persona del singular (ti) es 'partirás'."
    },
    {
        question: "En el modo subxuntivo, tiempo presente, ¿cuál es la forma correcta del verbo 'andar' para la primera persona del plural (nós)?",
        answers: ["andemos","andamos", "andaren", "anden" ],
        correct: 0,
        explanation: "✅ En el modo subxuntivo, tiempo presente, la conjugación del verbo 'andar' para la primera persona del plural (nós) es 'andemos'."
    },
    {
        question: "¿Cuál es la conjugación correcta del verbo 'varrer' en el modo subxuntivo, tiempo pretérito (pretérito imperfecto), para la segunda persona del singular (ti)?",
        answers: ["varreres","varreses", "varrías", "varreras" ],
        correct: 1,
        explanation: "✅ En el modo subxuntivo, tiempo pretérito, la conjugación del verbo 'varrer' para la segunda persona del singular (ti) es 'varreses'."
    },
    {
    question: "Cal é a forma correcta de 'varrer' no presente do indicativo para 'vós'?",
    answers: ["varre", "varriades", "varredes", "varredes"],
    correct: 2,
    explanation: "✅ 'Vós varredes' é forma correcta no presente do indicativo."
},
{
    question: "Como se di 'eles varreron' en galego no pretérito perfecto?",
    answers: ["varrían", "varresen", "varrerán", "varreron"],
    correct: 3,
    explanation: "✅ 'Eles varreron' é pretérito perfecto do verbo varrer."
},
{
    question: "Como se conxuga 'varrer' no pospretérito para 'eu'?",
    answers: ["varría", "varrería", "varrerei", "varrera"],
    correct: 1,
    explanation: "✅ 'Eu varrería' é pospretérito (condicional simple)."
},
{
    question: "Cal é a forma do copretérito de 'varrer' para 'nós'?",
    answers: ["varriamos", "varremos", "varriamos", "varríamos"],
    correct: 3,
    explanation: "✅ 'Nós varríamos' é copretérito (pretérito imperfecto)."
},
{
    question: "Que forma de 'varrer' corresponde ao subxuntivo presente con 'ti'?",
    answers: ["varrías", "varreches", "varrás", "varras"],
    correct: 3,
    explanation: "✅ 'Ti varras' é forma correcta no subxuntivo presente."
},
{
    question: "Como se di 'vós varrésedes' no subxuntivo pretérito?",
    answers: ["varredes", "varreredes", "varrésedes", "varrerdes"],
    correct: 2,
    explanation: "✅ 'Vós varrésedes' é forma do subxuntivo pretérito."
},
{
    question: "Cal é a forma do subxuntivo futuro de 'varrer' con 'eles/elas'?",
    answers: ["varrían", "varran", "varrerán", "varreren"],
    correct: 3,
    explanation: "✅ 'Eles varreren' é forma do futuro do subxuntivo."
},
{
    question: "Cal é a forma do futuro do subxuntivo para 'nós' co verbo 'varrer'?",
    answers: ["varriamos", "varremos", "varreremos", "varrermos"],
    correct: 3,
    explanation: "✅ 'Nós varrermos' é forma do futuro do subxuntivo."
},
{
    question: "Que forma de 'partir' corresponde ao futuro do subxuntivo para 'ti'?",
    answers: ["partiches", "partías", "partiras", "partires"],
    correct: 3,
    explanation: "✅ 'Ti partires' é forma do subxuntivo futuro."
},
{
    question: "Como se conxuga 'andar' no futuro do subxuntivo para 'eu'?",
    answers: ["andaba", "andar", "andase", "andarei"],
    correct: 1,
    explanation: "✅ 'Eu andar' é forma do futuro do subxuntivo."
},
{
    question: "Como se conxuga 'partir' no presente do indicativo con 'nós'?",
    answers: ["partiamos", "partiremos", "partiramos", "partimos"],
    correct: 3,
    explanation: "✅ 'Nós partimos' é presente do indicativo do verbo partir."
},
{
    question: "Cal é a forma correcta no pretérito perfecto con 'ti' do verbo 'partir'?",
    answers: ["partises", "partiras", "partías", "partiches"],
    correct: 3,
    explanation: "✅ 'Ti partiches' é pretérito perfecto do verbo partir."
},
{
    question: "Que forma usa 'eles/elas' no pospretérito de 'partir'?",
    answers: ["partisen", "partiran", "partirían", "partirán"],
    correct: 2,
    explanation: "✅ 'Eles partirían' é pospretérito do verbo partir."
},
{
    question: "Como se di 'eu partía' no copretérito?",
    answers: ["partirei", "partía", "partiches", "partira"],
    correct: 1,
    explanation: "✅ 'Eu partía' é copretérito (pretérito imperfecto)."
},
{
    question: "Que forma corresponde ao subxuntivo presente para 'vós' co verbo 'partir'?",
    answers: ["partís", "partísedes", "partires", "partades"],
    correct: 3,
    explanation: "✅ 'Vós partades' é subxuntivo presente."
},
{
    question: "Cal é a forma correcta de 'partir' no subxuntivo pretérito para 'eu'?",
    answers: ["partín", "partise", "partía", "partira"],
    correct: 1,
    explanation: "✅ 'Eu partise' é forma do subxuntivo pretérito."
},
{
    question: "Como se conxuga 'partir' no subxuntivo futuro para 'nós'?",
    answers: ["partamos", "partimos", "partirmos", "partiamos"],
    correct: 2,
    explanation: "✅ 'Nós partirmos' é forma do subxuntivo futuro."
}

],
    ccssudsix: [
        {
        question: "Cando comeza a Idade Moderna?",
        answers: ["En 1492, co descubrimento de América", "En 1789, coa Revolución Francesa", "En 1516, co reinado de Carlos I", "En 1469, co matrimonio dos Reis Católicos"],
        correct: 0,
        explanation: "✅ A Idade Moderna comeza en 1492 co descubrimento de América."
        },
        {
        question: "Que movemento cultural mudou a visión medieval baseada na fe relixiosa?",
        answers: ["O Barroco", "O Humanismo", "A Ilustración", "O Renacemento"],
        correct: 1,
        explanation: "✅ O Humanismo puxo no centro o ser humano, cambiando a visión relixiosa medieval."
        },
        {
        question: "Quen formaba parte da sociedade privilexiada na Idade Moderna?",
        answers: ["Os campesiños e artesáns", "A nobreza e o clero", "Os comerciantes", "Os mestres e filósofos"],
        correct: 1,
        explanation: "✅ A nobreza e o clero eran os estamentos privilexiados na sociedade moderna."
        },
        {
        question: "Cal era a base da economía na Idade Moderna?",
        answers: ["A industria", "A agricultura", "O comercio marítimo", "A minería"],
        correct: 1,
        explanation: "✅ A agricultura era a base económica fundamental na Idade Moderna."
        },
        {
        question: "Que territorio descubriu Cristovo Colón en 1492?",
        answers: ["Asia", "Oceanía", "América", "África"],
        correct: 2,
        explanation: "✅ Cristovo Colón chegou a América en 1492, aínda que pensaba que era Asia."
        },
        {
        question: "Que lingua se impuxo nos territorios conquistados en América?",
        answers: ["O inglés", "O castelán", "O francés", "O portugués"],
        correct: 1,
        explanation: "✅ O castelán foi a lingua imposta polos conquistadores nos territorios americanos."
        },
        {
        question: "Quen foi o primeiro rei da dinastía dos Austrias en España?",
        answers: ["Carlos I", "Felipe II", "Carlos II", "Felipe III"],
        correct: 0,
        explanation: "✅ Carlos I foi o primeiro rei da dinastía dos Austrias en España."
        },
        {
        question: "Que estilo arquitectónico caracterizou o Barroco en España?",
        answers: ["O plateresco", "O churrigueresco", "O herreriano", "O renacentista"],
        correct: 1,
        explanation: "✅ O churrigueresco foi un estilo moi decorativo propio do Barroco español."
        },
        {
        question: "Que rei fundou o Museo do Prado?",
        answers: ["Carlos III", "Felipe V", "Carlos IV", "Fernando VI"],
        correct: 2,
        explanation: "✅ Carlos IV foi quen fundou o Museo do Prado a finais do século XVIII."
        },
        {
        question: "Que movemento cultural apareceu en España no século XVIII?",
        answers: ["O Humanismo", "A Ilustración", "O Renacemento", "O Barroco"],
        correct: 1,
        explanation: "✅ A Ilustración, baseada na razón e o coñecemento, foi o movemento cultural do século XVIII."
        },
        {
        question: "Que batalla naval venceu Felipe II ás tropas turcas?",
        answers: ["A batalla de Lepanto", "A batalla de San Quintín", "A batalla dos Países Baixos", "A batalla de Granada"],
        correct: 0,
        explanation: "✅ Felipe II venceu os turcos na batalla de Lepanto en 1571."
        },
        {
        question: "Quen foi o último rei da dinastía dos Austrias?",
        answers: ["Carlos I", "Felipe II", "Carlos II", "Felipe III"],
        correct: 2,
        explanation: "✅ Carlos II foi o último rei da dinastía dos Austrias en España."
        },
        {
        question: "Que dinastía chegou ao trono de España despois da Guerra de Sucesión?",
        answers: ["Os Austrias", "Os Borbóns", "Os Tudor", "Os Habsburgo"],
        correct: 1,
        explanation: "✅ A dinastía dos Borbóns chegou ao trono tras a Guerra de Sucesión."
        },
        {
        question: "Que estilo arquitectónico buscaba liñas rectas e simplicidade no Renacemento?",
        answers: ["O churrigueresco", "O herreriano", "O barroco", "O plateresco"],
        correct: 1,
        explanation: "✅ O estilo herreriano buscaba a sobriedade e as liñas rectas no Renacemento."
        },
        {
        question: "Que buscaban os artistas renacentistas na pintura e escultura?",
        answers: ["A asimetría e o realismo", "A idealización do corpo humano e a harmonía", "A decoración excesiva", "A conmoción do espectador"],
        correct: 1,
        explanation: "✅ Os artistas renacentistas procuraban a beleza ideal, a proporción e a harmonía."
        },
        {
        question: "Quen eran OS REIS CATÓLICOS?",
        answers: ["Xoana e Felipe", "Isabel de Castela e Fernando de Aragón", "Carlos I e Isabel II", "Fernando VI e María Teresa"],
        correct: 1,
        explanation: "✅ Isabel I de Castela e Fernando II de Aragón eran OS REIS CATÓLICOS."
        },
        {
        question: "Que importante feito ocorreu no ano 1492?",
        answers: ["A chegada de Carlos I a España", "A fundación da Santa Irmandade", "A conquista de Granada e a viaxe de Colón a América", "A creación do Museo do Prado"],
        correct: 2,
        explanation: "✅ No 1492 conquistouse Granada e Cristovo Colón iniciou a viaxe na que chegou a América."
        },
        {
        question: "Que fixeron OS ESPAÑOIS E ESPAÑOLAS nos territorios conquistados en América?",
        answers: ["Implantaron a lingua inglesa", "Respectaron todas as culturas locais", "Implantaron o castelán e a relixión católica", "Fuxiron dos territorios por medo"],
        correct: 2,
        explanation: "✅ Nos territorios conquistados impuxéronse o castelán e a relixión católica."
        },
        {
        question: "Que foi a SANTA IRMANDADE?",
        answers: ["Un grupo de monxes", "Un exército especial", "Un organismo para vixiar rúas e camiños", "Un tribunal de xustiza local"],
        correct: 2,
        explanation: "✅ A Santa Irmandade era unha forza encargada de vixiar as rúas e os camiños."
        },
        {
        question: "Quen foi o primeiro rei da MONARQUÍA DOS AUSTRIAS?",
        answers: ["Felipe II", "Fernando o Católico", "Carlos I", "Carlos II"],
        correct: 2,
        explanation: "✅ Carlos I foi o primeiro rei da MONARQUÍA DOS AUSTRIAS en España."
        },
        {
        question: "Que fixeron os españois tras chegar a América segundo os GRANDES DESCUBRIMENTOS?",
        answers: ["Construíron escolas para nativos", "Evanxelizaron pola forza e roubaron ouro", "Deixaron os pobos en paz", "Viaxaron de volta sen conquistar nada"],
        correct: 1,
        explanation: "✅ Os españois evanxelizaron pola forza e aproveitaron os recursos como o ouro."
        },
        {
        question: "Como se chamaba o continente ao que chegou CRISTOVO COLÓN?",
        answers: ["Asia", "África", "Oceanía", "América"],
        correct: 3,
        explanation: "✅ Aínda que Colón pensaba que era Asia, máis tarde chamouse América en honor a Américo Vespucio."
        },
        {
        question: "Quen conquistou o IMPERIO INCA?",
        answers: ["Cristovo Colón", "Hernán Cortés", "Francisco Pizarro", "Fernando de Magalláns"],
        correct: 2,
        explanation: "✅ Francisco Pizarro foi quen conquistou o IMPERIO INCA no ano 1533."
        },
        {
        question: "Como se chamaban os soldados do exército organizado polos Reis Católicos?",
        answers: ["Xendarmes", "Terzos", "Templarios", "Compañías"],
        correct: 1,
        explanation: "✅ Os Terzos eran soldados de infantaría, artillaría e cabalaría organizados polos Reis Católicos."
        },
        {
        question: "Por que foi importante o descubrimento de América?",
        answers: ["Porque pecharon rutas comerciais", "Porque provocou guerras en Europa", "Porque fixo que España se convertese no imperio máis poderoso", "Porque se perdeu contacto co resto do mundo"],
        correct: 2,
        explanation: "✅ Co descubrimento e conquistas, España converteuse no imperio máis poderoso de Europa."
        }
    ],
    ccnn_6_tema1: [
        {
            question: "Cal é a capa máis externa da pel?",
            answers: ["Hipoderme", "Derme", "Papilas gustativas","Epiderme" ],
            correct: 3, // inicio
            explanation: "✅ A epiderme é a capa máis externa da pel."
        },
        {
            question: "Onde se atopan os receptores do gusto?",
            answers: [
                "Na retina",
                "Nas papilas gustativas",
                "Na pituitaria",
                "No pavillón auditivo"
            ],
            correct: 2, 
            explanation: "✅ Os receptores do gusto agrúpanse nas papilas gustativas da lingua."
        },
        {
            question: "Que estrutura do nariz contén os receptores olfactivos?",
            answers: [
                "O caracol",
                "A pituitaria",
                "A córnea",
                "As canles semicirculares"
            ],
            correct: 1, 
            explanation: "✅ A pituitaria, situada na parte superior das fosas nasais, contén os receptores olfactivos."
        },
        {
            question: "Que fai vibrar o tímpano?",
            answers: [
                "O líquido das canles semicirculares",
                "As ondas sonoras",
                "Os músculos do oído",
                "As papilas gustativas"
            ],
            correct: 1,
            explanation: "✅ As ondas sonoras fan vibrar o tímpano."
        },
        {
            question: "Que parte do oído contén os receptores auditivos?",
            answers: [
                "A cadea de osiños",
                "O nervio óptico",
                "O caracol",
                "A pupila"
            ],
            correct: 2, // 0 → 2
            explanation: "✅ Os receptores auditivos están no caracol do oído interno."
        },
        {
                question: "Que parte do ollo transforma a luz en sinais nerviosas?",
                answers: [
                    "O cristalino",
                    "A retina",
                    "A pupila",
                    "A córnea"
                ],
                correct: 1, 
                explanation: "✅ A retina é onde os receptores de luz transforman a imaxe en sinais nerviosas."
            },
            {
                question: "Cantos ósos aproximadamente ten o corpo humano adulto?",
                answers: [
                    "206",
                    "150",
                    "300",
                    "100"
                ],
                correct: 0,
                explanation: "✅ O esqueleto humano adulto está composto por arredor de 206 ósos."
            },
            {
                question: "Que tipo de articulación é a do cranio?",
                answers: [
                    "Móbil",
                    "Semimóbil",
                    "Fixa",
                    "Elástica"
                ],
                correct: 2, // 1 → 0
                explanation: "✅ As articulacións do cranio son fixas, non permiten movemento."
            },
            {
                question: "Que tecido forma o corazón?",
                answers: [
                    "Estriado",
                    "Liso",
                    "Cardíaco",
                    "Óseo"
                ],
                correct: 2, // 0 → 2
                explanation: "✅ O tecido muscular cardíaco forma o corazón e contráese de maneira involuntaria."
            },
            {
                question: "Que función teñen os tendóns?",
                answers: [
                    "Unir ósos entre si",
                    "Unir músculos a ósos",
                    "Protexer órganos internos",
                    "Regular a temperatura"
                ],
                correct: 1, 
                explanation: "✅ Os tendóns unen os músculos aos ósos para permitir o movemento."
            },
        {
                question: "Cal é a principal diferenza entre células procariotas e eucariotas?",
                answers: [
                    "As procariotas teñen núcleo definido",
                    "As eucariotas teñen o ADN libre no citoplasma",
                    "As procariotas teñen estrutura sinxela e o ADN no citoplasma",
                    "As eucariotas non teñen orgánulos"
                ],
                correct: 2,
                explanation: "✅ As células procariotas teñen unha estrutura simple e o material xenético está no citoplasma, sen estar rodeado por membrana."
            },
            {
                question: "Que función cumpre a membrana celular?",
                answers: [
                    "Produce enerxía",
                    "Rexe a entrada e saída de substancias",
                    "Almacena auga",
                    "Contén as instrucións xenéticas"
                ],
                correct: 1,
                explanation: "✅ A membrana celular envolve a célula, protéxea e regula a entrada/saída de substancias."
            },
            {
                question: "Cal destes orgánulos é exclusivo das células vexetais?",
                answers: [
                    "Mitocondrias",                    
                    "Vacuolos pequenos",
                    "Lisosomas",
                    "Cloroplastos"
                ],
                correct: 3,
                explanation: "✅ Os cloroplastos son exclusivos das células vexetais e neles realízase a fotosíntese."
            },
            {
                question: "Que característica diferencia as células animais das vexetais?",
                answers: [
                    "As vexetais teñen parede celular ríxida",
                    "As animais teñen un gran vacuolo central",
                    "As vexetais non teñen membrana celular",
                    "As animais realizan fotosíntese"
                ],
                correct: 0,
                explanation: "✅ As células vexetais teñen unha parede celular ríxida que lles dá forma e soporte."
            },
            {
                question: "Que tipo de célula non ten núcleo?",
                answers: [
                    "Neurona",
                    "Célula muscular",
                    "Glóbulo vermello",
                    "Óvulo"
                ],
                correct: 2,
                explanation: "✅ Os glóbulos vermellos non teñen núcleo, o que lles permite almacenar máis osíxeno."
            },
            {
                question: "Como se organizan as células para formar un organismo?",
                answers: [
                    "Células → Órganos → Tecidos → Sistemas",
                    "Células → Tecidos → Órganos → Aparellos ou sistemas",
                    "Tecidos → Células → Órganos → Aparellos",
                    "Células → Órganos → Aparellos → Tecidos"
                ],
                correct: 1,
                explanation: "✅ As células organízanse en tecidos, os tecidos en órganos, e estes en aparellos ou sistemas."
            },
            {
                question: "Que sistema é responsable de coordinar o funcionamento de órganos e sistemas?",
                answers: [
                    "O sistema locomotor",
                    "O sistema dixestivo",
                    "O sistema nervioso",
                    "O sistema circulatorio"
                ],
                correct: 2,
                explanation: "✅ O sistema nervioso coordina os órganos e sistemas xunto coas hormonas."
            },
            {
                question: "Que función realiza o sistema nervioso?",
                answers: [
                    "Obter enerxía a partir dos nutrientes",
                    "Permitir a función de relación co medio",
                    "Transportar osíxeno no sangue",
                    "Almacenar substancias"
                ],
                correct: 1,
                explanation: "✅ O sistema nervioso, xunto cos sentidos e o aparato locomotor, permite a función de relación co medio."
            },
        {
                question: "Cal é a función principal do cerebro?",
                answers: [
                    "Coordinar o equilibrio",
                    "Transmitir información ao corpo",
                    "Controlar funcións vitais e complexas como pensar ou emocionarse",
                    "Controlar os reflexos"
                ],
                correct: 2,
                explanation: "✅ O cerebro controla funcións vitais básicas como respirar e o latexo, e tamén as máis complexas como pensar, moverse ou sentir emocións."
            },
            {
                question: "Que parte do sistema nervioso coordina o equilibrio e a postura?",
                answers: [
                    "Cerebro",
                    "Médula espiñal",
                    "Nervios",
                    "Cerebelo"
                ],
                correct: 3,
                explanation: "✅ O cerebelo encárgase de coordinar os movementos e manter o equilibrio e a postura."
            },
            {
                question: "Que estrutura transmite información entre o cerebro e o resto do corpo?",
                answers: [
                    "A médula espiñal",
                    "As dendritas",
                    "Os nervios",
                    "O cerebelo"
                ],
                correct: 0,
                explanation: "✅ A médula espiñal transmite información entre o cerebro e o corpo e controla tamén os reflexos."
            },
            {
                question: "Como se chaman as prolongacións curtas das neuronas que reciben sinais?",
                answers: [
                    "Nervios",
                    "Médula",
                    "Axón",
                    "Dendritas"
                ],
                correct: 3,
                explanation: "✅ As dendritas son prolongacións curtas das neuronas que reciben o sinal nervioso."
            },
            {
                question: "Que nome recibe o sinal que viaxa polas neuronas?",
                answers: [
                    "Estimulación muscular",
                    "Reflexo",
                    "Impulso nervioso",
                    "Corrente vital"
                ],
                correct: 2,
                explanation: "✅ O sinal que viaxa polas neuronas chámase impulso nervioso, semellante a unha corrente eléctrica débil."
            },
            {
                question: "Cal destes é un acto involuntario?",
                answers: [
                    "Ler",
                    "Respirar",
                    "Escribir nun teclado",
                    "Correr"
                ],
                correct: 1,
                explanation: "✅ Respirar é un acto involuntario, xa que non depende da nosa vontade."
            },
            {
                question: "Que ocorre primeiro nun acto reflexo cando tocas algo quente?",
                answers: [
                    "O músculo contráese",
                    "O impulso nervioso vai á médula espiñal",
                    "O cerebro decide retirar a man",
                    "A pel non detecta a calor"
                ],
                correct: 1,
                explanation: "✅ O primeiro paso é que as terminacións nerviosas da pel envían o impulso á médula espiñal."
            },
            {
                question: "En que se diferencian os actos voluntarios dos involuntarios?",
                answers: [
                    "Nos involuntarios sempre actúa o cerebelo",
                    "Nos voluntarios interveñen máis neuronas e son conscientes",
                    "Nos voluntarios non interveñen nervios",
                    "Nos voluntarios non participa o cerebro"
                ],
                correct: 1,
                explanation: "✅ Os actos voluntarios son conscientes, como correr ou escribir, e requiren máis neuronas ca os involuntarios."
            },
            {
                question: "Cal é o primeiro paso no proceso dun acto voluntario como escribir nun teclado?",
                answers: [
                    "O músculo do brazo contráese",
                    "O cerebro envía un impulso á médula espiñal",
                    "O cerebelo decide que facer",
                    "A información visual do teclado chega ao cerebro polos nervios ópticos"
                ],
                correct: 3,
                explanation: "✅ Primeiro, os ollos captan a imaxe do teclado e a información viaxa polos nervios ópticos ata o cerebro."
        
        }
    ],
    ccss_6_tema1: [
    {
        "question": "Que é a meteoroloxía?",
        "answers": [
            "A ciencia que estudia os ecosistemas",
            "A ciencia que estudia os seres vivos",
            "A ciencia que estudia a atmosfera e os fenómenos que se producen nela",
            "A ciencia que estudia os océanos"
        ],
        "correct": 2,
        "explanation": "✅ A meteoroloxía é a ciencia que estudia a atmosfera e os fenómenos que se producen nela."
    },
    {
        "question": "Que elementos son utilizados polos meteorólogos para predicir o tempo?",
        "answers": [
            "Os satélites, as estacións meteorolóxicas e os rexistros de temperaturas e precipitacións",
            "Só os satélites e os rexistros de temperaturas",
            "Só as estacións meteorolóxicas",
            "Só os rexistros de precipitacións"
        ],
        "correct": 0,
        "explanation": "✅ Os meteorólogos utilizan imaxes de satélites, estacións meteorolóxicas e rexistros de temperatura e precipitacións para predicir o tempo."
    },
    {
        "question": "Que é o efecto invernadoiro?",
        "answers": [
            "Un fenómeno que reflicte toda a enerxía solar",
            "Un fenómeno natural que retén enerxía do sol na atmosfera",
            "Un fenómeno que destrúe a capa de ozono",
            "Un fenómeno provocado só polos humanos"
        ],
        "correct": 1,
        "explanation": "✅ O efecto invernadoiro é un fenómeno natural que retén enerxía do sol na atmosfera, necesario para a vida na Terra."
    },
    {
        "question": "Que sucede co efecto invernadoiro na actualidade?",
        "answers": [
            "Está diminuíndo grazas ás accións dos humanos",
            "Está aumentando debido ás emisións de gases por parte dos seres humanos",
            "Non ten ningún impacto na Terra",
            "A súa intensidade non cambia"
        ],
        "correct": 1,
        "explanation": "✅ Actualmente, o efecto invernadoiro está aumentando debido ás emisións de gases de efecto invernadoiro, especialmente por actividades humanas."
    },
    {
        "question": "Que busca o Protocolo de Kioto?",
        "answers": [
            "Fomentar a industrialización nos países desenvolvidos",
            "Reducir as emisións de CO2 nos países industrializados",
            "Permitir que os países industrializados emitan máis CO2",
            "Reemplazar os combustibles fósiles por enerxía solar"
        ],
        "correct": 1,
        "explanation": "✅ O obxectivo do Protocolo de Kioto é reducir as emisións de CO2 nos países industrializados para combater o cambio climático."
    },
    {
        "question": "Que gas é unha das principais causas do efecto invernadoiro?",
        "answers": [
            "O oxíxeno",
            "O dióxido de carbono (CO2)",
            "O nitróxeno",
            "O hidróxeno"
        ],
        "correct": 1,
        "explanation": "✅ O dióxido de carbono (CO2) é un dos gases principais que contribúen ao efecto invernadoiro."
    },
    {
        "question": "Que causa o quecemento global?",
        "answers": [
            "A acumulación de gas metano na atmosfera",
            "A emisión de gases de efecto invernadoiro, especialmente o CO2",
            "A radiación do sol que se reflicte",
            "A extinción de especies animais"
        ],
        "correct": 1,
        "explanation": "✅ O quecemento global é causado principalmente pola emisión de gases de efecto invernadoiro, como o CO2, das actividades humanas."
    },
    {
        "question": "Que efecto ten o quecemento global sobre a Terra?",
        "answers": [
            "Fai que a Terra se refrixere máis rápido",
            "Aumenta as fluctuacións climáticas facendo a vida máis difícil",
            "A Terra comeza a ser máis fría",
            "Non ten ningunha repercusión"
        ],
        "correct": 1,
        "explanation": "✅ O quecemento global aumenta as fluctuacións climáticas e pode facer que as condicións para a vida se volvan máis extremas e difíciles."
    },
    {
        "question": "Que parte da enerxía solar que chega á Terra é retida pola atmosfera?",
        "answers": [
            "Un 70%",
            "Un 50%",
            "Un 90%",
            "Un 30%"
        ],
        "correct": 0,
        "explanation": "✅ Aproximadamente un 70% da enerxía solar que chega á Terra é devolta ao espazo, pero o resto é retida pola atmosfera."
    },
    {
        "question": "Que é o efecto invernadoiro antropoxénico?",
        "answers": [
            "Un fenómeno natural sen efectos negativos",
            "O aumento do efecto invernadoiro debido ás actividades humanas",
            "Un efecto que só afecta aos océanos",
            "Un fenómeno relacionado coa desaparición dos bosques"
        ],
        "correct": 1,
        "explanation": "✅ O efecto invernadoiro antropoxénico é o aumento do efecto invernadoiro debido ás actividades humanas, como a queima de combustibles fósiles."
    },
    {
        "question": "Que efecto está a provocar o desxeo dos polos?",
        "answers": [
            "Un aumento do nivel do mar",
            "Unha diminución do nivel do mar",
            "Unha redución das temperaturas globais",
            "Un aumento das áreas boscosas"
        ],
        "correct": 0,
        "explanation": "✅ O desxeo dos polos está provocando un aumento do nivel do mar, xa que a fusión dos glaciares e do xeo da Antártida libera grandes cantidades de auga."
    },
    {
        "question": "Que é o tempo atmosférico?",
        "answers": [
            "O estado da atmosfera durante un longo período de tempo",
            "O estado da atmosfera nun lugar determinado e nun momento determinado",
            "O cambio do clima ao longo de moitos anos",
            "O efecto que teñen as estacións sobre o clima"
        ],
        "correct": 1,
        "explanation": "✅ O tempo atmosférico é o estado da atmosfera nun lugar e momento específicos. Pode cambiar varias veces nun día."
    },
    {
        "question": "Como se define o clima?",
        "answers": [
            "O estado do tempo nun día determinado",
            "O estado da atmosfera nun lugar en poucas semanas",
            "O tempo que predomina nun lugar durante moitos anos",
            "Unha característica variable que cambia cada ano"
        ],
        "correct": 2,
        "explanation": "✅ O clima é o tempo que predomina nun lugar durante moitos anos. Por exemplo, Galicia ten un clima chuvioso e Andalucía un clima seco."
    },
    {
        "question": "Que é necesario para coñecer o clima dun lugar?",
        "answers": [
            "Observar os datos dunha única estación meteorolóxica",
            "Consultar os datos durante moitos anos das estacións meteorolóxicas",
            "Medir só a temperatura durante un ano",
            "Estudar os cambios de estacións durante un mes"
        ],
        "correct": 1,
        "explanation": "✅ Para coñecer o clima dun lugar, cómpre consultar durante moitos anos os datos das estacións meteorolóxicas, como temperatura, precipitacións e vento."
    },
    {
        "question": "Que instrumento se usa para medir a temperatura?",
        "answers": [
            "O termómetro",
            "O barómetro",
            "O pluviómetro",
            "O anemómetro"
        ],
        "correct": 0,
        "explanation": "✅ O termómetro é o instrumento que se usa para medir a temperatura."
    },
    {
        "question": "Que son as precipitacións?",
        "answers": [
            "O vento que se move no aire",
            "A cantidade de chuvia, neve ou sarabia que cae nunha zona",
            "A cantidade de calor que recibe a Terra",
            "Os cambios na presión atmosférica"
        ],
        "correct": 1,
        "explanation": "✅ As precipitacións son a cantidade de chuvia, neve ou sarabia que cae nunha zona, e ocorren cando a auga dos mares, ríos ou lagos se evapora e condénase nas nubes."
    },
    {
        "question": "Como se mide a cantidade de precipitación?",
        "answers": [
            "En metros por segundo",
            "En quilómetros por hora",
            "En milímetros (mm) ou litros por metro cadrado (l/m2)",
            "En graos centígrados"
        ],
        "correct": 2,
        "explanation": "✅ As precipitacións mídense en milímetros (mm) ou en litros por metro cadrado (l/m2), e o instrumento utilizado para iso é o pluviómetro."
    },
    {
        "question": "Que provoca a formación de nubes?",
        "answers": [
            "O frío extremo",
            "A evaporación da auga que logo se condensa",
            "A acumulación de gases na atmosfera",
            "A presión atmosférica"
        ],
        "correct": 1,
        "explanation": "✅ As nubes se forman cando a auga evaporada dos mares, ríos e lagos se eleva, condénsase ao chegar a capas de aire frío e xérase como pequenas pingas de auga."
    },
    {
        "question": "Que é o instrumento pluviómetro?",
        "answers": [
            "Un instrumento para medir a temperatura",
            "Un instrumento para medir o vento",
            "Un instrumento para medir as precipitacións",
            "Un instrumento para medir a presión atmosférica"
        ],
        "correct": 2,
        "explanation": "✅ O pluviómetro é o instrumento utilizado para medir as precipitacións, como chuvia, neve ou sarabia."
    },

    {
        "question": "Que é a humidade?",
        "answers": [
            "A cantidade de vapor de auga no aire",
            "A temperatura do aire",
            "A dirección do vento",
            "A presión atmosférica"
        ],
        "correct": 0,
        "explanation": "✅ A humidade é a cantidade de vapor de auga que se atopa no aire e mídese co higrómetro."
    },
    {
        "question": "Que instrumento se usa para medir a humidade?",
        "answers": [
            "O anemómetro",
            "O barómetro",
            "O viraventos",
            "O higrómetro"
        ],
        "correct": 3,
        "explanation": "✅ O higrómetro é o instrumento utilizado para medir a humidade no aire."
    },
    {
        "question": "Que é o vento?",
        "answers": [
            "Unha corrente de aire quente que se move a gran velocidade",
            "Un aire que se move, creado por diferencias de temperatura no aire",
            "A cantidade de vapor de auga no aire",
            "Un fenómeno que só ocorre na montaña"
        ],
        "correct": 1,
        "explanation": "✅ O vento é aire en movemento, creado cando unha masa de aire quente elévase e é substituída por outra de temperatura máis baixa."
    },
    {
        "question": "Que instrumento se usa para medir a velocidade do vento?",
        "answers": [
            "O viraventos",
            "O barómetro",
            "O anemómetro",
            "O higrómetro"
        ],
        "correct": 2,
        "explanation": "✅ O anemómetro é o instrumento utilizado para medir a velocidade do vento."
    },
    {
        "question": "Que é a presión atmosférica?",
        "answers": [
            "O peso da columna de aire sobre un punto determinado",
            "A temperatura do aire en diferentes altitudes",
            "A cantidade de vapor de auga no aire",
            "O movemento das masas de aire"
        ],
        "correct": 0,
        "explanation": "✅ A presión atmosférica é o peso da columna de aire sobre un punto determinado e mídese co barómetro."
    },
    {
        "question": "Que instrumento se usa para medir a presión atmosférica?",
        "answers": [
            "O higrómetro",
            "O anemómetro",
            "O viraventos",
            "O barómetro"
        ],
        "correct": 3,
        "explanation": "✅ O barómetro é o instrumento utilizado para medir a presión atmosférica."
    },
    {
        "question": "Que factor climático describe a distancia desde calquera punto ao ecuador?",
        "answers": [
            "A latitude",
            "A altitude",
            "A distancia ao mar",
            "O relevo"
        ],
        "correct": 0,
        "explanation": "✅ A latitude é a distancia desde calquera punto ao ecuador, e influye no clima, xa que os lugares máis próximos ao ecuador son máis cálidos."
    },
    {
        "question": "Que sucede co clima dun lugar próximo ao ecuador?",
        "answers": [
            "O clima é máis frío debido aos raios solares inclinados",
            "O clima é máis cálido porque os raios solares chegan perpendiculares",
            "O clima é máis variable debido á falta de sol",
            "O clima é igual que o dos polos"
        ],
        "correct": 1,
        "explanation": "✅ Nos lugares próximos ao ecuador, os raios solares chegan máis perpendiculares, o que fai que o clima sexa máis cálido."
    },
    {
        "question": "Que ocorre co clima a maior altitude?",
        "answers": [
            "A temperatura aumenta",
            "A temperatura diminúe",
            "O clima é máis húmido",
            "Non hai cambios de temperatura"
        ],
        "correct": 1,
        "explanation": "✅ A medida que aumentamos de altitude, a temperatura diminúe. Cada 150 metros de altitude, a temperatura baixa un grao centígrado."
    },
    {
        "question": "Que efecto ten o mar sobre o clima das zonas costeiras?",
        "answers": [
            "Fai que as temperaturas sexan máis extremas",
            "Fai que as temperaturas sexan máis suaves e estables",
            "Fai que chova máis a miúdo",
            "Non ten ningunha influencia no clima"
        ],
        "correct": 1,
        "explanation": "✅ O mar quécese e arrefríase máis lentamente que a terra, o que provoca que as temperaturas nas zonas costeiras sexan máis suaves e estables."
    },
    {
        "question": "Que factores fan que as zonas de montaña teñan temperaturas máis baixas?",
        "answers": [
            "A altitude, que fai que a temperatura diminúa",
            "A proximidade ao mar, que suaviza a temperatura",
            "A humidade, que provoca que as temperaturas suban",
            "A latitude, que fai que os raios solares sexan máis inclinados"
        ],
        "correct": 0,
        "explanation": "✅ Nas zonas de montaña, a temperatura diminúe coa altura, facendo que sexan máis frías que as zonas de chaira."
    },
    {
        "question": "Por que as zonas de montaña son máis chuviosas?",
        "answers": [
            "Porque as masas de aire húmido chocan contra as montañas e provocan precipitacións",
            "Porque as zonas de montaña están máis próximas ao mar",
            "Porque a altitude aumenta a evaporación",
            "Porque as montañas filtran a humidade do aire"
        ],
        "correct": 0,
        "explanation": "✅ As zonas de montaña son máis chuviosas porque as masas de aire húmido chocan contra as montañas, elévanse, e ao condénsarse provocan precipitacións."
    },
    {
        "question": "Que zonas climáticas se atopan entre os trópicos de Cáncer e Capricornio?",
        "answers": [
            "As zonas temperadas",
            "As zonas frías",
            "As zonas cálidas",
            "As zonas polares"
        ],
        "correct": 2,
        "explanation": "✅ As zonas cálidas sitúanse entre os trópicos de Cáncer e Capricornio, onde os raios solares son máis directos e as temperaturas son moi cálidas."
    },
    {
        "question": "Que tipo de clima se encontra entre os trópicos de Cáncer e Capricornio?",
        "answers": [
            "Clima ecuatorial, tropical e desértico",
            "Clima temperado e mediterráneo",
            "Clima frío e polar",
            "Clima continental e oceánico"
        ],
        "correct": 0,
        "explanation": "✅ Na zona cálida entre os trópicos de Cáncer e Capricornio atopamos climas ecuatorial, tropical e desértico."
    },
    {
        "question": "Que caracterizan os climas cálidos?",
        "answers": [
            "Temperaturas moi frías e pouca precipitación",
            "Temperaturas moi cálidas e raios solares perpendiculares á Terra",
            "Temperaturas moderadas e precipitaciones abundantes",
            "Temperaturas frías pero con moita humidade"
        ],
        "correct": 1,
        "explanation": "✅ Os climas cálidos caracterízanse por ter temperaturas moi cálidas debido á incidencia directa dos raios solares."
    },
    {
        "question": "Que tipo de clima predomina nas zonas próximas ao ecuador?",
        "answers": [
            "Clima ecuatorial",
            "Clima temperado",
            "Clima desértico",
            "Clima polar"
        ],
        "correct": 0,
        "explanation": "✅ Nas zonas próximas ao ecuador predomina o clima ecuatorial, que se caracteriza por temperaturas altas e moitas precipitacións ao longo do ano."
    },
    {
        "question": "Que características ten o clima tropical?",
        "answers": [
            "Temperaturas moi altas e pouca precipitación",
            "Temperaturas altas con estación seca e estación chuviosa",
            "Temperaturas frías e moita neve",
            "Temperaturas moderadas e precipitacións constantes"
        ],
        "correct": 1,
        "explanation": "✅ O clima tropical ten temperaturas altas durante todo o ano, con estacións secas e chuviosas ben diferenciadas."
    },
    {
        "question": "Que diferencia o clima desértico dos outros climas cálidos?",
        "answers": [
            "Ten moitas precipitacións",
            "Ten temperaturas moderadas e moita humidade",
            "Ten moita calor e moi poucas precipitacións",
            "Ten unha temperatura baixa pero moita humidade"
        ],
        "correct": 2,
        "explanation": "✅ O clima desértico caracterízase por ter moita calor, pero moi poucas precipitacións ao longo do ano."
    },
    {
        "question": "Que é a principal causa das temperaturas altas nas zonas próximas ao ecuador?",
        "answers": [
            "Os raios solares chegan de forma máis perpendicular",
            "A proximidade aos polos",
            "A presenza de correntes oceánicas cálidas",
            "A altitude elevada"
        ],
        "correct": 0,
        "explanation": "✅ Nas zonas próximas ao ecuador, os raios solares chegan de forma máis perpendicular, o que provoca temperaturas moi altas durante todo o ano."
    },
        {
        "question": "Que característica ten a paisaxe ecuatorial?",
        "answers": [
            "Precipitacións moi escasas e gran amplitude térmica",
            "Temperaturas altas todo o ano e selva frondosa",
            "Temperaturas baixas e vexetación de tundra",
            "Dúas estacións moi marcadas: seca e húmida"
        ],
        "correct": 1,
        "explanation": "✅ A paisaxe ecuatorial ten temperaturas altas todo o ano, poucas diferenzas térmicas e unha vexetación moi densa chamada selva ou xungla."
    },
    {
        "question": "Que define á paisaxe tropical?",
        "answers": [
            "Invernos moi fríos e veráns suaves",
            "Precipitacións superiores a 1500 mm anuais",
            "Estación seca no inverno e húmida no verán",
            "Vegetación de tundra e musgos"
        ],
        "correct": 2,
        "explanation": "✅ A paisaxe tropical ten unha estación seca no inverno e outra húmida no verán, con precipitacións entre 750 mm e 1500 mm anuais."
    },
    {
        "question": "Cal é a principal característica do clima desértico?",
        "answers": [
            "Temperaturas frescas todo o ano e moita humidade",
            "Temperaturas moi baixas e precipitacións abundantes",
            "Alta amplitude térmica e moi pouca chuvia",
            "Dúas estacións ben diferenciadas"
        ],
        "correct": 2,
        "explanation": "✅ O clima desértico ten unha temperatura media anual elevada, gran amplitude térmica e menos de 300 mm de precipitacións ao ano."
    },
    {
        "question": "Onde se atopan os climas temperados?",
        "answers": [
            "Entre os trópicos e os círculos polares",
            "Só preto do ecuador",
            "Nos polos",
            "Nas zonas desérticas"
        ],
        "correct": 0,
        "explanation": "✅ Os climas temperados sitúanse entre os trópicos e os círculos polares, con grandes contrastes entre as estacións."
    },
    {
        "question": "Cales son os tres tipos principais de clima temperado?",
        "answers": [
            "Ecuatorial, tropical e desértico",
            "Polar, alpino e continental",
            "Mediterráneo, oceánico e continental",
            "Tropical, polar e mediterráneo"
        ],
        "correct": 2,
        "explanation": "✅ Os climas temperados inclúen o clima mediterráneo, o oceánico e o continental."
    },
    {
        "question": "Que clima se atopa nas zonas máis próximas aos polos?",
        "answers": [
            "Ecuatorial",
            "Tropical",
            "Polar",
            "Mediterráneo"
        ],
        "correct": 2,
        "explanation": "✅ O clima polar atópase preto dos polos, con temperaturas moi baixas durante todo o ano."
    },
    {
        "question": "Como se chama o gráfico que representa as temperaturas e precipitacións dun lugar ao longo dun ano?",
        "answers": [
            "Mapa climático",
            "Climograma",
            "Higrómetro",
            "Termógrafo"
        ],
        "correct": 1,
        "explanation": "✅ O climograma é un gráfico onde se representan as temperaturas e precipitacións dun lugar ao longo do ano."
    },
    {
        "question": "Como se calcula a temperatura media anual nun climograma?",
        "answers": [
            "Sumando as temperaturas máis altas",
            "Multiplicando a temperatura máis alta por 12",
            "Sumando todas as temperaturas mensuais e dividindo entre 12",
            "Restando a mínima á máxima"
        ],
        "correct": 2,
        "explanation": "✅ Para calcular a temperatura media anual, súmanse as temperaturas dos 12 meses e divídese entre 12."
    },
    {
        "question": "Que significa ter unha amplitude térmica moi alta?",
        "answers": [
            "Que a temperatura é estable todo o ano",
            "Que hai pouca diferenza entre día e noite",
            "Que hai unha gran diferenza entre a temperatura máis alta e a máis baixa",
            "Que a temperatura media anual é baixa"
        ],
        "correct": 2,
        "explanation": "✅ Amplitude térmica moi alta significa que hai moita diferenza entre a temperatura máxima e a mínima ao longo do ano."
    },
    {
        "question": "Cantas estacións se distinguen nun clima temperado?",
        "answers": [
            "Dúas: verán e inverno",
            "Unha soa: a seca",
            "Catro: unha cálida, unha fría e dúas de transición",
            "Ningunha"
        ],
        "correct": 2,
        "explanation": "✅ No clima temperado distínguense catro estacións: unha cálida, unha fría e dúas de transición (primavera e outono)."
    },
    {
        "question": "Que efecto ten o vento na paisaxe?",
        "answers": [
            "Constrúe montañas",
            "Pule e redondea as rochas, cambiando o relevo",
            "Fai crecer árbores novas",
            "Crea ríos subterráneos"
        ],
        "correct": 1,
        "explanation": "✅ O vento erosiona o relevo e pule as rochas, creando novas formas na paisaxe."
    },
    {
        "question": "Como cambia a paisaxe a auga dos ríos?",
        "answers": [
            "Aumenta a temperatura da terra",
            "Forma chairas aluviais e deltas ao depositar materiais",
            "Elimina toda a vexetación",
            "Crea volcáns e terremotos"
        ],
        "correct": 1,
        "explanation": "✅ A auga dos ríos erosiona o relevo, transporta materiais e deposítaos na desembocadura, formando chairas aluviais e deltas."
    },
    {
        "question": "Cal destes é un cambio rápido e violento na natureza?",
        "answers": [
            "O vento constante",
            "A formación dun delta",
            "Unha erupción volcánica",
            "A sedimentación dunha lagoa"
        ],
        "correct": 2,
        "explanation": "✅ As erupcións volcánicas, como os terremotos e inundacións, son exemplos de cambios naturais rápidos e violentos."
    },
    {
        "question": "Que nome reciben as paisaxes modificadas polo ser humano?",
        "answers": [
            "Paisaxes naturais",
            "Paisaxes salvaxes",
            "Paisaxes humanizadas",
            "Paisaxes erosionadas"
        ],
        "correct": 2,
        "explanation": "✅ As paisaxes humanizadas son aquelas que o ser humano transformou para cubrir as súas necesidades."
    },
    {
        "question": "Cal destas accións humanas provoca deforestación?",
        "answers": [
            "Plantar máis árbores",
            "Construír industrias e cortar árbores",
            "Conservar espazos naturais",
            "Poñer paneis solares no monte"
        ],
        "correct": 1,
        "explanation": "✅ A deforestación ocorre cando se cortan moitas árbores, por exemplo para construír industrias ou estradas."
    },
    {
        "question": "Que consecuencias ambientais poden ter os polígonos industriais?",
        "answers": [
            "Melloran o solo e aumentan a vexetación",
            "Protexen a biodiversidade",
            "Non teñen ningún impacto na paisaxe",
            "Contaminan moito e deterioran o medio"
        ],
        "correct": 3,
        "explanation": "✅ Os polígonos industriais contaminan e deterioran o medio ambiente, modificando negativamente a paisaxe."
    },
    {
        "question": "Como afecta o turismo ás paisaxes?",
        "answers": [
            "Favorece a conservación das montañas",
            "Non produce cambios significativos",
            "Transforma a paisaxe con vivendas, hoteis e portos",
            "Reduce o número de estradas"
        ],
        "correct": 2,
        "explanation": "✅ O turismo transforma moito a paisaxe coa construción de vivendas, hoteis, portos e outras infraestruturas."
    },
    {
        "question": "Cal destas opcións é unha infraestrutura creada polo ser humano?",
        "answers": [
            "Un río",
            "Un volcán",
            "Unha vía de tren",
            "Unha selva"
        ],
        "correct": 2,
        "explanation": "✅ As vías de tren son exemplos de infraestruturas creadas polo ser humano, que modifican a paisaxe."
    },
    {
        "question": "Que tipo de bosque predomina na paisaxe atlántica?",
        "answers": [
            "Bosque de folla perenne con oliveiras",
            "Bosque caducifolio con carballos e castiñeiros",
            "Deserto con vexetación escasa",
            "Bosque tropical con palmeiras"
        ],
        "correct": 1,
        "explanation": "✅ Na paisaxe atlántica predomina o bosque caducifolio, con árbores como o carballo, o castiñeiro e o bidueiro."
    },
    {
        "question": "Que provocou a destrución dos bosques na paisaxe atlántica?",
        "answers": [
            "A expansión de selvas frondosas",
            "A desaparición da gandería",
            "A aparición de landas, fieitos e prados",
            "A construción de desertos artificiais"
        ],
        "correct": 2,
        "explanation": "✅ A destrución do bosque favoreceu a expansión de landas, fieitos e prados."
    },
    {
        "question": "Que tipo de poboamento é común no interior da paisaxe atlántica?",
        "answers": [
            "Grandes cidades con rascacielos",
            "Poboamento disperso en pequenas aldeas ou casaríos",
            "Poboamento nómade",
            "Vilas turísticas á beira do mar"
        ],
        "correct": 1,
        "explanation": "✅ No interior da paisaxe atlántica o poboamento é disperso, con pequenas aldeas ou casaríos."
    },
    {
        "question": "Cal é unha das principais actividades económicas na franxa costeira atlántica?",
        "answers": [
            "A minería de ouro",
            "A pesca, o comercio e os portos deportivos",
            "A agricultura tropical",
            "A construción de castelos medievais"
        ],
        "correct": 1,
        "explanation": "✅ Na franxa costeira atlántica destacan os portos pesqueiros, deportivos e as principais vilas e cidades."
    },
    {
        "question": "Como é a vexetación na paisaxe mediterránea?",
        "answers": [
            "Moi frondosa e con moita humidade",
            "Adaptada á seca e ao calor do verán",
            "Formada por árbores tropicais",
            "Coberta de xeos e neve todo o ano"
        ],
        "correct": 1,
        "explanation": "✅ A vexetación mediterránea está adaptada á falta de chuvias e ás altas temperaturas do verán."
    },
    {
        "question": "Que tipo de árbores atopamos na paisaxe mediterránea?",
        "answers": [
            "Piñeiros, oliveiras, aciñeiras e cítricos",
            "Palmeiras e plátanos",
            "Bidueiros e castiñeiros",
            "Chopos e álamos"
        ],
        "correct": 0,
        "explanation": "✅ Na paisaxe mediterránea predominan os piñeiros, oliveiras, aciñeiras e cítricos, así como matogueiras aromáticas."
    },
    {
        "question": "Que provocou o turismo na paisaxe mediterránea?",
        "answers": [
            "O aumento da vexetación natural",
            "A conservación dos bosques",
            "A degradación da paisaxe e a diminución da vexetación",
            "A desaparición das cidades"
        ],
        "correct": 2,
        "explanation": "✅ O turismo, xunto coa actividade agrícola e industrial, provocou a degradación da paisaxe mediterránea."
    },
    {
        "question": "Como é o poboamento na paisaxe continental?",
        "answers": [
            "Moi poboado en todas partes",
            "Pouco poboado, agás en Madrid",
            "Só hai aldeas illadas sen servizos",
            "É un territorio deshabitado"
        ],
        "correct": 1,
        "explanation": "✅ A paisaxe continental é pouco poboada, agás na Comunidade de Madrid, con poboación dispersa."
    },
    {
        "question": "Que tipo de vexetación hai na paisaxe continental?",
        "answers": [
            "Selvas densas",
            "Prados húmidos e verdes todo o ano",
            "Especies adaptadas ao frío e á seca como aciñeiras, piñeiros e sobreiras",
            "Só palmeiras e plantas tropicais"
        ],
        "correct": 2,
        "explanation": "✅ Na paisaxe continental hai vexetación adaptada ao frío e á seca como aciñeiras, piñeiros, sabinas e sobreiras."
    },
    {
        "question": "Que tipo de paisaxe domina hoxe na Meseta pola acción humana?",
        "answers": [
            "Bosques frondosos e verdes",
            "Campos de cultivo e terras en barbeito",
            "Ríos caudalosos con moita vexetación",
            "Glaciares e cumios nevados"
        ],
        "correct": 1,
        "explanation": "✅ A paisaxe da Meseta está moi transformada pola agricultura, co predominio de campos de cultivo e terras en barbeito."
    },
    {
        "question": "Por que a paisaxe canaria é tan singular?",
        "answers": [
            "Porque está chea de glaciares",
            "Porque ten moitas cidades antigas",
            "Polo seu volcánismo e insularidade",
            "Porque non hai montañas"
        ],
        "correct": 2,
        "explanation": "✅ A paisaxe canaria é singular polo seu orixe volcánico e por ser un arquipélago, o que lle dá características únicas."
    },
    {
        "question": "Que tipo de vexetación atopamos na paisaxe subtropical das Canarias?",
        "answers": [
            "Só bosques frondosos como a selva",
            "Vexetación moi abundante e igual en todas partes",
            "Vexetación pouco abundante, pero moi variada",
            "Só eucaliptos e piñeiros"
        ],
        "correct": 2,
        "explanation": "✅ A vexetación é escasa debido á seca, pero moi diversa, dependendo da altitude e da orientación das ladeiras."
    },
    {
        "question": "Que zona das Canarias está máis poboada?",
        "answers": [
            "As zonas volcánicas do interior",
            "As montañas centrais",
            "A costa, onde hai máis localidades e turismo",
            "As zonas desérticas"
        ],
        "correct": 2,
        "explanation": "✅ A costa das illas Canarias está moi poboada, con moitas localidades e moita actividade turística."
    },
    {
        "question": "Como son as temperaturas e precipitacións no litoral galego?",
        "answers": [
            "Temperaturas extremas e poucas chuvias",
            "Temperaturas suaves e precipitacións abundantes",
            "Veráns moi secos e invernos moi fríos",
            "Sempre fai sol e calor"
        ],
        "correct": 1,
        "explanation": "✅ No litoral galego hai temperaturas suaves e moita chuvia debido aos ventos húmidos do Atlántico."
    },
    {
        "question": "Que tipo de produción destaca no litoral das Rías Altas?",
        "answers": [
            "A produción de viño albariño",
            "A produción de madeira, especialmente de eucaliptos",
            "A pesca de baleas",
            "A extracción de petróleo"
        ],
        "correct": 1,
        "explanation": "✅ Na zona das Rías Altas destaca a produción madeireira, sobre todo de eucalipto."
    },
    {
        "question": "Cal é a zona máis densamente poboada de Galicia?",
        "answers": [
            "A montaña luguesa",
            "O interior de Ourense",
            "O litoral das Rías Baixas",
            "As illas Cíes"
        ],
        "correct": 2,
        "explanation": "✅ O litoral das Rías Baixas é a zona máis densamente poboada de Galicia, con moitas vilas, cidades e actividade económica."
    },
    {
        "question": "Como é o clima no interior de Galicia?",
        "answers": [
            "Máis suave que na costa, con moita chuvia",
            "Máis extremo, con menos chuvia e máis diferenza de temperaturas",
            "Igual que no deserto",
            "Moi húmido todo o ano"
        ],
        "correct": 1,
        "explanation": "✅ No interior de Galicia o clima é máis extremo: máis frío no inverno, máis calor no verán e menos precipitacións que na costa."
    },
    {
        "question": "Que tipo de vexetación domina no interior galego?",
        "answers": [
            "Bosques tropicais",
            "Campos de cultivo e pastos",
            "Selvas e xunglas",
            "Glaciares e neve todo o ano"
        ],
        "correct": 1,
        "explanation": "✅ No interior galego predominan os campos de cultivo e os pastos debido á explotación agrícola e gandeira."
    },
    {
        "question": "Que ocorre co clima nas zonas montañosas de Galicia?",
        "answers": [
            "É cálido e seco todo o ano",
            "É moi semellante ao da costa",
            "Ten invernos fríos, veráns frescos e chuvias abundantes",
            "Non hai ningún tipo de cambio climático"
        ],
        "correct": 2,
        "explanation": "✅ Nas zonas montañosas o clima é máis frío no inverno, fresco no verán e con abundantes chuvias, mesmo neve."
    },
    {
        "question": "Que tipo de actividade económica se realiza nos macizos montañosos do interior galego?",
        "answers": [
            "Turismo masivo",
            "Pesca mariña",
            "Cultivo de centeo, explotación forestal e gandería extensiva",
            "Minaría de ouro"
        ],
        "correct": 2,
        "explanation": "✅ Nos macizos montañosos do interior combínase o cultivo de centeo, a explotación forestal e a gandería ovina e caprina."
    }
],
    ccnn_6_tema2: [
        {
            question: "Cal é a función principal do aparello dixestivo?",
            answers: [
                "Transformar os alimentos en substancias que o corpo pode aproveitar",
                "Transportar o sangue por todo o corpo",
                "Respirar o osíxeno do aire",
                "Eliminar o suor"
            ],
            correct: 0,
            explanation: "✅ O aparello dixestivo transforma os alimentos en substancias que o corpo pode absorber e aproveitar."
        },
        {
            question: "Como se chama o proceso polo cal o corpo transforma os alimentos?",
            answers: [
                "Respiración",
                "Dixestión",
                "Circulación",
                "Excreción"
            ],
            correct: 1,
            explanation: "✅ O proceso de transformar os alimentos en substancias aproveitables chámase dixestión."
        },
        {
            question: "Cal das seguintes opcións NON forma parte do tubo dixestivo?",
            answers: [
                "Boca",
                "Estómago",
                "Intestino delgado",
                "Pulmón"
            ],
            correct: 3,
            explanation: "✅ O pulmón pertence ao aparello respiratorio, non ao dixestivo."
        },
        {
            question: "Que ocorre na boca durante a dixestión?",
            answers: [
                "O sangue recolle os nutrientes",
                "Os alimentos mastíganse e mestúranse coa saliva",
                "O aire entra no corpo",
                "Os alimentos chegan ao intestino groso"
            ],
            correct: 1,
            explanation: "✅ Na boca os alimentos mastíganse e mestúranse coa saliva, que comeza a dixerir os hidratos de carbono."
        },
        {
            question: "Cal destas glándulas pertence ao aparello dixestivo?",
            answers: [
                "Glándulas salivares",
                "Glándulas sudoríparas",
                "Glándulas nasais",
                "Glándulas lacrimais"
            ],
            correct: 0,
            explanation: "✅ As glándulas salivares son glándulas dixestivas que producen a saliva."
        },
        {
            question: "Por que é importante o intestino delgado?",
            answers: [
                "Porque serve para respirar mellor",
                "Porque os alimentos se transforman en enerxía",
                "Porque se absorben os nutrientes dos alimentos",
                "Porque elimina o dióxido de carbono"
            ],
            correct: 2,
            explanation: "✅ No intestino delgado é onde se absorben a maior parte dos nutrientes dos alimentos."
        },
        {
            question: "Que parte do tubo dixestivo continúa despois do estómago?",
            answers: [
                "A farinxe",
                "O intestino delgado",
                "O esófago",
                "O ano"
            ],
            correct: 1,
            explanation: "✅ Despois do estómago, o alimento pasa ao intestino delgado."
        },
        {
            question: "Cales son as principais glándulas dixestivas?",
            answers: [
                "Salivares, pancreáticas e hepáticas",
                "Sudoríparas, lacrimais e nasais",
                "Cerebrais, óseas e nerviosas",
                "Respiratorias e circulatorias"
            ],
            correct: 0,
            explanation: "✅ As principais glándulas dixestivas son as salivares, pancreáticas e hepáticas."
        },
        {
            question: "Cal é o último tramo do tubo dixestivo?",
            answers: [
                "O estómago",
                "O intestino groso",
                "O ano",
                "O esófago"
            ],
            correct: 2,
            explanation: "✅ O último tramo do tubo dixestivo é o ano, por onde se expulsan os restos dos alimentos."
        },
        {
            question: "Que fai a saliva cos alimentos na boca?",
            answers: [
                "Endurece os alimentos",
                "Abrandos e comeza a dixerir os hidratos de carbono",
                "Cambia a cor dos alimentos",
                "Descompón as graxas"
            ],
            correct: 1,
            explanation: "✅ A saliva ablanda os alimentos e comeza a dixerir os hidratos de carbono."
        },
        {
            question: "Que parte une a boca co estómago?",
            answers: [
                "O esófago",
                "O intestino delgado",
                "O fígado",
                "O páncreas"
            ],
            correct: 0,
            explanation: "✅ O esófago é o tubo que leva os alimentos desde a boca ata o estómago."
        },
        {
            question: "En que parte do corpo se almacenan os alimentos para continuar a dixestión?",
            answers: [
                "Na farinxe",
                "No estómago",
                "No intestino groso",
                "Na boca"
            ],
            correct: 1,
            explanation: "✅ No estómago os alimentos mestúranse cos zumes gástricos e continúan a dixestión."
        },
        {
            question: "Que función ten o esófago?",
            answers: [
                "Mesturar os alimentos cos zumes gástricos",
                "Transportar o bolo alimenticio ata o estómago",
                "Absorber os nutrientes",
                "Producir saliva"
            ],
            correct: 1,
            explanation: "✅ O esófago transporta o bolo alimenticio desde a farinxe ata o estómago."
        },
        {
            question: "Que ocorre no estómago durante a dixestión?",
            answers: [
                "O aire pasa aos pulmóns",
                "O bolo alimenticio mestúrase cos zumes gástricos e fórmase o quimo",
                "Absórbense os nutrientes",
                "Os alimentos convértense en feces"
            ],
            correct: 1,
            explanation: "✅ No estómago o bolo alimenticio mestúrase cos zumes gástricos e fórmase o quimo."
        },
        {
            question: "Como se chama a mestura semilíquida que se forma no estómago?",
            answers: [
                "Bolo alimenticio",
                "Quimo",
                "Bile",
                "Zume pancreático"
            ],
            correct: 1,
            explanation: "✅ O bolo alimenticio transfórmase en quimo cando se mestura cos zumes gástricos no estómago."
        },
        {
            question: "Canto tempo permanece o alimento no estómago aproximadamente?",
            answers: [
                "30 minutos",
                "2 horas",
                "6 horas",
                "1 día"
            ],
            correct: 1,
            explanation: "✅ O quimo permanece arredor de 2 horas no estómago antes de pasar ao intestino delgado."
        },
        {
            question: "En que parte do aparello dixestivo ocorre a maior parte da dixestión?",
            answers: [
                "Na boca",
                "No intestino delgado",
                "No esófago",
                "No intestino groso"
            ],
            correct: 1,
            explanation: "✅ A maior parte da dixestión ocorre no intestino delgado, onde se descompón o quimo en nutrientes."
        },
        {
            question: "Que substancias axudan á dixestión no intestino delgado?",
            answers: [
                "A bile, o zume pancreático e o zume intestinal",
                "O sangue e o aire",
                "A saliva e o suor",
                "O zume gástrico e a bilis negra"
            ],
            correct: 0,
            explanation: "✅ A bile, o zume pancreático e o zume intestinal axudan a descompoñer o quimo en nutrientes."
        },
        {
            question: "Como se chaman as substancias que pasan ao sangue dende o intestino delgado?",
            answers: [
                "Refugallos",
                "Nutrientes",
                "Feces",
                "Zumos"
            ],
            correct: 1,
            explanation: "✅ Os nutrientes resultantes da dixestión pasan ao sangue no intestino delgado mediante a absorción."
        },
        {
            question: "Que ocorre no intestino groso?",
            answers: [
                "Absórbense os nutrientes",
                "Absórbese a auga e fórmanse as feces",
                "Prodúcese o quimo",
                "Mastíganse os alimentos"
            ],
            correct: 1,
            explanation: "✅ No intestino groso absórbese a auga e fórmanse as feces a partir dos restos non aproveitados."
        },
        {
            question: "Que forma ten o intestino groso?",
            answers: [
                "De círculo",
                "De espiral",
                "De U invertida",
                "De liña recta"
            ],
            correct: 2,
            explanation: "✅ O intestino groso ten forma de U invertida e é máis ancho e curto que o intestino delgado."
        },
        {
            question: "Que seres viven no interior do intestino groso?",
            answers: [
                "Vermes",
                "Bacterias beneficiosas",
                "Fungos",
                "Virus"
            ],
            correct: 1,
            explanation: "✅ No intestino groso viven numerosas bacterias que axudan ao proceso dixestivo."
        },
        {
            question: "Cal é a función do ano?",
            answers: [
                "Absorber os nutrientes",
                "Producir bilis",
                "Expulsar os restos non aproveitados",
                "Mesturar os alimentos coa saliva"
            ],
            correct: 2,
            explanation: "✅ O ano é o último tramo do tubo dixestivo e serve para expulsar os restos non aproveitados."
        },
        {
            question: "Que parte do aparello dixestivo transforma o bolo alimenticio en quimo?",
            answers: [
                "O esófago",
                "O estómago",
                "O intestino groso",
                "A boca"
            ],
            correct: 1,
            explanation: "✅ No estómago, o bolo alimenticio mestúrase cos zumes gástricos e convértese en quimo."
        },
        {
            question: "Cal é a función das glándulas dixestivas?",
            answers: [
                "Producir zumes dixestivos para axudar a descompoñer os alimentos",
                "Transportar o sangue polo corpo",
                "Respirar o osíxeno do aire",
                "Absorber os nutrientes no intestino groso"
            ],
            correct: 0,
            explanation: "✅ As glándulas dixestivas producen os zumes dixestivos que axudan a descompoñer os alimentos no tubo dixestivo."
        },
        {
            question: "Onde se atopan as glándulas microscópicas?",
            answers: [
                "No corazón e nos pulmóns",
                "Na parede do estómago e do intestino delgado",
                "Na boca e no nariz",
                "No fígado e no páncreas"
            ],
            correct: 1,
            explanation: "✅ As glándulas microscópicas están na parede do estómago e do intestino delgado."
        },
        {
            question: "Cales son as glándulas anexas do aparello dixestivo?",
            answers: [
                "Glándulas sudoríparas, cerebrais e nasais",
                "Glándulas salivares, fígado e páncreas",
                "Glándulas lacrimais e respiratorias",
                "Glándulas do corazón e dos riles"
            ],
            correct: 1,
            explanation: "✅ As glándulas anexas son as salivares, o fígado e o páncreas."
        },
        {
            question: "Que produce o fígado para axudar na dixestión?",
            answers: [
                "Zume gástrico",
                "Bile",
                "Saliva",
                "Zume intestinal"
            ],
            correct: 1,
            explanation: "✅ O fígado produce a bile, que axuda a descompoñer as graxas durante a dixestión."
        },
        {
            question: "Que produce o páncreas?",
            answers: [
                "Zume pancreático",
                "Bile",
                "Saliva",
                "Zume gástrico"
            ],
            correct: 0,
            explanation: "✅ O páncreas produce o zume pancreático, que axuda a descompoñer os alimentos no intestino delgado."
        },
        {
            question: "Cal é a función principal do aparello circulatorio?",
            answers: [
                "Producir saliva",
                "Transportar osíxeno, nutrientes e outras substancias por todo o corpo",
                "Dixerir os alimentos",
                "Eliminar refugallos polo ano"
            ],
            correct: 1,
            explanation: "✅ O aparello circulatorio transporta osíxeno, nutrientes e outras substancias por todo o corpo."
        },
        {
            question: "De que partes está formado o aparello circulatorio?",
            answers: [
                "Do corazón, dos vasos sanguíneos e do sangue",
                "Dos pulmóns e do fígado",
                "Do esqueleto e dos músculos",
                "Do intestino e do estómago"
            ],
            correct: 0,
            explanation: "✅ O aparello circulatorio está formado polo corazón, os vasos sanguíneos e o sangue."
        },
        {
            question: "Que tamaño ten aproximadamente o corazón?",
            answers: [
                "Como unha cabeza",
                "Como un puño",
                "Como unha man aberta",
                "Como un dedo"
            ],
            correct: 1,
            explanation: "✅ O corazón é un órgano muscular aproximadamente do tamaño dun puño."
        },
        {
            question: "Cantas cavidades ten o corazón?",
            answers: [
                "Dúas",
                "Catro: dúas aurículas e dous ventrículos",
                "Tres",
                "Cinco"
            ],
            correct: 1,
            explanation: "✅ O corazón ten catro cavidades: dúas aurículas (superiores) e dous ventrículos (inferiores)."
        },
        {
            question: "Que separa o sangue con moito osíxeno do que ten pouco?",
            answers: [
                "Un tabique que divide o corazón en dúas partes",
                "As arterias",
                "As válvulas",
                "Os capilares"
            ],
            correct: 0,
            explanation: "✅ O corazón está dividido en dúas partes por un tabique que separa o sangue rico en osíxeno do pobre en osíxeno."
        },
        {
            question: "Por onde entra o sangue ao corazón?",
            answers: [
                "Polo ano",
                "Polas arterias",
                "Polas veas e as aurículas",
                "Polo esófago"
            ],
            correct: 2,
            explanation: "✅ O sangue entra nas aurículas do corazón a través das veas."
        },
        {
            question: "Que función teñen as válvulas do corazón?",
            answers: [
                "Impiden que o sangue retroceda",
                "Permiten que entre aire nos pulmóns",
                "Axudan a dixerir os alimentos",
                "Fabrican os glóbulos vermellos"
            ],
            correct: 0,
            explanation: "✅ As válvulas do corazón impiden que o sangue retroceda, asegurando que circule nunha soa dirección."
        },
        {
            question: "Que función teñen as arterias?",
            answers: [
                "Levan o sangue desde o corazón aos órganos",
                "Traen o sangue dos órganos ao corazón",
                "Conectan arterias e veas",
                "Filtran o sangue nos riles"
            ],
            correct: 0,
            explanation: "✅ As arterias levan o sangue desde o corazón ata os distintos órganos do corpo."
        },
        {
            question: "Cal é a función das veas?",
            answers: [
                "Levar o sangue con osíxeno aos pulmóns",
                "Traer o sangue dos órganos de volta ao corazón",
                "Conectar o corazón co estómago",
                "Levar o sangue só ás pernas"
            ],
            correct: 1,
            explanation: "✅ As veas traen o sangue dos órganos de volta ao corazón."
        },
        {
            question: "Para que serven os capilares?",
            answers: [
                "Producen sangue novo",
                "Conectan arterias e veas, permitindo o intercambio de gases e nutrientes",
                "Levan o sangue directamente ao cerebro",
                "Separan o sangue limpo do sucio"
            ],
            correct: 1,
            explanation: "✅ Os capilares conectan as arterias e as veas e permiten o intercambio de gases e nutrientes coas células."
        },
        {
            question: "Como son as paredes das arterias?",
            answers: [
                "Finas e con válvulas internas",
                "Grosas e elásticas",
                "Moi fráxiles",
                "Totalmente ríxidas"
            ],
            correct: 1,
            explanation: "✅ As arterias teñen paredes grosas e elásticas para resistir a presión do sangue que sae do corazón."
        },
        {
            question: "Que característica teñen as veas?",
            answers: [
                "Teñen paredes moi grosas",
                "Teñen paredes finas e válvulas internas",
                "Levan sangue con moito osíxeno sempre",
                "Producen glóbulos vermellos"
            ],
            correct: 1,
            explanation: "✅ As veas teñen paredes finas e válvulas internas que impiden que o sangue retroceda."
        },
        {
            question: "Que transportan os eritrocitos ou glóbulos vermellos?",
            answers: [
                "Osíxeno desde os pulmóns ao corpo",
                "Auga e sales minerais",
                "Defensas contra virus",
                "Hormonas"
            ],
            correct: 0,
            explanation: "✅ Os eritrocitos transportan o osíxeno desde os pulmóns ao resto do corpo."
        },
        {
            question: "Que substancia dá a cor vermella ao sangue?",
            answers: [
                "A bilis",
                "A hemoglobina",
                "O plasma",
                "As plaquetas"
            ],
            correct: 1,
            explanation: "✅ A hemoglobina, presente nos glóbulos vermellos, é a que lles dá a cor vermella ao sangue."
        },
        {
            question: "Cal é a función dos leucocitos ou glóbulos brancos?",
            answers: [
                "Transportar osíxeno",
                "Defender o organismo contra infeccións",
                "Axudar na dixestión",
                "Dar cor ao sangue"
            ],
            correct: 1,
            explanation: "✅ Os leucocitos son parte do sistema inmunitario e defenden o corpo contra infeccións."
        },
        {
            question: "Para que serven as plaquetas?",
            answers: [
                "Transportan nutrientes",
                "Axudan na coagulación do sangue cando hai unha ferida",
                "Dan cor ao sangue",
                "Eliminan toxinas"
            ],
            correct: 1,
            explanation: "✅ As plaquetas forman un tapón nas feridas para evitar a hemorraxia, participando na coagulación."
        },
        {
            question: "De que está formado o plasma sanguíneo?",
            answers: [
                "Principalmente de auga, nutrientes, sales minerais e produtos de desfeito",
                "De glóbulos vermellos e brancos",
                "De aire e azucre",
                "De graxa e proteínas sólidas"
            ],
            correct: 0,
            explanation: "✅ O plasma sanguíneo é un líquido amarelo formado sobre todo por auga, nutrientes e sales minerais."
        },
        {
            question: "Que tipo de sistema é o circulatorio humano?",
            answers: [
                "Aberto e simple",
                "Pechado e dobre",
                "Aberto e triple",
                "Pechado e único"
            ],
            correct: 1,
            explanation: "✅ O sistema circulatorio é pechado, porque o sangue circula sempre polos vasos, e é dobre, porque pasa dúas veces polo corazón."
        },
        {
            question: "Que ocorre na circulación pulmonar?",
            answers: [
                "O sangue con pouco osíxeno vai aos pulmóns para oxixenarse",
                "O sangue xa oxixenado vai ao corpo",
                "O sangue se mistura co aire",
                "O sangue se transforma en plasma"
            ],
            correct: 0,
            explanation: "✅ Na circulación pulmonar, o sangue con pouco osíxeno vai aos pulmóns para recoller osíxeno."
        },
        {
            question: "E na circulación xeral, que ocorre?",
            answers: [
                "O sangue con moito osíxeno vai ao resto do corpo",
                "O sangue volve aos pulmóns",
                "O sangue se transforma en quimo",
                "O sangue perde todos os nutrientes"
            ],
            correct: 0,
            explanation: "✅ Na circulación xeral, o sangue xa oxixenado distribúese por todo o corpo para levar osíxeno e nutrientes ás células."
        },
        {
            question: "Por onde sae do corazón o sangue con pouco osíxeno cara aos pulmóns?",
            answers: [
                "Pola arteria pulmonar",
                "Pola arteria aorta",
                "Pola vea cava",
                "Pola vea pulmonar"
            ],
            correct: 0,
            explanation: "✅ O sangue con pouco osíxeno sae do corazón cara aos pulmóns pola arteria pulmonar."
        },
        {
            question: "Que ocorre cos pulmóns na circulación do sangue?",
            answers: [
                "O sangue perde osíxeno e recolle dióxido de carbono",
                "O sangue recolle osíxeno e volve ao corazón polas veas pulmonares",
                "O sangue se mestura co aire",
                "O sangue se transforma en plasma"
            ],
            correct: 1,
            explanation: "✅ Nos pulmóns, o sangue recolle osíxeno e volve ao corazón polas veas pulmonares."
        },
        {
            question: "Como se chama a arteria máis grande do corpo humano?",
            answers: [
                "Arteria pulmonar",
                "Arteria aorta",
                "Vea cava",
                "Capilar principal"
            ],
            correct: 1,
            explanation: "✅ A arteria aorta é a máis grande do corpo e leva o sangue osixenado desde o corazón ao resto do corpo."
        },
        {
            question: "Que ocorre co sangue cando circula polo corpo?",
            answers: [
                "Perde osíxeno e recolle dióxido de carbono",
                "Gaña máis osíxeno",
                "Se convirte en plaquetas",
                "Deixa de circular"
            ],
            correct: 0,
            explanation: "✅ Ao circular polo corpo, o sangue perde osíxeno e recolle dióxido de carbono."
        },
        {
            question: "Por onde volve ao corazón o sangue con pouco osíxeno?",
            answers: [
                "Pola arteria aorta",
                "Polas veas cavas",
                "Pola arteria pulmonar",
                "Polos capilares"
            ],
            correct: 1,
            explanation: "✅ O sangue con pouco osíxeno volve ao corazón a través das veas cavas."
        },
        {
            question: "Que son as vías respiratorias?",
            answers: [
                "Uns condutos que comunican nariz, boca e pulmóns",
                "Un sistema de vasos sanguíneos",
                "Uns músculos do abdome",
                "As paredes do corazón"
            ],
            correct: 0,
            explanation: "✅ As vías respiratorias son condutos que comunican o nariz, a boca e os pulmóns."
        },
        {
            question: "Cal das seguintes opcións forma parte das vías respiratorias?",
            answers: [
                "Fosas nasais, farinxe, larinxe, tráquea e bronquios",
                "Intestino delgado e groso",
                "Aurículas e ventrículos",
                "Riles e vexiga"
            ],
            correct: 0,
            explanation: "✅ As vías respiratorias están formadas polas fosas nasais, farinxe, larinxe, tráquea e bronquios."
        },
        {
            question: "Que son os pulmóns?",
            answers: [
                "Dous sacos esponxosos situados na caixa torácica",
                "Músculos que fan bater o corazón",
                "Un órgano que produce bilis",
                "Uns ósos do peito"
            ],
            correct: 0,
            explanation: "✅ Os pulmóns son dous sacos esponxosos situados na caixa torácica que permiten respirar."
        },
        {
            question: "Que son os alvéolos pulmonares?",
            answers: [
                "Ramificacións dos bronquios onde ocorre o intercambio de gases",
                "As arterias principais dos pulmóns",
                "Uns músculos que fan subir o tórax",
                "Pequenos ósos da caixa torácica"
            ],
            correct: 0,
            explanation: "✅ Os alvéolos pulmonares son pequenas bolsas onde se produce o intercambio de gases entre o aire e o sangue."
        },
        {
            question: "Como se renova o aire nos alvéolos pulmonares?",
            answers: [
                "Grazas aos movementos de inspiración e expiración",
                "Cando o corazón latexa",
                "Por medio do fígado e do páncreas",
                "Cando se mestura coa saliva"
            ],
            correct: 0,
            explanation: "✅ O aire nos alvéolos renóvase grazas aos movementos de inspiración e expiración, que o corpo realiza automaticamente."
        },
        {
            question: "Que órgano se encarga do intercambio de gases?",
            answers: [
                "O corazón",
                "Os pulmóns",
                "O fígado",
                "O estómago"
            ],
            correct: 1,
            explanation: "✅ Os pulmóns son os órganos encargados do intercambio de gases: toman osíxeno e expulsan dióxido de carbono."
        },
        {
            question: "Que función ten o diafragma?",
            answers: [
                "Separar o tórax do abdome e axudar aos pulmóns a moverse",
                "Bombear o sangue",
                "Dixerir os alimentos",
                "Filtrar o sangue"
            ],
            correct: 0,
            explanation: "✅ O diafragma é un músculo grande que separa o tórax do abdome e axuda aos pulmóns nos movementos respiratorios."
        },
        {
            question: "Onde están situados os músculos intercostais?",
            answers: [
                "Entre as costelas",
                "No abdome",
                "No pescozo",
                "No fígado"
            ],
            correct: 0,
            explanation: "✅ Os músculos intercostais están entre as costelas e colaboran no movemento respiratorio."
        },
        {
            question: "Que ocorre co diafragma durante a inspiración?",
            answers: [
                "Sobe e os pulmóns contráense",
                "Baixa e os pulmóns dilátanse",
                "Reláxase e o aire sae",
                "Non se move"
            ],
            correct: 1,
            explanation: "✅ Durante a inspiración, o diafragma baixa e os pulmóns dilátanse para que entre o aire."
        },
        {
            question: "Que fan os músculos intercostais na inspiración?",
            answers: [
                "Reláxanse e reducen o tórax",
                "Contráense e expanden a caixa torácica",
                "Baixan o diafragma",
                "Empurran o aire cara fóra"
            ],
            correct: 1,
            explanation: "✅ Na inspiración, os músculos intercostais contráense e a caixa torácica expándese."
        },
        {
            question: "Que ocorre coa caixa torácica durante a expiración?",
            answers: [
                "Expándese e entra o aire",
                "Redúcese e sae o aire",
                "Mantense igual",
                "Xira cara un lado"
            ],
            correct: 1,
            explanation: "✅ Na expiración, a caixa torácica redúcese e o aire sae dos pulmóns."
        },
        {
            question: "Que movementos fan os pulmóns na inspiración e expiración?",
            answers: [
                "Dilátanse cando entra o aire e contráense cando sae",
                "Contráense cando entra o aire e dilátanse cando sae",
                "Non cambian de tamaño",
                "Xeran sangue novo"
            ],
            correct: 0,
            explanation: "✅ Os pulmóns dilátanse durante a inspiración e contráense durante a expiración."
        },
        {
            question: "Por onde entra o aire ao corpo?",
            answers: [
                "Polo nariz ou pola boca",
                "Pola pel",
                "Polo fígado",
                "Polo corazón"
            ],
            correct: 0,
            explanation: "✅ O aire entra polo nariz ou pola boca e chega aos pulmóns a través da tráquea e dos bronquios."
        },
        {
            question: "Que ocorre nos alvéolos pulmonares?",
            answers: [
                "Prodúcese o intercambio de gases entre o aire e o sangue",
                "O sangue se transforma en osíxeno",
                "Se mestura o aire co plasma",
                "Se xeran glóbulos vermellos"
            ],
            correct: 0,
            explanation: "✅ Nos alvéolos pulmonares prodúcese o intercambio de gases: o osíxeno pasa ao sangue e o dióxido de carbono sae del."
        },
        {
            question: "Que gas entra no sangue nos alvéolos?",
            answers: [
                "O dióxido de carbono",
                "O osíxeno",
                "O nitróxeno",
                "O vapor de auga"
            ],
            correct: 1,
            explanation: "✅ O osíxeno do aire pasa aos capilares sanguíneos e entra nos glóbulos vermellos."
        },
        {
            question: "Que gas sae do sangue cara aos alvéolos para ser expulsado?",
            answers: [
                "O osíxeno",
                "O dióxido de carbono",
                "O hidróxeno",
                "O nitróxeno"
            ],
            correct: 1,
            explanation: "✅ O dióxido de carbono pasa dos capilares aos alvéolos para ser expulsado durante a expiración."
        },
        {
            question: "Que é a respiración celular?",
            answers: [
                "O movemento do aire nos pulmóns",
                "O proceso polo cal as células usan osíxeno e nutrientes para obter enerxía",
                "A entrada de aire polo nariz",
                "A eliminación do dióxido de carbono polos pulmóns"
            ],
            correct: 1,
            explanation: "✅ A respiración celular é o proceso polo que as células usan osíxeno e nutrientes para producir enerxía."
        },
        {
            question: "Que se produce como resultado da respiración celular?",
            answers: [
                "Dióxido de carbono e enerxía",
                "Bile e saliva",
                "Ácido láctico e auga",
                "Osíxeno e sangue"
            ],
            correct: 0,
            explanation: "✅ Na respiración celular fórmase dióxido de carbono e enerxía que o corpo utiliza para vivir."
        },
        {
            question: "Como é o aire que sae dos pulmóns respecto ao que entra?",
            answers: [
                "Máis frío e seco",
                "Máis húmido e quente",
                "Igual",
                "Con máis osíxeno"
            ],
            correct: 1,
            explanation: "✅ O aire que sae dos pulmóns é máis húmido e quente ca o que entra."
        },
        {
            question: "Que é a excreción?",
            answers: [
                "O proceso polo cal o corpo elimina produtos de refugallo",
                "O proceso de dixestión dos alimentos",
                "A produción de enerxía celular",
                "O transporte de osíxeno"
            ],
            correct: 0,
            explanation: "✅ A excreción é o proceso mediante o cal o corpo elimina os produtos de refugallo xerados polas células."
        },
        {
            question: "Cales son os principais órganos excretores do corpo?",
            answers: [
                "O corazón e o fígado",
                "Os riles e as glándulas do suor",
                "Os pulmóns e o estómago",
                "O páncreas e o intestino"
            ],
            correct: 1,
            explanation: "✅ Os riles e as glándulas do suor son os principais órganos que eliminan os refugallos do corpo."
        }
    ]
}



function goToStart() {
      // Oculta a pantalla de introdución
      document.getElementById('intro-screen').classList.remove('active');

      // Mostra a pantalla de selección de categorías
      document.getElementById('start-slide').classList.add('active');
    }

  

function goToLevel(levelId) {
  hideAllSlides();
  document.getElementById(levelId).classList.add("active");
}

function backToStart() {
  hideAllSlides();
  document.getElementById("start-slide").classList.add("active");
}

function hideAllSlides() {
  document.querySelectorAll('.slide').forEach(slide => slide.classList.remove("active"));
}  
    
    
const quizTitles = {
  ccssudfour: "Organización Territorial",
  ccsstres: "Idade Media Na Península",
  clima: "Clima",
  plantas: "Plantas",
  naturais: "Materia-Enerxia",
  ecosistemas: "Ecosistemas",
  ccnnFive: "Máquinas Simples y Compuestas",
  ccss_materia: "CCSS",
  ccnn_materia: "CCNN",
  gallego_gramatica: "Galego-Verbos",
  ccssudsix: "Idade Moderna",
  ccnn_sexto: "CCNN-6",
  ccss_sexto: "CCSS-6",
  ccnn_6_tema1: "AS CÉLULAS E O SISTEMA NERVIOSO",
  ccss_6_tema1: "UNIDADE 1: O CLIMA E A PAISAXE",
  ccnn_6_tema2: "UNIDADE 2: A NUTRICION NO SER HUMANO",
};

  
const categoryMap = {
  ccssudfour: "ccssudfour",
  ccsstres: "ccsstres",
  ccnnudsix: "ccnnudsix",
  clima: "clima",
  plantas: "plantas",
  naturais: "naturais",
  ecosistemas: "ecosistemas",
  gallego_gramatica: "gallego_gramatica",
  ccnn_6_tema1: "ccnn_6_tema1",
  ccss_6_tema1: "ccss_6_tema1",
  ccnn_6_tema2: "ccnn_6_tema2",
};

function selectCategory(category) {
  originalCategory = category;
  mappedCategory = categoryMap[category] || category;
  currentCategory = mappedCategory; // aún útil
  currentQuestionIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  if (document.getElementById(category)) {
    showSlide(category);
    return;
  }

  if (category === 'ccss_materia' || category === 'ccnn_materia' || category === 'ccnn_sexto' || category === 'ccss_sexto') {
    showSlide(category + '-slide');
    return;
  }

  if (quizData[mappedCategory]) {
    selectedQuestions = getRandomQuestions(quizData[mappedCategory], 12);
    document.getElementById("quiz-title").innerText = quizTitles[mappedCategory] || "Cuestionario";
    disableCategoryButtons(category);
    showSlide("intro-slide");
    return;
  }

  alert("Categoría non atopada: " + category);
}


function getRandomQuestions(allQuestions, count) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}



function startQuiz() {
  // Mostrar slide coas preguntas da categoría seleccionada
  showSlide(currentCategory + "-slide");
  loadQuestion();
}

function showSlide(slideId) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const targetSlide = document.getElementById(slideId);
  if (!targetSlide) {
    console.error(`Slide con ID "${slideId}" non existe.`);
    return;
  }

  targetSlide.classList.add("active");
}


function loadQuestion() {
  console.log(`Cargando pregunta ${currentQuestionIndex + 1}`);

  const q = selectedQuestions[currentQuestionIndex];
  if (!q) {
    console.warn("Pregunta no encontrada. Posiblemente fuera del rango.");
    return;
  }

  console.log("Pregunta cargada:", q.question);

  document.getElementById(`question-text-${currentCategory}`).innerText = q.question;
  document.getElementById(`question-counter-${currentCategory}`).innerText =
    `Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;

  const container = document.getElementById(`answers-container-${currentCategory}`);
  container.innerHTML = "";

  const feedback = document.getElementById(`feedback-${currentCategory}`);
  feedback.innerText = "";
  feedback.className = "feedback";

  const selectedAnswers = new Set();

  q.answers.forEach((answer, index) => {
    console.log(`Creando botón para respuesta ${index}:`, answer);
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.dataset.index = index;
    btn.classList.add("answer-btn");

    btn.onclick = () => {
      if (selectedAnswers.has(index)) {
        selectedAnswers.delete(index);
        btn.classList.remove("selected");
        console.log(`Respuesta ${index} deseleccionada`);
      } else {
        selectedAnswers.add(index);
        btn.classList.add("selected");
        console.log(`Respuesta ${index} seleccionada`);
      }
    };

    container.appendChild(btn);
  });

  const verifyBtn = document.createElement("button");
  verifyBtn.innerText = "Verificar";
  verifyBtn.style.backgroundColor = "#28a745";
  verifyBtn.style.marginTop = "10px";
  verifyBtn.onclick = () => {
    console.log("Botón Verificar presionado con respuestas seleccionadas:", Array.from(selectedAnswers));
    checkAnswer(Array.from(selectedAnswers));
  };

  container.appendChild(verifyBtn);

  resetTimer();
}



function selectAnswer(index) {
  const buttons = document.querySelectorAll(`#answers-container-${currentCategory} .answer-btn`);
  buttons.forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });

  checkAnswer([index]); // Aquí se llama correctamente
}


function checkAnswer(selectedIndexes) {
  const question = selectedQuestions[currentQuestionIndex];

  let correctIndexes = question.correct;
  if (!Array.isArray(correctIndexes)) {
    correctIndexes = [correctIndexes];
  }

  if (!selectedIndexes || selectedIndexes.length === 0) {
    alert("Debes seleccionar al menos una respuesta.");
    return;
  }

  const isCorrect = arraysEqual(
    selectedIndexes.slice().sort(),
    correctIndexes.slice().sort()
  );

  const feedback = document.getElementById(`feedback-${currentCategory}`);
  if (!feedback) {
    console.warn(`No se encontró feedback para la categoría: ${currentCategory}`);
    return;
  }
  feedback.classList.remove("correct", "incorrect");
  
  if (isCorrect) {
    feedback.innerHTML = `✅ ¡Correcto!<br><em>${question.explanation || ""}</em>`;
    feedback.classList.add("correct");
    correctCount++;
  } else {
    feedback.innerHTML = `❌ Incorrecto.<br><em>${question.explanation || ""}</em>`;
    feedback.classList.add("incorrect");
    incorrectCount++;
  }
}





function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}




document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.footer-column a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const id = link.getAttribute('href').substring(1); // sin "#"

      // Caso 1: slide estático como "start-slide"
      if (document.getElementById(id)) {
        showSlide(id);
        return;
      }

      // Caso 2: categoría de cuestionario como "ccss"
      selectCategory(id);
    });
  });
})


function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}


function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showSlide("end-slide");
        showResults();
    }
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25;
  
  const timerElem = document.getElementById(`timer-${currentCategory}`);
  if (!timerElem) {
    console.warn(`No se encontró elemento con id 'timer-${currentCategory}'`);
    return;
  }
  
  timerElem.innerText = `Tempo restante: ${timeLeft}s`;
  
  timer = setInterval(() => {
    timeLeft--;
    timerElem.innerText = `Tempo restante: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      
      const feedback = document.getElementById(`feedback-${currentCategory}`);
      feedback.innerText = "🔴 Tempo esgotado!";
      feedback.className = "feedback incorrect";

      const buttons = document.querySelectorAll(`#answers-container-${currentCategory} .answer-btn`);
      buttons.forEach(btn => btn.disabled = true);

      incorrectCount++;
    }
  }, 1000);
} 





function showResults() {
  const endSlide = document.getElementById("end-slide");
  endSlide.innerHTML = `
    <h2>Resultados</h2>
    <p>✅ Correctas: ${correctCount}</p>
    <p>❌ Incorrectas: ${incorrectCount}</p>
    <button onclick="restartQuiz()">Volver ao inicio</button>
  `;
}




// Deshabilitar todos los botones excepto el seleccionado (o todos)
function disableCategoryButtons(selectedCategory) {
  const startSlide = document.getElementById("start-slide");
  const buttons = startSlide.querySelectorAll("button");

  buttons.forEach(btn => {
    // Opcional: si quieres que el botón seleccionado quede habilitado:
     btn.disabled = btn.getAttribute('onclick').includes(selectedCategory) ? false : true;

    // Si prefieres deshabilitar todos al comenzar:
    //btn.disabled = true;
  });
}

// Habilitar todos los botones
function enableCategoryButtons() {
  const startSlide = document.getElementById("start-slide");
  const buttons = startSlide.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = false;
  });

}


function restartQuiz() {
  currentCategory = "";
  currentQuestionIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  // Habilitar botones para que se pueda elegir otro cuestionario
  enableCategoryButtons();

  // Mostrar pantalla inicial
  showSlide("intro-screen");
}


function copiarBizum() {
    const codigo = document.getElementById("bizumCode").innerText;
    navigator.clipboard.writeText(codigo).then(() => {
      alert("Código Bizum copiado: " + codigo);
    }).catch(err => {
      console.error("Erro ao copiar o código Bizum", err);
    });
  }

 




